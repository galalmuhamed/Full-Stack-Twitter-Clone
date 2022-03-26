import React, { useState, useEffect } from 'react';
import {
	SearchContainer,
	BoxContainer,
	InputContainer,
	Input,
	OlContainer,
	Card,
	CardInfo,
	SearchImg,
	Links,
} from './Styles/Search.styled';
import { MdSearch } from 'react-icons/md';
import { useSelector } from 'react-redux';

const Search = () => {
	const [offset, setOffset] = useState(0);
	const [search, setSearch] = useState('');
	const users = useSelector(state => state.Users);

	const filterUsers = users.filter(
		user =>
			(user.first_name + ' ' + user.last_name)
				.toLowerCase()
				.includes(search.toLowerCase()) ||
			user.user_name.toLowerCase().includes(search.toLowerCase())
	);

	useEffect(() => {
		const onScroll = () => setOffset(window.pageYOffset);
		// clean up code
		window.removeEventListener('scroll', onScroll);
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	}, []);
	return (
		<SearchContainer>
			<BoxContainer offset={offset}>
				<InputContainer>
					<MdSearch />
					<Input
						placeholder="Search People"
						value={search}
						onChange={e => setSearch(e.target.value)}
					/>
				</InputContainer>
				{search.trim() && search.trim().length > 0 && (
					<OlContainer>
						{filterUsers.map(user => (
							<Card key={user.id}>
								<SearchImg src={user.avatar_url} />
								<CardInfo>
									<Links
										to={`/${user.user_name}`}
									>{`${user.first_name} ${user.last_name}`}</Links>
									<p>{`@${user.user_name}`}</p>
								</CardInfo>
							</Card>
						))}
						{filterUsers.length === 0 && (
							<Card>{`No result for: ${search}`}</Card>
						)}
					</OlContainer>
				)}
			</BoxContainer>
		</SearchContainer>
	);
};

export default Search;
