import Client from '../database';

export type Replies = {
	id?: string;
	parent_tweet: number;
	replies: number;
};

export class RepliesStore {
	async index(): Promise<Replies[]> {
		try {
			const conn = await Client.connect();
			const sql = 'SELECT * FROM replies';
			const result = await conn.query(sql);
			conn.release();
			return result.rows;
		} catch (err) {
			throw new Error(`Cannot Get All Likes ${err}`);
		}
	}
	async create(r: Replies): Promise<Replies> {
		try {
			const conn = await Client.connect();
			const sql =
				'INSERT INTO replies (parent_tweet,replies) VALUES ($1,$2) RETURNING *';
			const result = await conn.query(sql, [r.parent_tweet, r.replies]);
			conn.release();
			return result.rows[0];
		} catch (err) {
			throw new Error(`Cannot Add Like ${err}`);
		}
	}
}
