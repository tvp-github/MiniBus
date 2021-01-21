
import React, { useState } from "react";
import Header from "../../../commons/Header";
import MainContainer from "../../../commons/MainContainer";
import FatFooter from "../../../commons/FatFooter";
import Style from "./AdminProfile.css"
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import OrderListComponent from '../AdminSystemContentComponent/orderList'
import EmployeeListComponent from '../AdminSystemContentComponent/employList'

const AdminSystem = ({ }) => {
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
            <Header loggedIn={true} />
            <MainContainer>

                <script src="https://use.fontawesome.com/releases/v5.15.1/js/all.js" data-auto-replace-svg="nest"></script>

                <div class="d-flex  div-app-profile" >
                    <div class="div-image" >
                        <div class="card">
                            <div>
    
                                <button onClick={() => onIndexChange(1)} onMouseEnter={() => (pageIndex!=1)&&onHoverChange(1)} class={hovered != 1 ? "btn-tab d-flex justify-content-start align-items-center show-desktop" : "btn-tab-active d-flex justify-content-start align-items-center show-desktop"} ><i className="fa fa-book mr-2" aria-hidden="true"></i> Quản nhân viên</button>
                            </div>

                        </div>
                    </div>
                    <div class="div-component" >
                    {(() => {
                            switch(pageIndex) {
                                case 1:
                                    return <EmployeeListComponent></EmployeeListComponent>
                                    break;
                            }
                            })()}
                        
                    </div>
                </div>

            </MainContainer >
            <FatFooter />
        </>
    );
};


export default AdminSystem;