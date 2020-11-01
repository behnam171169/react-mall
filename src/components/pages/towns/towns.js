import React, { Component,useState,useContext } from 'react';
import './towns.css';
import {Townscontext} from './../../../context/townscontext';
const Towns=(props)=>{
    const {provins,towns,customertowns}=useContext(Townscontext);
const changetown=(text)=>{
  towns(text)
 }

    return(
      <div>
          {provins.map((data)=>
           <button onClick={()=>changetown(data.town)} className="townbutton">{data.town}</button>
          )}
      </div>

    )
   
    }

export default Towns;