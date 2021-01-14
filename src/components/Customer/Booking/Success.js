import React, { useState } from "react";
import styled from "styled-components";
import colors from "../../../values/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Header from "../../../commons/Header";
import MainContainer from "../../../commons/MainContainer";
import FatFooter from "../../../commons/FatFooter";
import { useHistory } from "react-router-dom";
import MiniProgressBar from "../../../commons/MiniProgressBar";
import ChooseSeat from "../../../commons/ChooseSeat";
import IcSuccess from "../../../assets/images/icon-cart-success.svg";

const SearchButton = styled.button`
	background-color: ${colors.yellow};
	width: 200px;
	border-radius: 2px;
	height: 40px;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 0;
	font-size: 14px;
	font-family: Open Sans;
	font-style: normal;
	font-weight: 600;
`;
const VContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: calc(100vh - 70px - 190px - 32px);
	margin-top: 70px;
`;
const ContentTitle = styled.p`
	font-family: Open Sans;
	font-weight: normal;
	font-size: 16px;
	margin: 0px;
`;
const SectionTitle = styled.div`
	height: 40px;
	width: 100%;
	background-color: ${colors.light_grey};
	display: flex;
	align-items: center;
	flex-direction: row;
	padding: 8px 20px;
	color: ${colors.dark_grey};
`;
const SectionContent = styled.div`
	width: 95%;
	display: flex;
	align-items: center;
	flex-direction: row;
	padding: 8px 0px;
	flex-wrap: wrap;
`;
const Content = styled.p`
	font-family: Open Sans;
	font-style: normal;
	font-weight: normal;
	font-size: 14px;
	color: ${colors.black_dark};
`;
const BoldTitle = styled.p`
	font-family: Open Sans;
	font-weight: bold;
	font-size: 24px;
	color: ${colors.grey};
`;
const BoldSpan = styled.span`
	font-weight: bold;
`;
const ContentText = styled.p`
	font-family: Open Sans;
	font-weight: normal;
	font-size: 14px;
	color: ${colors.grey};
`;
const BlueUnderlineSpan = styled.span`
	color: ${colors.blue};
	text-decoration: underline;
`;
const Success = ({}) => {
	const history = useHistory();
	return (
		<>
			<Header />
			{/* <MainContainer> */}
			<VContainer>
				<img src={IcSuccess}></img>
				<BoldTitle>Đặt hàng thành công</BoldTitle>
				<ContentText>
					Đơn hàng đã được đặt thành công,{" "}
					<BoldSpan>MiniBus</BoldSpan> sẽ liên hệ xác nhận và hỗ trợ
					hoàn tất quá trình đặt hàng.
				</ContentText>
				<ContentText>
					Chi tiết đơn hàng đã được gửi vào e-mail:{" "}
					<BlueUnderlineSpan>
						tranthituyetchung@gmail.com
					</BlueUnderlineSpan>
				</ContentText>
				<ContentText></ContentText>
				<ContentText>
					Mã đơn hàng:{" "}
					<BlueUnderlineSpan>MNB13246545</BlueUnderlineSpan>
				</ContentText>
				<SearchButton>Tra cứu đơn hàng</SearchButton>
			</VContainer>
			{/* </MainContainer> */}
			<FatFooter />
		</>
	);
};

export default Success;
