import React, { useRef, useState } from "react";
import styled from "styled-components";
import colors from "../values/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBus, faSync } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";
const ChooseRouteContainer = styled.div`
	background-color: ${colors.white};
	display: flex;
	box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.5);
	border-radius: 24px;
	margin: 240px 67px 0px 67px;
	padding: 24px 50px;
	flex-direction: column;
`;
const HorizontalContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
`;
const IconText = styled.p`
	color: ${colors.yellow};
	font-size: 24px;
	margin: 0px;
	padding: 0px;
`;
const TitleText = styled.span`
	font-size: 24px;
	font-family: Open Sans;
	font-weight: bold;
	margin-left: 10px;
`;
const RightButton = styled.input`
	margin-top: 16px;
	margin-left: auto;
	background-color: ${colors.yellow};
	width: 200px;
	border-radius: 8px;
	height: 40px;
	border: 0;
`;
const RadioLable = styled.label`
	margin: 0px;
	padding: 0px 15px 0px 5px;
	color: ${colors.black};
	font-family: Open Sans;
	font-size: 14px;
`;
const TextInput = styled.select`
	border: 1px solid #e7e7e7;
	box-sizing: border-box;
	border-radius: 4px;
	height: 40px;
`;
const DateInput = styled.input`
	height: 40px;
	border: 1px solid #e7e7e7;
	box-sizing: border-box;
	border-radius: 4px;
`;
const RoundButtonContainer = styled.div`
	display: flex;
	height: 40px;
	width: 40px;
	justify-content: center;
	align-items: center;
	border: 1px solid #eaeaea;
	box-sizing: border-box;
	box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
	border-radius: 20px;
	align-self: flex-end;
`;
const VMiniContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
`;
const MiniName = styled.p`
	color: ${colors.grey};
	font-size: 14px;
	font-weight: bold;
	margin-bottom: 4px;
	padding-bottom: 0px;
	font-family: Open Sans;
`;
const ChooseRoute = ({}) => {
	const history = useHistory();
	const [isOW, setIsOW] = useState(true);
	const [fromDate, setFromDate] = useState("");
	const [toDate, setToDate] = useState("");
	const refStart = useRef();
	const refEnd = useRef();
	const _onSubmit = (e) => {
		e.preventDefault();
		console.log("Fix: " + isOW);
		history.push({
			pathname: "/booking/step2",
			isOneWay: isOW,
			start: refStart.current.value,
			end: refEnd.current.value,
			date: fromDate
		});
	};
	const handleClickOW = () => {
		setIsOW(true);
	};
	const handleClickTW = () => {
		console.log("Checked");
		setIsOW(false);
	};

	const handleFromDateChange = (e)=>{
		e.preventDefault();
		setFromDate(e.target.value);
	}

	const handleToDateChange = (e)=>{
		e.preventDefault();
		setToDate(e.target.value);
	}
	return (
		<ChooseRouteContainer>
			<HorizontalContainer>
				<IconText>
					<FontAwesomeIcon icon={faBus} />
				</IconText>
				<TitleText>Mua vé trực tuyến</TitleText>
			</HorizontalContainer>
			<HorizontalContainer style={{ marginTop: 15, marginBottom: 15 }}>
				<input
					type="radio"
					id="one-way"
					name="bus-type"
					onClick={handleClickOW}
					checked={isOW}
				/>
				<RadioLable for="one-way">Một chiều</RadioLable>
				<input
					type="radio"
					id="round-trip"
					name="bus-type"
					onClick={handleClickTW}
					checked={!isOW}
				/>
				<RadioLable for="round-trip" on>
					Khứ hồi
				</RadioLable>
			</HorizontalContainer>
			<HorizontalContainer style={{ justifyContent: "space-between" }}>
				<VMiniContainer style={{ width: "26%" }}>
					<MiniName>Chọn điểm đi</MiniName>
					<select ref={refStart}>
						<option selected disabled hidden>
							Chọn điểm đi
						</option>
						<option value="Đà Lạt">Đà Lạt</option>
						<option value="Sài Gòn">Sài Gòn</option>
						<option value="Tiền Giang">Tiền Giang</option>
						<option value="Vũng Tàu">Vũng Tàu</option>
					</select>
				</VMiniContainer>
				<RoundButtonContainer>
					<div>
						<FontAwesomeIcon color={colors.red} icon={faSync} />
					</div>
				</RoundButtonContainer>
				<VMiniContainer style={{ width: "26%" }}>
					<MiniName>Chọn điểm đến</MiniName>
					<select ref={refEnd}>
						<option selected disabled hidden>
							Chọn điểm đến
						</option>
						<option value="Đà Lạt">Đà Lạt</option>
						<option value="Sài Gòn">Sài Gòn</option>
						<option value="Tiền Giang">Tiền Giang</option>
						<option value="Vũng Tàu">vũng Tàu</option>
					</select>
				</VMiniContainer>
				<VMiniContainer style={{ width: "17%" }}>
					<MiniName>Chọn ngày đi</MiniName>
					<DateInput type="date" value={fromDate} onChange={handleFromDateChange} placeholder="Từ ngày" />
				</VMiniContainer>

				{!isOW&&<VMiniContainer style={{ width: "17%" }}>
					<MiniName>Chọn ngày về</MiniName>
					<DateInput type="date" value={toDate} onChange={handleToDateChange} placeholder="Đến ngày" />
				</VMiniContainer>}
			</HorizontalContainer>
			<HorizontalContainer>
				<RightButton onClick={_onSubmit} type="submit" value="Đặt vé" />
			</HorizontalContainer>
		</ChooseRouteContainer>
	);
};

export default ChooseRoute;
