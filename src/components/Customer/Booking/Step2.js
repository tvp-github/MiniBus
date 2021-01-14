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
const BarContainer = styled.div`
	padding: 40px 5%;
`;
const HContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin-top: 24px;
`;

const RightButton = styled.button`
	background-color: ${colors.yellow};
	width: 200px;
	border-radius: 8px;
	height: 40px;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 0;
`;
const LeftButton = styled.button`
	width: 200px;
	border-radius: 8px;
	height: 40px;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 1px solid #000000;
	background-color: transparent;
`;
const ButtonText = styled.p`
	font-family: Open Sans;
	font-weight: bold;
	font-size: 14px;
	color: ${colors.dark_grey};
	margin: 0px;
`;
const Step2 = ({ oneWay }) => {
	const history = useHistory();
	return (
		<>
			<Header />
			<MainContainer>
				<BarContainer>
					<MiniProgressBar active={2} />
				</BarContainer>
				<HContainer
					style={
						oneWay
							? { justifyContent: "space-around" }
							: { justifyContent: "space-between" }
					}
				>
					<ChooseSeat />
					{!oneWay && <ChooseSeat />}
				</HContainer>
				<HContainer>
					<LeftButton onClick={()=>history.push("/")}>
						<ButtonText>
							<FontAwesomeIcon icon={faArrowLeft} />
							<span style={{ marginInline: 5 }}>Quay lại</span>
						</ButtonText>
					</LeftButton>
					<RightButton onClick={()=>history.push("/booking/step3")}>
						<ButtonText>
							<span style={{ marginInline: 5 }}>Tiếp tục</span>
							<FontAwesomeIcon icon={faArrowRight} />
						</ButtonText>
					</RightButton>
				</HContainer>
			</MainContainer>
			<FatFooter />
		</>
	);
};

export default Step2;
