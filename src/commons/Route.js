import React, { useState } from "react";
import styled from "styled-components";
import colors from "../values/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faLongArrowAltRight,
	faStopwatch,
	faMapMarkerAlt,
	faTag,
} from "@fortawesome/free-solid-svg-icons";
import RouteImage from "../assets/images/RouteImage.png";
const RouteContainer = styled.div`
	display: flex;
	flex-direction: row;
	width: 48%;
	border: 1px solid ${colors.grey};
	box-sizing: border-box;
	border-radius: 8px;
	background-color: ${colors.white};
	margin-bottom: 40px;
`;
const RouteImg = styled.img`
	width: 30%;
	height: 150px;
	border-radius: 8px 0px 0px 8px;
`;
const VMiniContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	width: 70%;
	padding-right: 10px;
`;
const RedFromTo = styled.p`
	color: ${colors.red};
	font-family: Open Sans;
	font-weight: bold;
	font-size: 24px;
	text-transform: uppercase;
	margin: 0px;
`;
const MidGreySpan = styled.span`
	color: ${colors.mid_grey};
	font-family: Open Sans;
	font-size: 18px;
	margin-left: 35px;
`;
const BlackSpan = styled.span`
	color: ${colors.black};
	font-family: Open Sans;
	font-size: 18px;
	margin-left: 35px;
`;
const Route = () => {
	return (
		<RouteContainer>
			<RouteImg src={RouteImage} />
			<VMiniContainer>
				<RedFromTo>
					Sài Gòn <FontAwesomeIcon icon={faLongArrowAltRight} /> Đà
					Lạt
				</RedFromTo>
				<p style={{ margin: 0 }}>
					<MidGreySpan>
						<FontAwesomeIcon icon={faStopwatch} /> 8h
					</MidGreySpan>
					<MidGreySpan>
						<FontAwesomeIcon icon={faMapMarkerAlt} /> 256km
					</MidGreySpan>
					<BlackSpan>
						<FontAwesomeIcon icon={faTag} /> 250.000
					</BlackSpan>
				</p>
			</VMiniContainer>
		</RouteContainer>
	);
};

export default Route;
