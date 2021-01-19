import React, { useState } from "react";
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

const EmployeeList = ({}) => {
	return (
		<div>
            <div class="row liner">
                <label class="col-sm-4 header-table">Quản lý Nhân Viên</label>
                <div></div>
                <label class="col-sm-4 header-table"></label>
            </div>
            <div class="row up-space">
                <input class="col-sm-4 form-control" type="text" name="name" placeholder="Tìm kiếm" />
                <label class="col-sm-2"></label>
            </div>
            <table class="table table-profile">
            <thead>
                    <tr>
                        <th class=""scope="col">Mã nhân viên</th>
                        <th scope="col">Tên đăng nhập</th>
                        <th scope="col">Số điện thoại</th>
                        <th scope="col">Vai trò</th>
                        <th scope="col">Thao tác</th>
                    </tr>
            </thead>

            <tbody>
                <tr>
                    <th class="ma-nhan-vien">011</th>
                    <td>tuyetchung</td>
                    <td>0901234567</td>
                    <td>Nhân viên quản lý</td>
                    <td>
                        <div class="row">
                            <Button>Phân quyền</Button>
                        </div>
                    </td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <th class="ma-nhan-vien">029</th>
                    <td>haile</td>
                    <td>0901234567</td>
                    <td>Nhân viên</td>
                    <td>
                        <div class="row">
                            <Button>Phân quyền</Button>
                        </div>
                    </td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <th class="ma-nhan-vien">083</th>
                    <td>philong</td>
                    <td>0901234567</td>
                    <td>Nhân viên</td>
                    <td>
                        <div class="row">
                            <Button>Phân quyền</Button>
                        </div>
                    </td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <th class="ma-nhan-vien">086</th>
                    <td>gialoi</td>
                    <td>0901234567</td>
                    <td>Nhân viên quản lý hệ thống</td>
                    <td>
                        <div class="row">
                            <Button>Phân quyền</Button>
                        </div>
                    </td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <th class="ma-nhan-vien">127</th>
                    <td>vinhphuc</td>
                    <td>0901234567</td>
                    <td>Nhân viên quản lý</td>
                    <td>
                        <div class="row">
                            <Button>Phân quyền</Button>
                        </div>
                    </td>
                </tr>
            </tbody>
            </table>               
        </div>
	);
};

export default EmployeeList;
