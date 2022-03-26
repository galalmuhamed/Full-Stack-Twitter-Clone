import React from 'react';
import { Links, Paragraph } from './Styles/SideBar.styled';

const SideBarOptions = ({ to, Icon, text }) => {
	return (
		<Links to={to} activeclassname="active">
			<Icon />
			<Paragraph>{text}</Paragraph>
		</Links>
	);
};

export default SideBarOptions;
