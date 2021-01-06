import React, { useState } from "react";
import styled from "styled-components";
import colors from "../values/colors";
import FooterLogo from "../assets/images/FooterLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
const FooterContainer = styled.div`
	height: 190px;
	width: 100%;
	background-color: ${colors.royal_blue_dark};
	display: flex;
	align-items: center;
	justify-content: space-around;
`;
const InsideContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: space-between;
	width: 200px;
`;
const BigText = styled.p`
	font-size: 20px;
	font-family: Merriweather;
	color: ${colors.white};
`;
const HContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 15px;
	justify-content: space-between;
`;
const MiniText = styled.p`
	font-family: Open Sans;
	font-size: 12px;
	color: ${colors.white};
	margin: 5px 0px;
	text-align: left;
`;
const Shoe = styled.div`
	height: 32px;
	background-color: ${colors.brown_shoe};
`;
const FatFooter = ({}) => {
	return (
		<div>
			<FooterContainer>
				<InsideContainer>
					<a>
						<img src={FooterLogo} alt="Logo" />
					</a>
				</InsideContainer>
				<InsideContainer>
					<BigText>Bạn cần tư vấn, hỗ trợ?</BigText>
					<HContainer>
						<MiniText>We’re available by phone and email,</MiniText>
						<MiniText>
							Monday - Friday from 9 am - 5 pm PST.
						</MiniText>
					</HContainer>
				</InsideContainer>
				<InsideContainer>
					<BigText>
						<FontAwesomeIcon
							icon={faPhoneAlt}
							color={colors.white}
						/>
					</BigText>
					<HContainer>
						<MiniText>+229-955-5388-336</MiniText>
						<MiniText>+229-955-5373-360</MiniText>
					</HContainer>
				</InsideContainer>
				<InsideContainer>
					<BigText>
						<FontAwesomeIcon
							icon={faEnvelope}
							color={colors.white}
						/>
					</BigText>
					<HContainer>
						<MiniText>office@mail.com</MiniText>
						<MiniText>support@mail.com</MiniText>
					</HContainer>
				</InsideContainer>
			</FooterContainer>
			<Shoe />
		</div>
	);
};

export default FatFooter;
