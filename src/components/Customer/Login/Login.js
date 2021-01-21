import React, { useState } from "react";
import styled from "styled-components";
import colors from "../../../values/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import Header from "../../../commons/Header";
import MainContainer from "../../../commons/MainContainer";
import FatFooter from "../../../commons/FatFooter";

import axios from 'axios';
import { useHistory } from 'react-router-dom';

import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown, Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBIcon } from 'mdbreact';

const Login = ({}) => {
	const history = useHistory();
	const [username, setUsername] = useState("");
  	const [password, setPassword] = useState("");
	

	const handleSignIn = (e) => {
		e.preventDefault();
		(async () => {
		try {
			const res = await axios.post("http://localhost:8000/users/auth", {
				username,
				password
			});
			console.log(res);
			const obj = res.data;
			if (obj.user) {
				localStorage.setItem("token", obj.token);
				history.replace('/admin');
			}
		} catch (err) {
			alert("Đăng nhập thất bại!")
		}
		})();
	}

	const handleUsernameChange = (e) => {
		setUsername(e.target.value);
	}

	const handlePasswordChange = (e) => {
		setPassword(e.target.value);
	}
	return (
		<>
			<Header loggedIn={true} />
			<MainContainer>
				<div class={"login-container"}>
					<MDBContainer>
						<MDBRow>
							<MDBCol md="6" className="mr-auto ml-auto">
							<form>
								<p className="h4 text-center mb-4 mt-4">Đăng nhập</p>
								<label htmlFor="defaultFormLoginEmailEx" className="grey-text">
									Tên đăng nhập 
								</label>
								<input id="defaultFormLoginEmailEx" className="form-control" onChange={handleUsernameChange}/>
								<br />
								<label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
									Mật khẩu
								</label>
								<input type="password" id="defaultFormLoginPasswordEx" className="form-control" onChange={handlePasswordChange}/>
								<div className="text-center mt-4">
									<MDBBtn color="indigo" onClick={handleSignIn}>Login</MDBBtn>
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
