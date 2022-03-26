import { Router } from 'express';
import userRoute from './users/usersRoute';
import tweetRoute from './tweets/tweetsRoute';
import likeRoute from './likes/likesRoute';
import repliesRoute from './replies/repliesRoute';
const route = Router();

route.get('/', (_req, res) => {
	res.send('Welcome Twitter');
});

route.use('/users', userRoute);
route.use('/tweets', tweetRoute);
route.use('/likes', likeRoute);
route.use('/replies', repliesRoute);

export default route;
