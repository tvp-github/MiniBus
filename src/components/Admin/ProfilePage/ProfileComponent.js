import React, { useState } from "react";
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown } from 'react-bootstrap';

const ProfileComponent = ({ }) => {
    let ngay = [];
    for (let i = 1; i <= 31; i += 1) {
        ngay.push(<option value={i} key={i}>{i}</option>)
    }
    let thang = [];
    for (let i = 1; i <= 12; i += 1) {
        thang.push(<option value={i} key={i}>{i}</option>)
    }
    let nam = [];
    for (let i = 1900; i <= 2019; i += 1) {
        nam.push(<option value={i} key={i}>{i}</option>)
    }
    return (

        <div>
            <div class="row liner">
                <label class="col-sm-4 header-table">Thông tin tài khoản</label>
                <div></div>
                <label class="col-sm-4 header-table"></label>

            </div>
            <div>
                <div class="form-group row">
                    <label for="staticEmail" class="col-sm-2 col-form-label">Họ và Tên:</label>
                    <div class="col-sm-10">
                        <input class="col-sm-8 form-control" type="text" name="name" placeholder="Nhập Họ Tên" />
                    </div>
                </div>
                <div class="form-group row">
                    <label for="staticEmail" class="col-sm-2 col-form-label">Số Điện Thoại:</label>
                    <div class="col-sm-10">
                        <input class="col-sm-8 form-control" type="text" name="name" placeholder="Nhập Số điện thoại" />
                    </div>
                </div>
                <div class="form-group row">
                    <label for="staticEmail" class="col-sm-2 col-form-label">Email:</label>
                    <div class="col-sm-10">
                        <input readOnly class="col-sm-8 form-control" type="email" name="name" value="tranthituyetchung@gmail.com" />
                    </div>
                </div>
                <div class="form-group row">
                    <label for="staticEmail" class="col-sm-2 col-form-label">Giới Tính:</label>
                    <div class="col-sm-2">
                        <input class="radiobutton" type="radio" />
                        <labe class="col-sm-1">Nam</labe>
                    </div>
                    <div >
                        <input class="radiobutton" type="radio" />
                        <labe class="col-sm-1">Nữ</labe>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="staticEmail" class="col-sm-2 col-form-label">Ngày Sinh:</label>
                    <div class="col-sm-10 row">
                        <div class="col-2" >
                        <select class="select" placeholder="Ngày">
                            {ngay}
                        </select>
                        </div>
                        <div class="col-2" >
                        <select class="select" placeholder="Ngày">
                            {thang}
                        </select>
                        </div>
                        <div class="col-2" >
                        <select class="select" placeholder="Ngày">
                            {nam}
                        </select>
                        </div>
                        
                        
                    </div>
                    
                </div>
                <div class="form-group row">
                    <label for="staticEmail" class="col-sm-2 col-form-label"></label>
                    <div class="col-sm-6 row">
                        <div class="col-1">
                        <input type="checkbox" class="checkbox"></input>
                        </div>
                        <div>
                        <label>Thay đổi mật khẩu</label>
                            </div>
                   
                    </div>
                    
                </div>
                <div class="form-group row">
                    <label for="staticEmail" class="col-sm-2 col-form-label"></label>
                    <div class="col-sm-10">
                    <button class="btn-tab-active d-flex justify-content-center align-items-center m-0 btn-update">Cập Nhật</button>
                    </div>
                </div>
               
               
               
            </div>
        </div>
    );
};

export default ProfileComponent;
