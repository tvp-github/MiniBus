import React, { useState, useEffect, useRef } from "react";
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Dropdown, Button, Text } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

const CarList = ({}) => {
    const history = useHistory();
    const [cars, setCars] = useState([]);
    const [type, setType] = useState("");
    const [code, setCode] = useState("");
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

    const numberRef = useRef();
    const typeRef= useRef();

    useEffect(async ()=>{
        try {
            const api = `http://localhost:8000/vehicles`;
            const res = await axios.get(api);
            console.log(res);
            setCars(res.data.vehicles);
          } catch (err) {
            console.log(err.response);
          }
    },[])
    const handleChangeType = (e) => {
        e.preventDefault();
        setType(e.target.value);
    }
    const handleChangeCode = (e) => {
        e.preventDefault();
        setCode(e.target.value);
    }
    const handleAddCar = async (e) => {
        e.preventDefault();
        const api = `http://localhost:8000/vehicles`;
        const res = await axios.post(api, {type: typeRef.current.value, number: numberRef.current.value},{
            headers: {
              Authorization: localStorage.getItem('token')
            }
        });
        if(res.data){
            setCars(cars.concat(res.data.vehicle));
        }
        handleCloseAdd();
    }
    const handleUpdateCar = async (e) => {
        handleCloseUpdate();
    }
    const handleDeleteCar = async (id) => {
        console.log("DEBUG: delete", id);
        const api = `http://localhost:8000/vehicles/${id}`;
        const res = await axios.delete(api,{
            headers: {
              Authorization: localStorage.getItem('token')
            }
        });
        let newCars = cars;
        for(let i = 0 ; i < cars.length ; i++){
            if(cars[i]._id === id){
                newCars.splice(i, 1);
            }
        }
        setCars(newCars.slice());
        handleCloseDelete();
    }
    const CarAdd = () => {
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
                        <input class="col-sm-8 form-control" type="text" name="name" placeholder="Nhập biển số xe" ref={numberRef}/>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="staticEmail" class="col-sm-2 col-form-label" >Loại xe:</label>
                    <div class="col-sm-10">
                        <input class="col-sm-8 form-control" type="text" name="name" placeholder="Nhập loại xe" ref={typeRef}/>
                    </div>
                </div>
            </div>
        )
    }
    const CarUpdate = () => {
        return(
            <div>
                <div class="form-group row">
                    <label for="staticEmail" class="col-sm-2 col-form-label">Mã xe:</label>
                    <div class="col-sm-10">
                        <input class="col-sm-8 form-control" type="text" name="name" placeholder="Nhập mã" value={"code"} >
                        </input>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="staticEmail" class="col-sm-2 col-form-label">Biển số xe:</label>
                    <div class="col-sm-10">
                        <input class="col-sm-8 form-control" type="text" name="name" placeholder="Nhập biển số xe" onChange={handleChangeCode} value={"code"} autoFocus={true}>
                        </input>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="staticEmail" class="col-sm-2 col-form-label" >Loại xe:</label>
                    <div class="col-sm-10">
                        <input class="col-sm-8 form-control" type="text" name="name" placeholder="Nhập loại xe" onChange={handleChangeType} value={"type"} autoFocus={true}>
                        </input>
                    </div>
                </div>
            </div>
        )
    }
    const CarDetail = () => {
        return(
            <div>
                <div class="form-group row">
                    <label for="staticEmail" class="col-sm-2 col-form-label">Mã xe:</label>
                    <div class="col-sm-10">
                        <a class="col-sm-8 form-control" >
                            XE123    
                        </a>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="staticEmail" class="col-sm-2 col-form-label">Biển số xe:</label>
                    <div class="col-sm-10">
                        <a class="col-sm-8 form-control" >
                            123-456
                        </a>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="staticEmail" class="col-sm-2 col-form-label" >Loại xe:</label>
                    <div class="col-sm-10">
                        <a class="col-sm-8 form-control" >
                            Xe giường nằm 34
                        </a>
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
                    <Modal.Title>Bạn có chắc muốn xóa xe này?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseDelete}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleDeleteCar}>
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
                    <Modal.Title>Thêm xe</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <CarAdd/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseAdd}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleAddCar}>
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
                    <Modal.Title>Thông tin chi tiết xe</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <CarDetail/>
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
                    <Modal.Title>Chỉnh sửa thông tin xe</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <CarUpdate/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseUpdate}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleUpdateCar}>
                        Update
                    </Button>
                </Modal.Footer>
            </Modal>
            <div class="row liner">
                <label class="col-sm-4 header-table">Quản lý Xe</label>
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
                        <th class=""scope="col">Mã xe</th>
                        <th scope="col">Biển số xe</th>
                        <th scope="col">Loại xe</th>
                        <th scope="col">Thao tác</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        cars.map((item)=>{
                            return(
                                <tr>
                                    <th class="ma-xe">{item._id.slice(6)}</th>
                                    <td>{item.number ? item.number : "93T8-3851"}</td>
                                    <td>{item.type}</td>
                                    <td>
                                        <div class="row">
                                            {/* <button className="icon-btn"><i className="fa fa-edit mr-2 col-2" aria-hidden="true"></i></button>
                                            <button className="icon-btn" onClick={()=>{handleDeleteCar(item._id)}}><i className="fa fa-trash mr-2 col-2" aria-hidden="true"></i></button>
                                             */}
                                        <button class="icon-btn" onClick={()=>handleUpdateCar(item._id)} data-toggle="tooltip" data-placement="right" title="Sửa thông tin"><i className="fa fa-edit " aria-hidden="true" ></i></button>
                                        <button class="icon-btn" onClick={() => handleDeleteCar(item._id)} data-toggle="tooltip" data-placement="right" title="Xóa chuyến đi"><i className="fa fa-trash " aria-hidden="true" ></i></button>
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

export default CarList;
