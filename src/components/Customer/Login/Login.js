import React, { useState } from "react";
import styled from "styled-components";
import colors from "../../../values/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import Header from "../../../commons/Header";
import MainContainer from "../../../commons/MainContainer";
import FatFooter from "../../../commons/FatFooter";

import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown, Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBIcon } from 'mdbreact';

const Login = ({}) => {
	return (
		<>
			<Header />
			<MainContainer>
				<div class={"login-container"}>
					<MDBContainer>
						<MDBRow>
							<MDBCol md="6">
							<form>
								<p className="h4 text-center mb-4">Đăng nhâp</p>
								<label htmlFor="defaultFormLoginEmailEx" className="grey-text">
								Tên đăng nhập 
								</label>
								<input type="email" id="defaultFormLoginEmailEx" className="form-control" />
								<br />
								<label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
								Mật khẩu
								</label>
								<input type="password" id="defaultFormLoginPasswordEx" className="form-control" />
								<div className="text-center mt-4">
								<MDBBtn color="indigo" type="submit">Login</MDBBtn>
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

export default Login;
