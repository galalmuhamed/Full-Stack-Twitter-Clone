import { index, create } from '../../handlers/replies';
import { Router } from 'express';

const repliesRoute = Router();

repliesRoute.get('/', index).post('/', create);

export default repliesRoute;
