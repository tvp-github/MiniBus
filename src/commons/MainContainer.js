import React, { useState } from "react";
import styled from "styled-components";
import colors from "../values/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
const MainContainerContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding: 0 5%;
	margin-top: 70px;
`;
const MainContainer = (props) => {
	return <MainContainerContainer>{props.children}</MainContainerContainer>;
};

export default MainContainer;
