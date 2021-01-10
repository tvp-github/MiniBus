.card-header {
    background-color: #ffffff;
    font-size: 16px;
  font-weight: 600;
  color: #323234;
  }
  .box-shadow {
    box-shadow: 0px 0px 13px 0px rgba(82, 63, 105, 0.05);
  }
  .card{
      border:unset;
      height: 100%;
  }
  .div-change-avatar {
      background-color: white;
      border: 1px solid white;
      border-radius: 50%;
     
      display: flex;
      justify-content: center;
    }
    .card{
      height: 100%;
    }
    .div-avatar-color{
      border-radius: 50%;
      width: 130px;
      height: 130px;
      border: 1.5px solid #f4d21b;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 5px;
    }
  .div-avatar {
      border-radius: 50%;
      width: 100%;
      overflow: hidden;
    }
  .img-avatar {
      align-self: center;
      border-radius: 50%;
      //border: 1.5px solid #f4d21b;
      cursor: pointer;
      width: 100%;
    }
    .icon-choose-avatar {
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 100%;
      //border: 1px solid;
    }
    .div-btn-choose-avatar {
      margin-top: -2.3rem;
      margin-bottom: 0px;
      display: flex;
      justify-content: center;
      background-color: rgba(130, 130, 130, 0.5);
      padding-top: 3px;
    }
    .lab-name{
      font-size: 16px;
      font-weight: 600;
      color: #494c55;
    }
    .btn-tab{
        width: 100%;
        color: #323234;
        border-radius: unset;
        padding: 5px 25px;
        display: flex !important;
        align-items: center !important;
        border-bottom: 1px solid #e7e7e7;
    }
    .btn-tab-active{
      background-color: #f4d21b !important;
      border-left: 2px solid #323234;
    }
    .icon-my-order{
      width: 16px;
    }
    .div-btn-log-out{
      width: 100%;
      display: flex;
      justify-content: center;
      padding-left: 10px;
      padding-right: 10px;
    }
    .btn-log-out{
      border-radius: 4px;
      border: solid 1px #8e9096;
      background-color: #ffffff;
      color: #8e9096;
      width: 100%;
      height: 40px;
      
    }
    @media screen and (min-device-width: 1024px) and (max-device-width: 1600px){
      .div-app-profile{
          align-items: stretch;
      }
      .div-image{
        flex-grow: 1;
        margin-right: 15px;
        width: 24%;
      }
      .div-component{
        flex-grow: 5;
        width: 76%;
      }
      .div-app-profile{
        min-height: 71vh;
      }
      .show-mobile{
        display: none !important;
      }
      .show-desktop{
        display: inline-block;
      
      }
    }
  
    @media screen and (min-device-width: 320px) and (max-device-width: 1023px) {
      .div-image{
        width: 100%;
      }
      .div-component{
        display: none;
      }
      .show-mobile{
        display: inline-block;
      }
      .show-desktop{
        display:none !important;
      
      }
    }
   