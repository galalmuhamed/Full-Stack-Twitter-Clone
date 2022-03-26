import Client from '../database';
import bcrypt from 'bcrypt';
import config from '../config/config';

export type User = {
	id?: string;
	first_name: string;
	last_name: string;
	email: string;
	user_name: string;
	avatar_url: string;
	gender: string;
	password: string;
	date_created?: string;
};

const hashFunc = (pass: string): string => {
	const hash = bcrypt.hashSync(
		pass + config.BCRYPT_PASSWORD,
		parseInt(config.SALT_ROUND as string)
	);
	return hash;
};

export class UserStore {
	async index(): Promise<User[]> {
		try {
			const conn = await Client.connect();
			const sql = 'SELECT * FROM users';
			const result = await conn.query(sql);
			conn.release();
			return result.rows;
		} catch (err) {
			throw new Error(`Cannot get All Users ${err}`);
		}
	}
	async create(u: User): Promise<User> {
		try {
			const conn = await Client.connect();
			const sql =
				'INSERT INTO users (first_name, last_name, email, user_name, avatar_url, gender, password) VALUES ($1, $2, $3, $4, $5, $6,$7) RETURNING id, first_name, last_name, email, user_name, avatar_url, gender, date_created';
			const result = await conn.query(sql, [
				u.first_name,
				u.last_name,
				u.email,
				u.user_name,
				u.avatar_url,
				u.gender,
				hashFunc(u.password),
			]);
			conn.release();
			return result.rows[0];
		} catch (err) {
			throw new Error(`Cannot Create User ${err}`);
		}
	}
	async updateFirstName(firstName: string, userName: string): Promise<User> {
		try {
			const conn = await Client.connect();
			const sql =
				'UPDATE users SET first_name = ($1) WHERE user_name = ($2) RETURNING *';
			const result = await conn.query(sql, [firstName, userName]);
			conn.release();
			return result.rows[0];
		} catch (err) {
			throw new Error(`Cannot Update First Name ${err}`);
		}
	}
	async updateLastName(lastName: string, userName: string): Promise<User> {
		try {
			const conn = await Client.connect();
			const sql =
				'UPDATE users SET last_name = ($1) WHERE user_name = ($2) RETURNING *';
			const result = await conn.query(sql, [lastName, userName]);
			conn.release();
			return result.rows[0];
		} catch (err) {
			throw new Error(`Cannot Update Last Name ${err}`);
		}
	}
	async authentication(email: string, pass: string): Promise<User | null> {
		try {
			const conn = await Client.connect();
			const sql = 'SELECT password FROM users WHERE email = ($1)';
			const result = await conn.query(sql, [email]);
			if (result.rows.length) {
				const user = result.rows[0];
				const isPasswordValid = bcrypt.compareSync(
					pass + config.BCRYPT_PASSWORD,
					user.password
				);
				if (isPasswordValid) {
					const userInfo = await conn.query(
						'SELECT id, first_name, last_name, email, user_name, avatar_url, gender, date_created FROM users WHERE email = ($1)',
						[email]
					);
					return userInfo.rows[0];
				}
			}
			conn.release();
			return null;
		} catch (err) {
			throw new Error(`Cannot Sign In ${err}`);
		}
	}
}
