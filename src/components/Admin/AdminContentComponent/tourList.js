import React, { useState, useEffect } from "react";
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal'
import { Button } from 'react-bootstrap';
import axios from 'axios';


const TourList = ({}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [tours, setTours] = useState([]);
    useEffect(async ()=>{
        try {
            const api = `http://localhost:8000/trips`;
            const res = await axios.get(api);
            console.log(res);
            setTours(res.data);
          } catch (err) {
            console.log(err.response);
          }
    },[])

    const TourDetail = ({}) => {
        return(
            <div>
                <div class={"section mt-2"}>
                    <p>Thông tin chuyến đi</p>
                </div>
                <div class="row mb-2">
                    <a class={"col-sm-2 label"}>Điểm đi:</a>
                    <a class={"col-sm-4 content"}>Sài Gòn</a>
                    <a class={"col-sm-2 label"}>Điểm đến:</a>
                    <a class={"col-sm-3 content"}>Đà Lạt</a>
                </div>
                <div class="row mb-2">
                    <a class={"col-sm-2 label"}>Thời gian:</a>
                    <a class={"col-sm-4 content-bold"}>22:00</a>
                    <a class={"col-sm-2 label"}>Ngày đi:</a>
                    <a class={"col-sm-3 content-bold"}>25/12/2020</a>
                </div>
                <div class="row mb-2">
                    <a class={"col-sm-2 label"}>Giá chuyến:</a>
                    <a class={"col-sm-3 content-bold"}>120.000đ</a>
                </div>
                
                <div class={"section mt-2"}>
                    <p>Thông tin tài xế </p>
                </div>
                <div class="row mb-2">
                    <a class={"col-sm-2 label"}>Họ và tên:</a>
                    <a class={"col-sm-4 content"}>Nguyễn Văn A</a>
                </div>

                <div class={"section mt-2"}>
                    <p>Thông tin xe</p>
                </div>
                <div class="row mb-2">
                    <a class={"col-sm-2 label"}>Mã xe:</a>
                    <a class={"col-sm-4 content"}>123456</a>
                    <a class={"col-sm-2 label"}>Loại xe:</a>
                    <a class={"col-sm-3 content"}>Giường nằm</a>
                </div>

            </div>
        )
    }

	return (
		<div>
            <Modal 
                size="lg"
                show={show} 
                onHide={handleClose} 
                animation={true}  
                //dialogClassName="modal-90w"  
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Thông tin chi tiết chuyến xe</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                   <TourDetail/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
            <div class="row liner">
                <label class="col-sm-4 header-table">Quản lý Chuyến xe</label>
                <div></div>
                <label class="col-sm-4 header-table"></label>
                <label class="col-sm-4 add-button">+ Thêm mới</label>
            </div>
            <div class="row up-space">
                <input class="col-sm-4 form-control" type="text" name="name" placeholder="Tìm kiếm" />
                <label class="col-sm-2"></label>
            </div>
            <table class="table table-profile">
                <thead>
                    <tr>
                        <th class=""scope="col">Mã chuyến xe</th>
                        <th scope="col">Điểm đi</th>
                        <th scope="col">Điểm đến</th>
                        <th scope="col">Thời gian xuất phát</th>
                        <th scope="col">Giá chuyến</th>
                        <th scope="col">Thao tác</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th class="ma-chuyen-xe">123</th>
                        <td>TP.Hồ Chí Minh</td>
                        <td>Đà Lạt</td>
                        <td>22h 25/12/2020</td>
                        <td>120.000</td>
                        <td>
                            <div class="row">
                                    <i className="fa fa-edit mr-2 col-2" aria-hidden="true"></i>
                                    <i className="fa fa-trash mr-2 col-2" aria-hidden="true"></i>
                                    <i className="fa fa-align-justify mr-2 col-2" aria-hidden="true" onClick={handleShow}></i>
                            </div>
                        </td>
                    </tr>
                </tbody>

                <tbody>
                    <tr>
                        <th class="ma-chuyen-xe">123</th>
                        <td>TP.Hồ Chí Minh</td>
                        <td>Đà Lạt</td>
                        <td>22h 25/12/2020</td>
                        <td>120.000</td>
                        <td>
                            <div class="row">
                                    <i className="fa fa-edit mr-2 col-2" aria-hidden="true"></i>
                                    <i className="fa fa-trash mr-2 col-2" aria-hidden="true"></i>
                                    <i className="fa fa-align-justify mr-2 col-2" aria-hidden="true" onClick={handleShow}></i>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>       
        </div>
	);
};

export default TourList;
