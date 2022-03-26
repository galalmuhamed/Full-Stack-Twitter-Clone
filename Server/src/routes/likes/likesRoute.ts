import { index, create, destroy } from '../../handlers/likes';
import { Router } from 'express';

const likeRoute = Router();

likeRoute.get('/', index).post('/', create).delete('/:id', destroy);

export default likeRoute;
