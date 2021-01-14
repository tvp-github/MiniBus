
import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import Header from "../../../commons/Header";
import MainContainer from "../../../commons/MainContainer";
import FatFooter from "../../../commons/FatFooter";
import Style from "./AdminProfile.css"
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown } from 'react-bootstrap';
import OrderListComponent from '../AdminContentComponent/orderList'
import EmployeeListComponent from '../AdminContentComponent/employList'
import TourListComponent from '../AdminContentComponent/tourList'
import CarListComponent from '../AdminContentComponent/carList'

const Admin = ({ }) => {
    const [hovered, setHover] = useState(
        1
    );
    const [pageIndex, setPageIndex] = useState(
        1
    );
    function onHoverChange(index) {
        setHover(index)
    }
    function onIndexChange(index) {
        setHover(index)
        setPageIndex(index)
    }
    return (
        <>
            <Header />
            <MainContainer>

                <script src="https://use.fontawesome.com/releases/v5.15.1/js/all.js" data-auto-replace-svg="nest"></script>

                <div class="d-flex  div-app-profile" >
                    <div class="div-image" >
                        <div class="card">
                            <div>
                                <button autoFocus onClick={() => onIndexChange(1)} onMouseEnter={() => (pageIndex!=1)&&onHoverChange(1)} class={hovered != 1 ? "btn-tab d-flex justify-content-start align-items-center show-desktop" : "btn-tab-active d-flex justify-content-start align-items-center show-desktop"} ><i className="fa fa-user mr-2" aria-hidden="true"></i> Quản lý đơn hàng</button>
                                <button onClick={() => onIndexChange(2)} onMouseEnter={() => (pageIndex!=2)&&onHoverChange(2)} class={hovered != 2 ? "btn-tab d-flex justify-content-start align-items-center show-desktop" : "btn-tab-active d-flex justify-content-start align-items-center show-desktop"} ><i className="fa fa-suitcase mr-2" aria-hidden="true"></i> Quản lý nhân viên</button>
                                <button onClick={() => onIndexChange(3)} onMouseEnter={() => (pageIndex!=3)&&onHoverChange(3)} class={hovered != 3 ? "btn-tab d-flex justify-content-start align-items-center show-desktop" : "btn-tab-active d-flex justify-content-start align-items-center show-desktop"} ><i className="fa fa-book mr-2" aria-hidden="true"></i> Quản lý xe</button>
                                <button onClick={() => onIndexChange(4)} onMouseEnter={() => (pageIndex!=4)&&onHoverChange(4)} class={hovered != 4 ? "btn-tab d-flex justify-content-start align-items-center show-desktop" : "btn-tab-active d-flex justify-content-start align-items-center show-desktop"} ><i className="fa fa-exchange mr-2" aria-hidden="true"></i> Quản Lý Chuyến xe</button>
                            </div>

                        </div>
                    </div>
                    <div class="div-component" >
                    {(() => {
                            switch(pageIndex) {
                                case 1:
                                    return <OrderListComponent></OrderListComponent>
                                    break;
                                case 2:
                                    return <EmployeeListComponent></EmployeeListComponent>
                                    break;
                                case 3:
                                    return <CarListComponent></CarListComponent>
                                case 4: 
                                return <TourListComponent></TourListComponent>
                            }
                            })()}
                        
                    </div>
                </div>

            </MainContainer >
            <FatFooter />
        </>
    );
};


export default Admin;