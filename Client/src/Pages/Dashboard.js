import React from 'react';
import { DashBoardContainer } from '../Components/Styles/DashBoard.styled';
import Feeds from '../Components/Feeds';

import Title from '../Components/Title';
const Dashboard = () => {
	return (
		<DashBoardContainer>
			<Title title="Home" />
			<Feeds />
		</DashBoardContainer>
	);
};

export default Dashboard;
