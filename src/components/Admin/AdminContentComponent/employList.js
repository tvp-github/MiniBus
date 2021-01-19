import React, { useState, useEffect } from "react";
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown } from 'react-bootstrap';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const EmployeeList = ({}) => {
	return (
		<div>
            <div class="row liner">
                                <label class="col-sm-4 header-table">Quản lý Nhân Viên</label>
                                <div></div>
                                <label class="col-sm-4 header-table"></label>
                                <label class="col-sm-4 add-button">+ Thêm mới</label>
                            </div>
                           
        </div>
	);
};

export default EmployeeList;
