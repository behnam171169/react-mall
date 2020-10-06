import React, { Component,useState,useContext } from 'react';
import './towns.css';
import {mainContext} from './../../../context/mainContext';
const Buttontown=(props)=>{
    const {towns}=useContext(mainContext)
    const nametown=(text)=>{
        towns(text)
      }
    return(
        <button onClick={()=>nametown(props.name)} className="townbutton">{props.name}</button>
    )
    }
const Towns=()=>{
    return(
        <div>
      <Buttontown name="ایلام"/>
      <Buttontown name="تهران"/>
      <Buttontown name="بوشهر"/>
      <Buttontown name="سیستان"/>
      <Buttontown name="اهواز"/>
      <Buttontown name="کرمانشاه"/>
      <Buttontown name="کوردستان"/>
      <Buttontown name="اهوهز"/>
      <Buttontown name="گیلان"/>
      <Buttontown name="مازندران"/>
      <Buttontown name="کرمان"/>
      <Buttontown name="همدان"/>
      <Buttontown name="اصفهان"/>
      <Buttontown name="شیراز"/>
      <Buttontown name="خراسان"/>
      <Buttontown name="سمنان"/>
      <Buttontown name="مرکزی"/>

        </div>
    )
}
export default Towns;