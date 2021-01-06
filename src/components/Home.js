import React, { useState } from "react";
import styled from "styled-components";
import colors from "../values/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import Header from "../commons/Header";
import MainContainer from "../commons/MainContainer";
import FatFooter from "../commons/FatFooter";
import ChooseRoute from "../commons/ChooseRoute";
import HomeBackground from "../assets/images/HomeBackground.png";
import Route from "../commons/Route";
const HeaderContainer = styled.div`
	height: 70px;
	background-color: ${colors.white};
	display: flex;
	align-items: center;
	justify-content: space-between;
	box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.5);
	position: fixed;
	top: 0px;
	padding: 0 5%;
	width: 90%;
`;
const InsideContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: space-between;
	justify-content: space-between;
`;
const AuthenText = styled.a`
	font-size: 13px;
`;
const TopNavi = styled.a`
	font-size: 15px;
	padding: 8px 16px;
	text-transform: uppercase;
	font-weight: bold;
`;
const BackgroundImage = styled.img`
	z-index: -1;
	position: absolute;
	width: 90%;
`;
const Routes = styled.div`
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
	justify-content: space-between;
	margin: 10px 67px;
`;
const CommonRoutes = styled.p`
	font-family: Open Sans;
	font-size: 24px;
	font-weight: bold;
	margin-left: 67px;
	margin-top: 60px;
`;
const Home = ({}) => {
	return (
		<>
			<Header />
			<MainContainer>
				<div>
					<BackgroundImage src={HomeBackground} />
				</div>
				<ChooseRoute />
				<CommonRoutes>Tuyến phổ biến</CommonRoutes>
				<Routes>
					<Route></Route>
					<Route></Route>
					<Route></Route>
					<Route></Route>
					<Route></Route>
					<Route></Route>
					<Route></Route>
					<Route></Route>
				</Routes>
			</MainContainer>
			<FatFooter />
		</>
	);
};

export default Home;
