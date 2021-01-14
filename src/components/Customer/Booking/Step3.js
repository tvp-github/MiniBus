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
const HalfContainer = styled.div`
	width: 48%;
	border: 1px solid ${colors.light_grey};
	box-sizing: border-box;
	border-radius: 8px;
	padding-inline: 2%;
	height: inherit;
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
const TextInput = styled.input`
	border: 1px solid ${colors.light_grey};
	box-sizing: border-box;
	border-radius: 4px;
	width: 100%;
	font-family: Open Sans;
	font-weight: normal;
	font-size: 14px;
	padding-left: 12px;
	height: 40px;
	margin-bottom: 20px;
`;
const MiniName = styled.p`
	color: ${colors.grey};
	font-size: 14px;
	font-weight: bold;
	margin-bottom: 4px;
	padding-bottom: 0px;
	font-family: Open Sans;
`;
const RedSpan = styled.span`
	color: ${colors.red};
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
	align-items: center;
	flex-direction: row;
`;
const ContentLine = styled.p`
	font-family: Open Sans;
	font-weight: normal;
	font-size: 14px;
    margin: 0px;
    padding: 0px 0px 15px 20px;
`;
const Step3 = ({}) => {
	const history = useHistory();
	return (
		<>
			<Header />
			<MainContainer>
				<BarContainer>
					<MiniProgressBar active={3} />
				</BarContainer>
				<HContainer style={{ justifyContent: "space-between" }}>
					<HalfContainer>
						<RedTitle>THÔNG TIN KHÁCH HÀNG</RedTitle>
						<MiniName>
							Họ tên khách hàng <RedSpan>*</RedSpan>
						</MiniName>
						<TextInput type="text" placeholder="Họ và tên" />
						<MiniName>
							Số điện thoại <RedSpan>*</RedSpan>
						</MiniName>

						<TextInput type="text" placeholder="Số điện thoại" />
						<MiniName>
							Email <RedSpan>*</RedSpan>
						</MiniName>

						<TextInput type="text" placeholder="Email" />
					</HalfContainer>
					<HalfContainer>
						<RedTitle>PHƯƠNG THỨC THANH TOÁN</RedTitle>
						<VContainer>
							<input
								type="radio"
								id="direct"
								name="payment-type"
								checked
							/>
							<RadioLable for="direct">
								Thanh toán tại quầy vé của MiniBus
							</RadioLable>
						</VContainer>
						<ContentLine>
							Phòng vé 1 : 123 Nguyễn Văn Cừ, Quận 5, Thành phố Hồ
							Chí Minh
						<br/>
							Phòng vé 2 : 456 Nguyễn Tri Phương, Quận 1, Thành
							phố Hồ Chí Minh
						</ContentLine>
						<VContainer>
							<input
								type="radio"
								id="indirect"
								name="payment-type"
							/>
							<RadioLable for="indirect">Chuyển khoản</RadioLable>
						</VContainer>
						<ContentLine>
							Quý khách vui lòng chuyển khoản kèm ghi chú “mã vé +
							số điện thoại” qua số tài khoản sau:
						</ContentLine>
						<ContentLine style={{paddingLeft: 50}}>
							Ngân hàng: MiniBank chi nhánh Thủ Đức
							<br />
							Chủ tài khoản: Cong ty MiniBus
							<br />
                            Số tài khoản:
							012345678901293
						</ContentLine>
					</HalfContainer>
				</HContainer>
				<HContainer>
					<LeftButton onClick={() => history.push("/booking/step2")}>
						<ButtonText>
							<FontAwesomeIcon icon={faArrowLeft} />
							<span style={{ marginInline: 5 }}>Quay lại</span>
						</ButtonText>
					</LeftButton>
					<RightButton onClick={() => history.push("/booking/step4")}>
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

export default Step3;
