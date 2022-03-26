import React from 'react';
import {
	SideBarContainer,
	Top,
	Logo,
	Center,
	Bottom,
	BottomContainer,
	UserInfo,
	LogOutContainer,
	UserInfoTwo,
	LogOutBtn,
} from './Styles/SideBar.styled';
import { BsTwitter, BsFillPersonFill } from 'react-icons/bs';
import SideBarOptions from './SideBarOptions';
import { RiHome7Fill } from 'react-icons/ri';
import { GiFeather } from 'react-icons/gi';
import { Img } from './Styles/Global.styled';
import { useDispatch, useSelector } from 'react-redux';
import { Opacity } from './Styles/AppContainer.styled';
import { logOut } from '../Redux/Actions/AuthedUser';

const SideBar = ({ isOpen, setIsOpen }) => {
	const authedUser = useSelector(state => state.AuthedUser);
	const users = useSelector(state => state.Users);
	const user = users.filter(u => u.user_name === authedUser);
	const dispatch = useDispatch();

	const handleLogOut = e => {
		dispatch(logOut());
		setIsOpen(false);
	};
	return (
		<SideBarContainer>
			<Top>
				<Logo>
					<BsTwitter />
				</Logo>
			</Top>
			<Center>
				<SideBarOptions to="/" text="Home" Icon={RiHome7Fill} />
				<SideBarOptions
					to={`/${user[0].user_name}`}
					text="Profile"
					Icon={BsFillPersonFill}
				/>
				<SideBarOptions to="/create" text="Tweet" Icon={GiFeather} />
			</Center>
			<Bottom>
				<BottomContainer onClick={() => setIsOpen(true)}>
					<Img src={user[0].avatar_url} />
					<UserInfo>
						<p>{`${user[0].first_name} ${user[0].last_name}`}</p>
						<p>{user[0].email}</p>
					</UserInfo>
					{isOpen && (
						<LogOutContainer>
							<UserInfoTwo>
								<Img src={user[0].avatar_url} />
								<UserInfo>
									<p>{`${user[0].first_name} ${user[0].last_name}`}</p>
									<p>{user[0].email}</p>
								</UserInfo>
							</UserInfoTwo>
							<LogOutBtn
								onClick={handleLogOut}
							>{`Log out @${user[0].user_name}`}</LogOutBtn>
						</LogOutContainer>
					)}
				</BottomContainer>
			</Bottom>
			{isOpen && <Opacity onClick={() => setIsOpen(false)}></Opacity>}
		</SideBarContainer>
	);
};

export default SideBar;
