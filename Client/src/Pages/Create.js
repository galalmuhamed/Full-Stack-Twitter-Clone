import React from 'react';
import { CreateContainer } from '../Components/Styles/Create.styled';
import Title from '../Components/Title';
import NewTweet from '../Components/NewTweet';

const Create = () => {
	return (
		<CreateContainer>
			<Title title="New Tweet" />
			<NewTweet />
		</CreateContainer>
	);
};

export default Create;
