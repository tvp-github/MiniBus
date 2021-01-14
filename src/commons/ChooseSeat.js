import React, { useState } from "react";
import styled from "styled-components";
import colors from "../values/colors";
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
const ChooseSeat = ({}) => {
	const history = useHistory();
	const _onSubmit = (e) => {
		e.preventDefault();
		console.log("Go submit");
		history.push("/booking/step2");
	};
	return (
		<ChooseRouteContainer>
			<TitleText>
				Chuyến ngày <RedSpan>15/12/2020</RedSpan>
			</TitleText>
			<RedFromTo>
				Sài Gòn <FontAwesomeIcon icon={faLongArrowAltRight} /> Đà Lạt
			</RedFromTo>
			<VMiniContainer>
				<MiniName>Chọn giờ khởi hành</MiniName>
				<TextInput>
					<option selected disabled hidden>
						Chọn giờ khởi hành
					</option>
					<option value="dl">12:30</option>
					<option value="vt">13:30</option>
					<option value="tg">14:30</option>
					<option value="nt">15:30</option>
				</TextInput>
			</VMiniContainer>
			<VMiniContainer>
				<MiniName>Chọn ghế</MiniName>
				<AllSeat>
					<SeatContainer>
						{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((ele, index) => (
							<Seat key={index} style={{ backgroundColor: colors.mid_grey }}>
								<SeatText>A{ele}</SeatText>
							</Seat>
						))}
					</SeatContainer>
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
					<MiniName>Ghế đã chọn: 2</MiniName>
					<MiniName>Tổng tiền</MiniName>
				</HContainer>
                <HContainer>
					<RedMiniText>A8, A12</RedMiniText>
					<RedMiniText>480.000đ</RedMiniText>
				</HContainer>
			</VMiniContainer>
		</ChooseRouteContainer>
	);
};

export default ChooseSeat;
