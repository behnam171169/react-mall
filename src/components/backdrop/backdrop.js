import React, { Component,useContext } from 'react';
import './backdrop.css';
import {mainContext} from './../../context/mainContext';
import {Stufflistcontext} from './../../context/stufflistcontext'
const Backdrop=(props)=>{
  const {menu,changemenu,drawer,changedrawer}=useContext(Stufflistcontext)
    // const {menu,changemenu,drawer,changedrawer}=useContext(mainContext)
  const  closedrawer=()=>{
    changedrawer()
  }
    return(
    <div style={{display:drawer?'flex':'none'}} className="Backdrop" onClick={closedrawer}>

    </div>
    )
   
    }
export default Backdrop;   