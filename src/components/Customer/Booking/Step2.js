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
const Step2 = (props) => {
	const [tickets, setTickets] = useState([]);
	const [ticketsBack, setTicketsBack] = useState([]);
	console.log("Debug: " , props.location.isOneWay);
	const start = props.location.start;
	const end = props.location.end;
	const date = props.location.date;
	const oneWay = props.location.isOneWay;
	const history = useHistory();
	const handlePickTicket = (ele) => {
		console.log(ele);
		let ticket = {pos: "A" + ele};
		if(tickets.includes(ticket)){
			return;
		}
		setTickets(tickets.concat(ticket));
	}
	const handlePickTicketBack = (ele) => {
		let ticket = {pos: "A" + ele};
		if(ticketsBack.includes(ticket)){
			return;
		}
		setTicketsBack(ticketsBack.concat(ticket));
	}
	const handleNext = () => {
		history.push({
			pathname: '/booking/step3',
			tickets: tickets,
			ticketsBack: ticketsBack
		})
	}
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
					<ChooseSeat handleClick={(ele) => handlePickTicket(ele)} tickets ={tickets} start={start} end = {end} date={date}/>
					{!oneWay && <ChooseSeat handleClick={(ele) => handlePickTicketBack(ele)} tickets ={ticketsBack}/>}
				</HContainer>
				<HContainer>
					<LeftButton onClick={()=>history.push("/")}>
						<ButtonText>
							<FontAwesomeIcon icon={faArrowLeft} />
							<span style={{ marginInline: 5 }}>Quay lại</span>
						</ButtonText>
					</LeftButton>
					<RightButton onClick={handleNext}>
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
