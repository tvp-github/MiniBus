import React, { useState, useEffect } from "react";
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown, Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
const OrderList = ({}) => {
    const [orders, setOrders] = useState([]);
    const history = useHistory();
    const [showDetail, setShowDetail] = useState(false);
    const handleCloseDetail = () => setShowDetail(false);
    const handleShowDetail = () => setShowDetail(true);
    const [showUpdate, setShowUpdate] = useState(false);
    const handleCloseUpdate = () => setShowUpdate(false);
    const handleShowUpdate = () => setShowUpdate(true);
    const [showAdd, setShowAdd] = useState(false);
    const handleCloseAdd = () => setShowAdd(false);
    const handleShowAdd = () => setShowAdd(true);
    const [showDelete, setShowDelete] = useState(false);
    const handleCloseDelete = () => setShowDelete(false);
    const handleShowDelete = () => setShowDelete(true);
    useEffect(async ()=>{
        try {
            const api = `http://localhost:8000/bills`;
            const res = await axios.get(api);
            console.log(res);
            setOrders(res.data.bills);
          } catch (err) {
            console.log(err.response);
          }
    },[])
    const handleDeleteOrder = () =>{
        handleCloseDelete()
    }
    const OrderDetail = ({}) => {
        return(
            <div>
                <div class={"section mt-2"}>
                    <p>Thông tin khách hàng</p>
                </div>
                <div class="row mb-2">
                    <a class={"col-sm-2 label"}>Họ và tên:</a>
                    <a class={"col-sm-4 content"}>Trần Thị Tuyết Chung </a>
                    <a class={"col-sm-2 label"}>Email:</a>
                    <a class={"col-sm-3 content"}>tranthituyetchung@gmail.com</a>
                </div>
                <div class="row mb-2">
                    <a class={"col-sm-2 label"}>Số điện thoại:</a>
                    <a class={"col-sm-4 content"}>0935 909 808</a>
                </div>
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
                    <a class={"col-sm-4 content-bold"}>18:00 </a>
                    <a class={"col-sm-2 label"}>Ngày đi:</a>
                    <a class={"col-sm-3 content-bold"}>16/12/2020</a>
                </div>
                <div class="row mb-2">
                    <a class={"col-sm-2 label"}>Số ghế:</a>
                    <a class={"col-sm-4 content-bold"}>A12,A13 </a>
                    <a class={"col-sm-2 label"}>Tổng tiền lượt đi:</a>
                    <a class={"col-sm-3 content-bold"}>480.000đ</a>
                </div>
                <div class={"section mt-2"}>
                    <p>Thông tin chuyến về</p>
                </div>
                <div class="row mb-2">
                    <a class={"col-sm-2 label"}>Điểm đi:</a>
                    <a class={"col-sm-4 content"}>Đà Lạt</a>
                    <a class={"col-sm-2 label"}>Điểm đến:</a>
                    <a class={"col-sm-3 content"}>Sài Gòn</a>
                </div>
                <div class="row mb-2">
                    <a class={"col-sm-2 label"}>Thời gian:</a>
                    <a class={"col-sm-4 content-bold"}>18:00 </a>
                    <a class={"col-sm-2 label"}>Ngày đi:</a>
                    <a class={"col-sm-3 content-bold"}>18/12/2020</a>
                </div>
                <div class="row mb-2">
                    <a class={"col-sm-2 label"}>Số ghế:</a>
                    <a class={"col-sm-4 content-bold"}>A12,A13 </a>
                    <a class={"col-sm-2 label"}>Tổng tiền lượt đi:</a>
                    <a class={"col-sm-3 content-bold"}>480.000đ</a>
                </div>
                <div class={"section mt-2"}>
                    <div class="row mb-2">
                        <a class={"col-sm-8 label"}> </a>
                        <a class={"col-sm-2 label"}>Tổng tiền:</a>
                        <a class={"col-sm-2 content-bold"}>960.000đ </a>
                    </div>
                </div>
                <div class="row mb-2">
                        <a class={"col-sm-3 label"}>Phương thức thanh toán:</a>
                        <a class={"col-sm-4 content-bold"}>Thanh toán tại quầy vé</a>
                </div>
                <div class="row mb-2">
                        <a class={"col-sm-3 label"}>Trạng thái thanh toán:</a>
                        <a class={"col-sm-4 trang-thai-don-hang-suc"}>Đã thanh toán</a>
                </div>
            </div>
        )
    }

	return (
		<div>
            
            <Modal 
                size="lg"
                show={showDelete} 
                onHide={handleCloseDelete} 
                animation={true}  
                //dialogClassName="modal-90w"  
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Bạn có chắc muốn xóa đơn hàng này?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseDelete}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleDeleteOrder}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
            <Modal 
                size="lg"
                show={showDetail} 
                onHide={handleCloseDetail} 
                animation={true}  
                //dialogClassName="modal-90w"  
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Thông tin chi tiết đơn hàng</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <OrderDetail/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseDetail}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleCloseDetail}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
            <div class="row liner">
                                <label class="col-sm-4 header-table">Quản lý Đơn Hàng</label>
                                <div></div>
                                <label class="col-sm-6 header-table"></label>
                                
                            </div>
                            <div class="row up-space">
                                <input class="col-sm-4 form-control" type="text" name="name" placeholder="Tìm kiếm" />
                                <label class="col-sm-2"></label>
                                <div class="col-sm-6">
                                    <div class="row">
                                        <div class="col-sm-5">
                                            <Dropdown>
                                                <Dropdown.Toggle id="dropdown-basic">
                                                    Tất cả trạng thái
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item >Action</Dropdown.Item>
                                                    <Dropdown.Item>Another action</Dropdown.Item>
                                                    <Dropdown.Item>Something else</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                        <input class="col-sm-5 form-control" type="date" name="name" placeholder="Tìm kiếm" />
                                    </div>

                                </div>
                            </div>
                            <table class="table table-profile">
                                <thead>
                                    <tr>
                                        <th class=""scope="col">Mã Đơn Hàng</th>
                                        <th scope="col">Ngày Tạo</th>
                                        <th scope="col">Khách Hàng</th>
                                        <th scope="col">Số Điện Thoại</th>
                                        <th scope="col">Tổng Tiền</th>
                                        <th scope="col">Trạng thái đơn hàng</th>
                                        <th scope="col">Thao tác</th>
                                        <th scope="col">Xác nhận</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th class="ma-don-hang">867534858</th>
                                        <td>04/01/2020</td>
                                        <td> Trần Thị Tuyết Chung</td>
                                        <td>0385909888</td>
                                        <td>960.000</td>
                                        <td class="trang-thai-don-hang-wait">Đang chờ thanh toán</td>
                                        <td><button class="confirm-btn mt-0 mb-0">Xác nhận thanh toán</button></td>
                                        <td>
                                            <div class="row">
                                                    <button class="icon-btn" onClick={handleShowDelete} data-toggle="tooltip" data-placement="right" title="Xóa đơn hàng"><i className="fa fa-trash " aria-hidden="true" ></i></button>
                                                    <button class="icon-btn" data-toggle="tooltip" data-placement="right" title="Hủy đơn hàng"><i className="fa fa-times-circle " aria-hidden="true" ></i></button>
                                                    <button class="icon-btn" data-toggle="tooltip" data-placement="right" title="Xem chi tiết" onClick={handleShowDetail}><i className="fa fa-align-justify " aria-hidden="true" ></i></button>
                                            </div>
                                        </td>
                                        
                                    </tr>
                                    {
                                        orders.map((item)=>{
                                            return(
                                                <tr>
                                                    <th class="ma-don-hang">{item._id}</th>
                                                    <td>{item.time}</td>
                                                    <td>{item.user.name}</td>
                                                    <td>{item.user.phone}</td>
                                                    <td>960.000</td>
                                                    <td><button class="confirm-btn">Xác nhận thanh toán</button></td>
                                                    <td class="trang-thai-don-hang-wait">Đang chờ thanh toán</td>
                                                    <td>
                                                        <div class="row">
                                                                <i className="fa fa-edit mr-2 col-2" aria-hidden="true"></i>
                                                                <i className="fa fa-trash mr-2 col-2" aria-hidden="true"></i>
                                                                <i className="fa fa-align-justify mr-2 col-2" aria-hidden="true" onClick={handleShowDetail}></i>
                                                        </div>
                                                    </td>
                                                   
                                                </tr>
                                            )
                                        })
                                    }
                                
                                </tbody>
                            </table>
        </div>
	);
};

export default OrderList;
