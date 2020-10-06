import React, { Component } from 'react';
import {  IoIosArrowForward } from "react-icons/io";
import { IconContext } from "react-icons";
import picturelogo from '../../assets/images/microsoftedgenewlogo.5.jpg';
import './logo.css';
const Logo=(props)=>{
    return(
        <div className="Logo" style={{height:props.height}}>
 
   {/* <div className="iconclose">
            <IconContext.Provider 
      value={{ color: '#ffffff', size: '35px' }}>
      <span  > <IoIosArrowForward /></span>
    </IconContext.Provider>
            </div> */}
            <img src={picturelogo} alt="picturelogo"/>
     
        </div>
    )
}
export default  React.memo(Logo)