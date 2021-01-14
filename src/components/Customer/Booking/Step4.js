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
const RedTitle = styled.p`
	font-family: Open Sans;
	font-style: normal;
	font-weight: bold;
	font-size: 18px;
	color: ${colors.red};
	text-align: center;
	margin: 32px 0px 50px 0px;
`;
const MiniName = styled.p`
	color: ${colors.grey};
	font-size: 14px;
	font-weight: bold;
	margin-bottom: 4px;
	padding-bottom: 0px;
	font-family: Open Sans;
`;
const RedSpanPrice = styled.span`
	color: ${colors.red};
	padding-left: 80px;
	font-family: Open Sans;
	font-weight: bold;
	font-size: 24px;
`;
const RadioLable = styled.label`
	margin: 0px;
	padding: 0px 15px 0px 5px;
	color: ${colors.black};
	font-family: Open Sans;
	font-weight: bold;
	font-size: 14px;
`;
const VContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
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

const Step4 = ({}) => {
	const s = (p, bold) => ({
		width: `${p}%`,
		fontWeight: bold ? "bold" : "normal",
	});
	const history = useHistory();
	return (
		<>
			<Header />
			<MainContainer>
				<BarContainer>
					<MiniProgressBar active={4} />
				</BarContainer>
				<VContainer
					style={{
						border: `1px solid ${colors.light_grey}`,
						boxSizing: "border-box",
						borderRadius: 8,
						paddingInline: "2.5%",
					}}
				>
					<RedTitle>THÔNG TIN XÁC NHẬN ĐƠN HÀNG</RedTitle>
					<SectionTitle>
						<ContentTitle>Thông tin khách hàng</ContentTitle>
					</SectionTitle>
					<SectionContent>
						<Content style={s(20)}>Họ và tên:</Content>
						<Content style={s(30)}>Trần Thị Tuyết Chung</Content>
						<Content style={s(20)}>Email:</Content>
						<Content style={s(30)}>
							tranthituyetchung@gmail.com
						</Content>
						<Content style={s(20)}>Số điện thoại:</Content>
						<Content style={s(30)}>0345678915</Content>
					</SectionContent>
					<SectionTitle>
						<ContentTitle>Thông tin chuyến đi</ContentTitle>
					</SectionTitle>
					<SectionContent>
						<Content style={s(20)}>Điểm đi:</Content>
						<Content style={s(30)}>Sài Gòn</Content>
						<Content style={s(20)}>Điểm đến:</Content>
						<Content style={s(30)}>Đà Lạt</Content>
						<Content style={s(20)}>Thời gian:</Content>
						<Content style={s(30, true)}>18:00</Content>
						<Content style={s(20)}>Ngày đi:</Content>
						<Content style={s(30, true)}>16/12/2020</Content>
						<Content style={s(20)}>Số ghế:</Content>
						<Content style={s(30, true)}>A12, A13</Content>
						<Content style={s(20)}>Tổng tiền:</Content>
						<Content style={s(30, true)}>480.000đ</Content>
					</SectionContent>
					<SectionTitle>
						<ContentTitle>Thông tin chuyến về</ContentTitle>
					</SectionTitle>
					<SectionContent>
						<Content style={s(20)}>Điểm đi:</Content>
						<Content style={s(30)}>Đà Lạt</Content>
						<Content style={s(20)}>Điểm đến:</Content>
						<Content style={s(30)}>Sài Gòn</Content>
						<Content style={s(20)}>Thời gian:</Content>
						<Content style={s(30, true)}>16:00</Content>
						<Content style={s(20)}>Ngày đi:</Content>
						<Content style={s(30, true)}>19/12/2020</Content>
						<Content style={s(20)}>Số ghế:</Content>
						<Content style={s(30, true)}>A12, A13</Content>
						<Content style={s(20)}>Tổng tiền:</Content>
						<Content style={s(30, true)}>480.000đ</Content>
					</SectionContent>
					<SectionTitle style={{ justifyContent: "flex-end" }}>
						<ContentTitle>Tổng tiền:</ContentTitle>
						<RedSpanPrice>100.000đ</RedSpanPrice>
					</SectionTitle>
					<SectionContent>
						<Content>Phương thức thanh toán:</Content>
						<Content style={s(80, true)}>
							Thanh toán tại quầy bán vé
						</Content>
						<Content>
							Quý khách vui lòng thanh toán trong vòng 24h để hoàn
							tất đặt vé.
							<br /> Nếu cần bất kỳ sự hỗ trợ nào từ MiniBus, hãy
							liên hệ ngay đến tổng đài 1900 1000
						</Content>
					</SectionContent>
				</VContainer>
				<HContainer>
					<LeftButton onClick={() => history.push("/booking/step3")}>
						<ButtonText>
							<FontAwesomeIcon icon={faArrowLeft} />
							<span style={{ marginInline: 5 }}>Quay lại</span>
						</ButtonText>
					</LeftButton>
					<RightButton
						onClick={() => history.push("/booking/success")}
					>
						<ButtonText>
							<span style={{ marginInline: 5 }}>Hoàn tất</span>
							{/* <FontAwesomeIcon icon={faArrowRight} /> */}
						</ButtonText>
					</RightButton>
				</HContainer>
			</MainContainer>
			<FatFooter />
		</>
	);
};

export default Step4;
