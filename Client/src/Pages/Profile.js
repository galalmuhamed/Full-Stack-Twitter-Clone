import React, { useState } from 'react';
import {
	ProfileContainer,
	CardContainer,
	BoxOne,
	BoxTwo,
	ImgContainer,
	WhiteCircle,
	ImgProfile,
	UpdateProfile,
	UserInfo,
	Joined,
	SubTitle,
} from '../Components/Styles/Profile.styled';
import Title from '../Components/Title';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { BsCalendar3 } from 'react-icons/bs';
import Tweet from '../Components/Tweet';
import UpdateBox from '../Components/UpdateBox';
const Profile = () => {
	const { id } = useParams();
	const [isOpen, setIsOpen] = useState(false);
	const users = useSelector(state => state.Users);
	const allTweets = useSelector(state => state.Tweets);
	const authedUser = useSelector(state => state.AuthedUser);
	const u = users.filter(u => u.user_name === id);
	const user = u && u[0];
	const tweets = user && allTweets.filter(t => t.author === user.user_name);
	const formatTimestamp =
		user && user.date_created.slice(0, user.date_created.length - 14);
	if (!user) {
		return <div>User Not Found</div>;
	}

	return (
		<ProfileContainer>
			<Title title={`${user.first_name} ${user.last_name}`} />
			<CardContainer>
				<BoxOne></BoxOne>
				<BoxTwo>
					<ImgContainer>
						<WhiteCircle>
							<ImgProfile src={user.avatar_url} />
						</WhiteCircle>
						{authedUser === user.user_name && (
							<>
								<div></div>
								<UpdateProfile onClick={() => setIsOpen(true)}>
									Update Profile
								</UpdateProfile>
							</>
						)}
						{isOpen && <UpdateBox user={user} setIsOpen={setIsOpen} />}
					</ImgContainer>
					<UserInfo>
						<p>{`${user.first_name} ${user.last_name}`}</p>
						<p>{`@${user.user_name}`}</p>
					</UserInfo>
					<Joined>
						<BsCalendar3 />
						<p>{`Joined ${formatTimestamp}`}</p>
					</Joined>
					{tweets.length > 0 ? (
						<SubTitle>Tweets You Created</SubTitle>
					) : (
						<SubTitle>No Tweets Yet</SubTitle>
					)}
				</BoxTwo>
			</CardContainer>
			{tweets.length > 0 &&
				tweets.map(tweet => <Tweet id={tweet.id} key={tweet.id} />)}
		</ProfileContainer>
	);
};

export default Profile;
