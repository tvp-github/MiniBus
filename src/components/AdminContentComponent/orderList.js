import React, { useState } from "react";
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown } from 'react-bootstrap';

const OrderList = ({}) => {
	return (
		<div>
            <div class="row liner">
                                <label class="col-sm-4 header-table">Quản lý Đơn Hàng</label>
                                <div></div>
                                <label class="col-sm-6 header-table"></label>
                                <label class="col-sm-2 add-button">+ Thêm mới</label>
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
                                        <th scope="col">Số Điện Thoại</th>
                                        <th scope="col">Khách Hàng</th>
                                        <th scope="col">Tổng Tiền</th>
                                        <th scope="col">Trạng thái đơn hàng</th>
                                        <th scope="col">Thao tác</th>
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
                                        <td>
                                            <div class="row">
                                                    <i className="fa fa-edit mr-2 col-2" aria-hidden="true"></i>
                                                    <i className="fa fa-trash mr-2 col-2" aria-hidden="true"></i>
                                                    <i className="fa fa-align-justify mr-2 col-2" aria-hidden="true"></i>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th class="ma-don-hang">867534858</th>
                                        <td>04/01/2020</td>
                                        <td> Trần Thị Tuyết Chung</td>
                                        <td>0385909888</td>
                                        <td>960.000</td>
                                        <td class="trang-thai-don-hang-suc">Thành Công</td>
                                        <td>
                                            <div class="row">
                                                    <i className="fa fa-edit mr-2 col-2" aria-hidden="true"></i>
                                                    <i className="fa fa-trash mr-2 col-2" aria-hidden="true"></i>
                                                    <i className="fa fa-align-justify mr-2 col-2" aria-hidden="true"></i>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th class="ma-don-hang">867534858</th>
                                        <td>04/01/2020</td>
                                        <td> Trần Thị Tuyết Chung</td>
                                        <td>0385909888</td>
                                        <td>960.000</td>
                                        <td class="trang-thai-don-hang-fail">Thất bại</td>
                                        <td>
                                            <div class="row">
                                                    <i className="fa fa-edit mr-2 col-2" aria-hidden="true"></i>
                                                    <i className="fa fa-trash mr-2 col-2" aria-hidden="true"></i>
                                                    <i className="fa fa-align-justify mr-2 col-2" aria-hidden="true"></i>
                                            </div>
                                        </td>
                                    </tr>
                                
                                </tbody>
                            </table>
        </div>
	);
};

export default OrderList;
