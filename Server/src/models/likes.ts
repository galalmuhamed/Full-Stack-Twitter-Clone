import Client from '../database';

export type Likes = {
	id?: string;
	user_id: string;
	tweet_id: number;
};

export class LikesStore {
	async index(): Promise<Likes[]> {
		try {
			const conn = await Client.connect();
			const sql = 'SELECT * FROM likes';
			const result = await conn.query(sql);
			conn.release();
			return result.rows;
		} catch (err) {
			throw new Error(`Cannot Get All Likes ${err}`);
		}
	}
	async create(l: Likes): Promise<Likes> {
		try {
			const conn = await Client.connect();
			const sql =
				'INSERT INTO likes (user_id,tweet_id) VALUES ($1,$2) RETURNING *';
			const result = await conn.query(sql, [l.user_id, l.tweet_id]);
			conn.release();
			return result.rows[0];
		} catch (err) {
			throw new Error(`Cannot Add Like ${err}`);
		}
	}
	async delete(id: string): Promise<Likes> {
		try {
			const conn = await Client.connect();
			const sql = 'DELETE FROM likes WHERE id = ($1) RETURNING *';
			const result = await conn.query(sql, [id]);
			conn.release();
			return result.rows[0];
		} catch (err) {
			throw new Error(`Cannot Delete ${err}`);
		}
	}
}
