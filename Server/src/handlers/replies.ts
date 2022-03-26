import { Replies, RepliesStore } from '../models/replies';
import { Request, Response, NextFunction } from 'express';

const store = new RepliesStore();

export const index = async (
	_req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const replies = await store.index();
		res.json(replies);
	} catch (err) {
		next(err);
	}
};

export const create = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const repliesInfo: Replies = {
			parent_tweet: req.body.parent_tweet,
			replies: req.body.replies,
		};
		const tweet = await store.create(repliesInfo);
		res.json(tweet);
	} catch (err) {
		next(err);
	}
};
