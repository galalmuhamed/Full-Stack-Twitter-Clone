import { UserStore, User } from '../models/user';
import { Request, Response, NextFunction } from 'express';

const store = new UserStore();

export const index = async (
	_req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const users = await store.index();
		res.json(users);
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
		const userInfo: User = {
			first_name: req.body.first_name,
			last_name: req.body.last_name,
			email: req.body.email,
			user_name: req.body.user_name,
			avatar_url: req.body.avatar_url,
			gender: req.body.gender,
			password: req.body.password,
		};
		const allUsers = await store.index();
		const userNames = allUsers.map(user => user.user_name);
		const emails = allUsers.map(user => user.email);

		if (
			userInfo.first_name === '' ||
			userInfo.last_name === '' ||
			userInfo.email === '' ||
			userInfo.user_name === '' ||
			userInfo.avatar_url === '' ||
			userInfo.gender === '' ||
			userInfo.password === ''
		) {
			res
				.status(400)
				.send(
					'Cannot First Name, Last Name, email, Avatar, Gender And password to be Empty'
				);
			return;
		} else if (!['Male', 'Female'].includes(userInfo.gender)) {
			res.status(400).send('Gender must be Male OR Female');
			return;
		} else if (userNames.includes(userInfo.user_name)) {
			res.status(400).send('User Name Must be Unique choose another User Name');
			return;
		} else if (emails.includes(userInfo.email)) {
			res.status(400).send('Email Must be Unique choose another Email');
			return;
		}
		const user = await store.create(userInfo);
		res.json(user);
	} catch (err) {
		next(err);
	}
};
export const updateFirstName = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const firstName = req.body.first_name;
		const userName = req.params.id;
		const user = await store.updateFirstName(firstName, userName);
		res.json(user);
	} catch (err) {
		next(err);
	}
};
export const updateLastName = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const lastName = req.body.last_name;
		const userName = req.params.id;
		const user = await store.updateLastName(lastName, userName);
		res.json(user);
	} catch (err) {
		next(err);
	}
};

export const authentication = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const email = req.body.email;
		const password = req.body.password;
		const user = await store.authentication(email, password);
		res.json(user);
	} catch (err) {
		next(err);
	}
};
