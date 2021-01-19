import React, { useState } from "react";
import Header from "../../../commons/Header";
import MainContainer from "../../../commons/MainContainer";
import FatFooter from "../../../commons/FatFooter";

import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBIcon } from 'mdbreact';

const Bill = ({}) => {
	return (
		<>
			<Header />
			<MainContainer>
				<div class={"login-container"}>
					<MDBContainer>
						<MDBRow>
							<MDBCol md="6">
							<form>
								<p className="h4 text-center mb-4 mt-4">Xem thông tin đơn hàng</p>
								<label htmlFor="defaultFormLoginEmailEx" className="grey-text">
								Mã đơn hàng 
								</label>
								<input type="email" id="defaultFormLoginEmailEx" className="form-control" />
								<br />
								<label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
								Số điện thoại
								</label>
								<input type="password" id="defaultFormLoginPasswordEx" className="form-control" />
								<div className="text-center mt-4">
								<MDBBtn color="indigo" type="submit">Xem</MDBBtn>
								</div>
							</form>
							</MDBCol>
						</MDBRow>
					</MDBContainer>
				</div>
			</MainContainer>
			<FatFooter />
		</>
	);
};

export default Bill;