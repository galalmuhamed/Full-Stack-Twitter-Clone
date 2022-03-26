import { TweetStore, Tweet } from '../models/tweet';
import { Request, Response, NextFunction } from 'express';

const store = new TweetStore();

export const index = async (
	_req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const tweets = await store.index();
		res.json(tweets);
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
		const tweetInfo: Tweet = {
			text: req.body.text,
			author: req.body.author,
		};
		if (tweetInfo.text === '') {
			res.status(400).send('Cannot Tweet To Be Empty');
			return;
		}
		const tweet = await store.create(tweetInfo);
		res.json(tweet);
	} catch (err) {
		next(err);
	}
};
