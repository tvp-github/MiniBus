import React, { useState,useRef } from "react";
import Header from "../../../commons/Header";
import MainContainer from "../../../commons/MainContainer";
import FatFooter from "../../../commons/FatFooter";

import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBIcon } from 'mdbreact';

const Bill = ({}) => {
	const refCode = useRef();
	const refPhone = useRef();
	const [bill, setBill] = useState(null);
	// const handleViewBill = async () =>{
	// 	try {
    //         const api = `http://localhost:8000/bills/${refCode.current.value}`;
	// 		const res = await axios.get(api);
	// 		console.log(res.data);
	// 		setBill(res.data.trips);
	// 		handleSearchTour();
    //     } catch (err) {
    //         console.log(err.response);
    //     }
	// }
	return (
		<>
			<Header />
			<MainContainer>
				<div class={"login-container"}>
					<MDBContainer>
						<MDBRow>
							<MDBCol md="6" className="mr-auto ml-auto">
							<form>
								<p className="h4 text-center mb-4 mt-4">Xem thông tin đơn hàng</p>
								<label htmlFor="defaultFormLoginEmailEx" className="grey-text">
								Mã đơn hàng 
								</label>
								<input type="email" id="defaultFormLoginEmailEx" className="form-control" ref={refCode}/>
								<br />
								<label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
								Số điện thoại
								</label>
								<input id="" className="form-control"  ref={refPhone}/>
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