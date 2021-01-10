import React, { useState } from "react";
import styled from "styled-components";
import colors from "../values/colors";
import HeaderLofo from "../assets/images/HeaderLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
const HeaderContainer = styled.div`
	height: 70px;
	background-color: ${colors.white};
	display: flex;
	align-items: center;
	justify-content: space-between;
	box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.5);
	position: fixed;
	z-index: 10;
	top: 0px;
	padding: 0 5%;
	width: 100%;
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
const Header = ({}) => {
	return (
		<HeaderContainer>
			<InsideContainer style={{ paddingLeft: 80 }}>
				<a>
					<img src={HeaderLofo} alt="Logo" />
				</a>
			</InsideContainer>
			<InsideContainer>
				<TopNavi style={{ color: colors.yellow }}>Trang Chủ</TopNavi>
				<TopNavi>Về chúng tôi</TopNavi>

				<TopNavi>Tìm chuyến xe</TopNavi>

				<TopNavi>Hóa đơn</TopNavi>

				<TopNavi>Tin tức</TopNavi>
			</InsideContainer>
			<InsideContainer>
				<AuthenText>Đăng nhập</AuthenText>
			</InsideContainer>
		</HeaderContainer>
	);
};

export default Header;
