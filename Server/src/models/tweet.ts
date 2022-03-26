import Client from '../database';

export type Tweet = {
	id?: string;
	text: string;
	timestamp?: string;
	author: string;
};

export class TweetStore {
	async index(): Promise<Tweet[]> {
		try {
			const conn = await Client.connect();
			const sql = 'SELECT * FROM tweets';
			const result = await conn.query(sql);
			conn.release();
			return result.rows;
		} catch (err) {
			throw new Error(`Cannot Get All Tweets ${err}`);
		}
	}
	async create(t: Tweet): Promise<Tweet> {
		try {
			const conn = await Client.connect();
			const sql =
				'INSERT INTO tweets (text, author) values ($1, $2) RETURNING *';
			const result = await conn.query(sql, [t.text, t.author]);
			conn.release();
			return result.rows[0];
		} catch (err) {
			throw new Error(`Cannot Create New Tweet ${err}`);
		}
	}
}
