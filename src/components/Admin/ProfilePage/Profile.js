
import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import Header from "../../../commons/Header";
import MainContainer from "../../../commons/MainContainer";
import FatFooter from "../../../commons/FatFooter";
import Style from "./Profile.css"
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown } from 'react-bootstrap';
import ProfileComponent from './ProfileComponent'

const Profile = ({ }) => {
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
                        <div class="div-avatar-color">
                        <div class="div-avatar  d-flex flex-column" >
                            
                            <div class="div-btn-choose-avatar ">
                            <img  class="ng-star-inserted img-avatar" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/South_Shetland-2016-Deception_Island%E2%80%93Chinstrap_penguin_%28Pygoscelis_antarctica%29_04.jpg/400px-South_Shetland-2016-Deception_Island%E2%80%93Chinstrap_penguin_%28Pygoscelis_antarctica%29_04.jpg" 
                        alt="Cheetah!" />
                        <div class="div-btn-choose-avatar ">
        
                        </div>
                                
                            </div>
                        </div>
                            </div>
                            <labe class="profile-label">Trần Thị Tuyết Chung </labe>
                            <button      onClick={() => onIndexChange(1)} onMouseEnter={() => onHoverChange(1)} class={hovered != 1 ? "btn-tab d-flex justify-content-start align-items-center show-desktop" : "btn-tab-active d-flex justify-content-start align-items-center show-desktop"} ><i className="fa fa-user mr-2" aria-hidden="true"></i>Thông tin tài khoản</button>
                        </div>
                        
                    </div>
                    <div class="div-component" >
                        <ProfileComponent></ProfileComponent>
                    </div>
                </div>

            </MainContainer >
            <FatFooter />
        </>
    );
};


export default Profile;