import React, { useState } from "react";
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const CarList = ({}) => {
	return (
		<div>
            <div class="row liner">
                <label class="col-sm-4 header-table">Quản lý Xe</label>
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
