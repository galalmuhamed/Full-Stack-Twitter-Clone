import { LikesStore, Likes } from '../models/likes';
import { Request, Response, NextFunction } from 'express';

const store = new LikesStore();

export const index = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		//const tweet_id = req.body.tweet_id; tweet_id //type string or number must check
		const likes = await store.index();
		res.json(likes);
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
		const likeInfo: Likes = {
			user_id: req.body.user_id,
			tweet_id: parseInt(req.body.tweet_id),
		};
		const like = await store.create(likeInfo);
		res.json(like);
	} catch (err) {
		next(err);
	}
};

export const destroy = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const id = req.params.id;
		const like = await store.delete(id);
		res.json(like);
	} catch (err) {
		next(err);
	}
};
