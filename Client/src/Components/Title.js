import React, { useState, useEffect } from 'react';
import { HomeTitle } from './Styles/DashBoard.styled';

const Title = ({ title }) => {
	const [offset, setOffset] = useState(0);

	useEffect(() => {
		const onScroll = () => setOffset(window.pageYOffset);
		// clean up code
		window.removeEventListener('scroll', onScroll);
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	return <HomeTitle offset={offset}>{title}</HomeTitle>;
};

export default Title;
