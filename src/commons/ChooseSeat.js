import React, { useState, useEffect } from "react";
import styled from "styled-components";
import colors from "../values/colors";
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBus,
	faSync,
	faLongArrowAltRight,
} from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";
const ChooseRouteContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 48%;
	align-items: center;
	padding: 1% 1%;
	border: 1px solid #eaeaea;
	box-sizing: border-box;
	border-radius: 8px;
`;
const VMiniContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
`;
const TitleText = styled.p`
	color: ${colors.black};
	font-family: Open Sans;
	font-weight: bold;
	font-size: 18px;
`;
const RedSpan = styled.span`
	color: ${colors.red};
`;
const RedFromTo = styled.p`
	color: ${colors.red};
	font-family: Open Sans;
	font-weight: bold;
	font-size: 18px;
	text-transform: uppercase;
	margin: 0px;
`;
const MiniName = styled.p`
	color: ${colors.grey};
	font-size: 14px;
	font-weight: bold;
	margin-bottom: 4px;
	padding-bottom: 0px;
	font-family: Open Sans;
`;
const TextInput = styled.select`
	border: 1px solid #e7e7e7;
	box-sizing: border-box;
	border-radius: 4px;
	height: 40px;
`;
const Seat = styled.button`
	width: 9vw;
    height: 9vw;
    border: 0;
	border-radius: 8px;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 10px;
`;
const SeatText = styled.p`
	font-family: Open Sans;
	font-weight: bold;
	font-size: 18px;
    color: ${colors.dark_grey};
    margin: 0px;
`;
const SeatContainer = styled.div`
	justify-content: space-around;
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
	align-items: space-around;
`;
const AllSeat = styled.div`
	background-color: ${colors.light_grey};
    padding-top: 24px;
    margin-bottom: 24px;
	border: 1px solid #eaeaea;
	box-sizing: border-box;
	border-radius: 8px;
	display: flex;
	flex-direction: column;
`;
const ColorsHint = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
`;
const Square = styled.div`
	width: 25px;
	height: 25px;
	border-radius: 4px;
`;
const ColorContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	margin: 24px 0px;
`;
const ColorTitle = styled.span`
	font-family: Open Sans;
	font-weight: normal;
	font-size: 18px;
	color: ${colors.black};
	margin-left: 8px;
`;
const HContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`;
const RedMiniText = styled.p`
	color: ${colors.red};
	font-size: 18px;
	font-weight: bold;
	margin-bottom: 4px;
	padding-bottom: 0px;
	font-family: Open Sans;
`;
const ChooseSeat = (props) => {
	const tickets = props.tickets;
	const {start, end, date, price} = props;
	const {handleClick} = props;
	const {changePrice} = props;
	const [time, setTime] = useState(null);
	const [tours, setTours] = useState([]);
	const [tour, setTour] = useState(null); 
	const [tourTickets, setTourTickets] = useState([]);
	const history = useHistory();
	const _onSubmit = (e) => {
		e.preventDefault();
	};
	useEffect(async ()=>{
        try {
            const api = `http://localhost:8000/trips`;
			const res = await axios.get(api);
			console.log(res.data.trips);
			setTours(res.data.trips);
			handleSearchTour();
          } catch (err) {
            console.log(err.response);
          }
	},[]);
	useEffect(()=>{
		handleSearchTour();
	},[time])
	useEffect(async () => {
		if(!tour){
			return;
		}
		try {
            const api = `http://localhost:8000/tickets/trip/${tour._id}`;
			const res = await axios.get(api);
			setTourTickets(res.data.tickets);
        } catch (err) {
            console.log(err.response);
        }
	}, [tour])

	const handleSearchTour = async () => {
		setTour(searchtour());
		console.log("Change priec");
		console.log(tour);
		if(tour){
			changePrice(tour.price);
		}
	}

	useEffect(()=>{
		if(tour){
			changePrice(tour.price);
		}
	},[tour])

	const searchtour = () => {
		if(!time){
			return;
		}
		let sDate = date.split("-");
		console.log(sDate);
		let sTime = time ? time.split(":") : null;
		console.log(sTime);
		let timeStart = new Date(Date.UTC(sDate[0],sDate[1],sDate[2],sTime[0], sTime[1]));
		let miStart = timeStart.getTime();
		for(let i=0; i<tours.length; i++){
			console.log("Cal", miStart);
			let tourTime = new Date(tours[i].time_start);
			let miTour = tourTime.getTime();
			console.log("Time server: " + miTour);
			if(tours[i].start === start && tours[i].end === end && miStart === miTour){
				return tours[i];
			} 
		}
		return null;
	}
	
	const handlePickTime = (e) => {
		setTime(e.target.value);
		// handleSearchTour();
	}

	return (
		<ChooseRouteContainer>
			<TitleText>
				Chuyến ngày <RedSpan>{date}</RedSpan>
			</TitleText>
			<RedFromTo>
				{start}<FontAwesomeIcon icon={faLongArrowAltRight} /> {end}
			</RedFromTo>
			<VMiniContainer>
				<MiniName>Chọn giờ khởi hành</MiniName>
				<select value={time} onChange={handlePickTime}>
					<option selected disabled hidden>
						Chọn giờ khởi hành
					</option>
					<option value="06:00">06:00</option>
					<option value="12:00">12:00</option>
					<option value="15:00">15:00</option>
					<option value="20:00">20:00</option>
				</select>
			</VMiniContainer>
			<VMiniContainer>
				<MiniName>Chọn ghế</MiniName>
				<AllSeat>
					{
						tour ? (
							<SeatContainer>
								{tourTickets.map((ticket, index) => (
									<Seat key={index} style={{ backgroundColor: !tickets.status ? (!tickets.some(tk=>tk.position == ticket.position)?colors.light_blue:colors.yellow):colors.grey}} onClick={()=> {handleClick(ticket)}}>
										<SeatText>{ticket.position}</SeatText>
									</Seat>
								))}
							</SeatContainer>
						):
						(
							<div>Không có chuyến xe phù hợp</div>
						)
					}
					<ColorsHint>
					 <ColorContainer>
							<Square
								style={{ backgroundColor: colors.mid_grey }}
							/>
							<ColorTitle>Đã đặt</ColorTitle>
						</ColorContainer>
						<ColorContainer>
							<Square
								style={{ backgroundColor: colors.light_blue }}
							/>
							<ColorTitle>Trống</ColorTitle>
						</ColorContainer>
						<ColorContainer>
							<Square
								style={{
									backgroundColor: colors.yellow,
									opacity: 0.5,
								}}
							/>
							<ColorTitle>Đang chọn</ColorTitle>
						</ColorContainer>
					</ColorsHint>
					<HContainer></HContainer>
				</AllSeat>
				<HContainer>
							<MiniName>Ghế đã chọn: {tickets ? tickets.length : 0}</MiniName>
					<MiniName>Tổng tiền</MiniName>
				</HContainer>
                <HContainer>
							<RedMiniText>{tickets ? tickets.map((ticket)=>{return ticket.position + " "}) : ""}</RedMiniText>
							<RedMiniText>{price * tickets.length}</RedMiniText>
				</HContainer>
			</VMiniContainer>
		</ChooseRouteContainer>
	);
};

export default ChooseSeat;
