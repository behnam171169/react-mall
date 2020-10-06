import React, { Component,useState,useContext } from 'react';
import './../../city.css';
import {mainContext} from './../../../../../context/mainContext';
const Buttoncity=(props)=>{
    const {citys}=useContext(mainContext)
    const namecity=(text)=>{
        citys(text)
      }
    return(
        <button onClick={()=>namecity(props.name)} className="citybutton">{props.name}</button>
    )
    }
const Ilam=()=>{
    return(
        <div>
      <Buttoncity name="آسمان آباد"/>
      <Buttoncity name="سرابله"/>
        </div>
    )
}
export default Ilam;