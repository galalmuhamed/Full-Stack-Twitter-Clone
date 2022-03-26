import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import GlobalStyles from './Components/Styles/Global.styled';
import { AppContainer, Opacity } from './Components/Styles/AppContainer.styled';
import SideBar from './Components/SideBar';
import Dashboard from './Pages/Dashboard';
import Search from './Components/Search';
import { useDispatch, useSelector } from 'react-redux';
import { handleIntialData } from './Redux/Actions/shared';
import Login from './Pages/Login';
import Profile from './Pages/Profile';
import TweetPage from './Pages/TweetPage';
import Create from './Pages/Create';
const App = () => {
	const dispatch = useDispatch();
	const AuthedUser = useSelector(state => state.AuthedUser);
	useEffect(() => {
		dispatch(handleIntialData());
	}, []);
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			<GlobalStyles />
			{AuthedUser == null ? (
				<Login />
			) : (
				<AppContainer>
					<SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
					{isOpen && <Opacity onClick={() => setIsOpen(false)}></Opacity>}
					<Routes>
						<Route path="/" element={<Dashboard />} />
						<Route path="/create" element={<Create />} />
						<Route path="/:id" element={<Profile />} />
						<Route path="/tweet/:id" element={<TweetPage />} />
					</Routes>
					<Search />
				</AppContainer>
			)}
		</>
	);
};

export default App;
