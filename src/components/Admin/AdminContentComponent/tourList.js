import React, { useState, useEffect } from "react";
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal'
import { Button, Dropdown } from 'react-bootstrap';
import axios from 'axios';


const TourList = ({}) => {
    let CarList = [ 'CAR001', 'CAR002', 'CAR003'];
    const [cars, setCars] = useState([]);
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
    const [tours, setTours] = useState([]);
    useEffect(async ()=>{
        try {
            const api = `http://localhost:8000/vehicles`;
            const res = await axios.get(api);
            setCars(res.data.vehicles);
          } catch (err) {
            console.log(err.response);
          }
    },[])
    useEffect(async ()=>{
        try {
            const api = `http://localhost:8000/trips`;
            const res = await axios.get(api);
            console.log(res);
            setTours(res.data.trips);
          } catch (err) {
            console.log(err.response);
          }
    },[])

    const handleAddTour = async () => {
        const model = {};
        model.vehicle = cars[0]._id;
        model.time_start = Date.now();
        model.start = "Sài Gòn";
        model.end = "Cần Thơ";
        model.driver = "driver";
        model.price = 100000;

        const api = `http://localhost:8000/trips`;
        const res = await axios.post(api, model, {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        });
        console.log(res);
        let newTrip = res.data.trip;
        console.log(tours);
        setTours(tours.concat(newTrip));
        handleCloseAdd();
    }

    const TourAdd = ({}) => {
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
            </div>
          
        </div>
        )
    }
    const TourUpdate = ({}) => {
        return(
            <div>
            <div class="form-group row">
                <label for="staticEmail" class="col-sm-2 col-form-label">Điểm đi:</label>
                <div class="col-sm-10">
                    <input class="col-sm-8 form-control" type="text" name="name" placeholder="Nhập điểm đi" value={'Đà Lạt'} />
                </div>
            </div>
            <div class="form-group row">
                <label for="staticEmail" class="col-sm-2 col-form-label">Điểm đến:</label>
                <div class="col-sm-10">
                    <input class="col-sm-8 form-control" type="text" name="name" placeholder="Nhập điểm đến" value={'Sài Gòn'}/>
                </div>
            </div>
            <div class="form-group row">
                <label for="staticEmail" class="col-sm-2 col-form-label">Ngày đi:</label>
                <div class="col-sm-10 row">
                    <input class="col-sm-3 ml-3 mr-2 form-control" type="time" name="name" value={'08:00'} />
                    <input class="col-sm-6 form-control" type="date" name="name" value={'24/06/2020'} />
                </div>
            </div>
            <div class="form-group row">
                <label for="staticEmail" class="col-sm-2 col-form-label">Giá vé:</label>
                <div class="col-sm-10">
                    <input class="col-sm-8 form-control" value={'240.000'} type="text" name="name" placeholder="Nhập giá vé" />
                </div>
            </div>
            <div class="form-group row">
                <label for="staticEmail" class="col-sm-2 col-form-label">Loại xe:</label>
                <div class="col-sm-10">
                    <Dropdown>
                        <Dropdown.Toggle id="dropdown-basic">
                            Giường nằm 34
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item >Action</Dropdown.Item>
                            <Dropdown.Item>Another action</Dropdown.Item>
                            <Dropdown.Item>Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
          
        </div>
        )
    }
    const TourDetail = ({}) => {
        return(
            <div>
            <div class="form-group row">
                <label for="staticEmail" class="col-sm-2 col-form-label">Điểm đi:</label>
                <div class="col-sm-10">
                    <a class="col-sm-8 form-control"> Đà lạt </a>
                </div>
            </div>
            <div class="form-group row">
                <label for="staticEmail" class="col-sm-2 col-form-label">Điểm đến:</label>
                <div class="col-sm-10">
                <a class="col-sm-8 form-control"> Sài Gòn</a>
                </div>
            </div>
            <div class="form-group row">
                <label for="staticEmail" class="col-sm-2 col-form-label">Ngày đi:</label>
                <div class="col-sm-10 row">
                    <a class="col-sm-3 ml-3 mr-2 form-control" type="time" name="name"> 08:00 </a>
                    <a class="col-sm-6 form-control" type="date" name="name" > 24/06/2020 </a>
                </div>
            </div>
            <div class="form-group row">
                <label for="staticEmail" class="col-sm-2 col-form-label">Giá vé:</label>
                <div class="col-sm-10">
                    <a class="col-sm-8 form-control" > 240.000 </a>
                </div>
            </div>
            <div class="form-group row">
                <label for="staticEmail" class="col-sm-2 col-form-label">Loại xe:</label>
                <div class="col-sm-10">
                    <a class="col-sm-8 form-control" >Giường nằm</a>
                </div>
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
                    <Modal.Title>Bạn có chắc muốn xóa chuyến xe này?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseDelete}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleCloseDelete}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
            <Modal 
                size="lg"
                show={showAdd} 
                onHide={handleCloseAdd} 
                animation={true}  
                //dialogClassName="modal-90w"  
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Thêm mới chuyến xe</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                   <TourAdd/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseAdd}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleAddTour}>
                        Add
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
                    <Modal.Title>Thông tin chi tiết chuyến xe</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                   <TourDetail/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseDetail}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            <Modal 
                size="lg"
                show={showUpdate} 
                onHide={handleCloseUpdate} 
                animation={true}  
                //dialogClassName="modal-90w"  
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Chỉnh sửa thông tin chuyến xe</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                   <TourUpdate/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseUpdate}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleCloseUpdate}>
                        Update
                    </Button>
                </Modal.Footer>
            </Modal>
            <div class="row liner">
                <label class="col-sm-4 header-table">Quản lý Chuyến xe</label>
                <div></div>
                <label class="col-sm-6 header-table"></label>
                <label class="col-sm-2 add-button" onClick={handleShowAdd}>+ Thêm mới</label>
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
                                <button class="icon-btn" onClick={handleShowUpdate} data-toggle="tooltip" data-placement="right" title="Sửa thông tin"><i className="fa fa-edit " aria-hidden="true" ></i></button>
                                <button class="icon-btn" onClick={handleShowDelete} data-toggle="tooltip" data-placement="right" title="Xóa chuyến đi"><i className="fa fa-trash " aria-hidden="true" ></i></button>
                                <button class="icon-btn"  onClick={handleShowDetail} data-toggle="tooltip" data-placement="right" title="Xem chi tiết" ><i className="fa fa-align-justify " aria-hidden="true" ></i></button>
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
                                <button class="icon-btn" onClick={handleShowUpdate} data-toggle="tooltip" data-placement="right" title="Sửa thông tin"><i className="fa fa-edit " aria-hidden="true" ></i></button>
                                <button class="icon-btn" onClick={handleShowDelete} data-toggle="tooltip" data-placement="right" title="Xóa chuyến đi"><i className="fa fa-trash " aria-hidden="true" ></i></button>
                                <button class="icon-btn"  onClick={handleShowDetail} data-toggle="tooltip" data-placement="right" title="Xem chi tiết" ><i className="fa fa-align-justify " aria-hidden="true" ></i></button>
                            </div>
                        </td>
                        
                    </tr>
                </tbody>
                {
                    tours.map((item)=>{
                        return(
                        <tbody>
                            <tr>
                                <th class="ma-chuyen-xe">{item._id}</th>
                                <td>{item.start}</td>
                                <td>{item.end}</td>
                                <td>{item.time_start.slice(0,10)}</td>
                                <td>{item.price}</td>
                                <td>{item.vehicle.type}</td>
                                <td>
                                    <div class="row">
                                        <button class="icon-btn" onClick={handleShowUpdate} data-toggle="tooltip" data-placement="right" title="Sửa thông tin"><i className="fa fa-edit " aria-hidden="true" ></i></button>
                                        <button class="icon-btn" onClick={handleShowDelete} data-toggle="tooltip" data-placement="right" title="Xóa chuyến đi"><i className="fa fa-trash " aria-hidden="true" ></i></button>
                                        <button class="icon-btn"  onClick={handleShowDetail} data-toggle="tooltip" data-placement="right" title="Xem chi tiết" ><i className="fa fa-align-justify " aria-hidden="true" ></i></button>
                                    </div>
                                </td>
                                
                            </tr>
                        </tbody>)
                    })
                }
            </table>       
        </div>
	);
};

export default TourList;
