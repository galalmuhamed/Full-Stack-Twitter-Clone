import {
	index,
	create,
	authentication,
	updateFirstName,
	updateLastName,
} from '../../handlers/user';
import { Router } from 'express';

const userRoute = Router();

userRoute
	.get('/', index)
	.post('/', create)
	.post('/authentication', authentication)
	.put('/:id', updateFirstName)
	.put('/last/:id', updateLastName);

export default userRoute;
