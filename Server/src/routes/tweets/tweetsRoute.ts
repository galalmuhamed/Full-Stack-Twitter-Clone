import { index, create } from '../../handlers/tweet';
import { Router } from 'express';

const tweetRoute = Router();

tweetRoute.get('/', index).post('/', create);

export default tweetRoute;
