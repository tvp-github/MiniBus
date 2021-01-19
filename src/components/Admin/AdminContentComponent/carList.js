import React, { useState, useEffect } from "react";
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Dropdown, Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

const CarList = ({}) => {
    const history = useHistory();
    const [cars, setCars] = useState([]);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    useEffect(async ()=>{
        try {
            const api = `http://localhost:8000/vehicles`;
            const res = await axios.get(api);
            console.log(res);
            setCars(res.data);
          } catch (err) {
            console.log(err.response);
          }
    },[])
    const CarDetail = ({}) => {
        return(
            <div>
                <div class="form-group row">
                    <label for="staticEmail" class="col-sm-2 col-form-label">Mã xe:</label>
                    <div class="col-sm-10">
                        <input class="col-sm-8 form-control" type="text" name="name" placeholder="Nhập mã" />
                    </div>
                </div>
                <div class="form-group row">
                    <label for="staticEmail" class="col-sm-2 col-form-label">Biển số xe:</label>
                    <div class="col-sm-10">
                        <input class="col-sm-8 form-control" type="text" name="name" placeholder="Nhập biển số xe" />
                    </div>
                </div>
                <div class="form-group row">
                    <label for="staticEmail" class="col-sm-2 col-form-label">Loại xe:</label>
                    <div class="col-sm-10">
                        <input class="col-sm-8 form-control" type="text" name="name" placeholder="Nhập loại xe" />
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
                    <Modal.Title>Thêm chuyến xe</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <CarDetail/>
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
                <label class="col-sm-4 header-table">Quản lý Xe</label>
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
                        <th class=""scope="col">Mã xe</th>
                        <th scope="col">Biển số xe</th>
                        <th scope="col">Loại xe</th>
                        <th scope="col">Thao tác</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <th class="ma-xe">123</th>
                        <td>51E-152.63</td>
                        <td>Giường nằm</td>
                        <td>
                            <div class="row">
                                    <i className="fa fa-edit mr-2 col-2" aria-hidden="true"></i>
                                    <i className="fa fa-trash mr-2 col-2" aria-hidden="true"></i>
                                    {/* <i className="fa fa-align-justify mr-2 col-2" aria-hidden="true" onClick={handleShow}></i> */}
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <th class="ma-xe">123</th>
                        <td>51E-152.63</td>
                        <td>Phòng nằm</td>
                        <td>
                            <div class="row">
                                    <i className="fa fa-edit mr-2 col-2" aria-hidden="true"></i>
                                    <i className="fa fa-trash mr-2 col-2" aria-hidden="true"></i>
                                    {/* <i className="fa fa-align-justify mr-2 col-2" aria-hidden="true" onClick={handleShow}></i> */}
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <th class="ma-xe">123</th>
                        <td>51E-152.63</td>
                        <td>Ghế ngồi</td>
                        <td>
                            <div class="row">
                                    <i className="fa fa-edit mr-2 col-2" aria-hidden="true"></i>
                                    <i className="fa fa-trash mr-2 col-2" aria-hidden="true"></i>
                                    {/* <i className="fa fa-align-justify mr-2 col-2" aria-hidden="true" onClick={handleShow}></i> */}
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
	);
};

export default CarList;
