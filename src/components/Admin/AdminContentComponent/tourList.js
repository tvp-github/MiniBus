import React, { useState, useEffect } from "react";
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal'
import { Button } from 'react-bootstrap';
import axios from 'axios';


const TourList = ({}) => {
    let CarList = [ 'CAR001', 'CAR002', 'CAR003'];
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
            <div class="form-group row">
                <label for="staticEmail" class="col-sm-2 col-form-label">Điểm đi:</label>
                <div class="col-sm-10">
                    <input class="col-sm-8 form-control" type="text" name="name" placeholder="Nhập điểm đi" />
                </div>
            </div>
            <div class="form-group row">
                <label for="staticEmail" class="col-sm-2 col-form-label">Điểm đến:</label>
                <div class="col-sm-10">
                    <input class="col-sm-8 form-control" type="text" name="name" placeholder="Nhập điểm đến" />
                </div>
            </div>
            <div class="form-group row">
                <label for="staticEmail" class="col-sm-2 col-form-label">Ngày đi:</label>
                <div class="col-sm-10 row">
                    <input class="col-sm-2 ml-3 mr-2 form-control" type="time" name="name"  />
                    <input class="col-sm-6 form-control" type="date" name="name"  />
                </div>
            </div>
            <div class="form-group row">
                <label for="staticEmail" class="col-sm-2 col-form-label">Giá vé:</label>
                <div class="col-sm-10">
                    <input class="col-sm-8 form-control" type="text" name="name" placeholder="Nhập giá vé" />
                </div>
            </div>
            <div class="form-group row">
                <label for="staticEmail" class="col-sm-2 col-form-label">Chọn xe:</label>
                <div class="col-sm-10">
                    <select class="select" placeholder="Xe">
                            {CarList}
                    </select>
                </div>
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
                <label class="col-sm-6 header-table"></label>
                <label class="col-sm-2 add-button" onClick={handleShow}>+ Thêm mới</label>
            </div>
            <div class="row up-space">
                <input class="col-sm-4 form-control" type="text" name="name" placeholder="Tìm kiếm" />
                <label class="col-sm-2"></label>
            </div>
            <table class="table table-profile">
                <thead>
                    <tr>
                        <th class=""scope="col">Mã chuyến</th>
                        <th scope="col">Điểm đi</th>
                        <th scope="col">Điểm đến</th>
                        <th scope="col">Thời gian xuất phát</th>
                        <th scope="col">Giá chuyến</th>
                        <th scope="col">Xe</th>
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
                        <td>Giường nằm 34</td>
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
                        <td>Giường nằm 34</td>
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
