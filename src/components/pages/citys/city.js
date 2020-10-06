import React, { Component,useState,useContext } from 'react';
import './city.css';
import {mainContext} from './../../../context/mainContext';
import Ilam from './allcity/ilam/ilam';
const City=()=>{
    const {customertowns}=useContext(mainContext)
   if(customertowns=='ایلام'){
    return(
        <div>
<Ilam />
        </div>
  )
   }else if(customertowns=='تهران') {
       return(
           <text>kjk</text>
       )
   }else{
       return(
           <text>
               kkkkkk
           </text>
       )
   }
   
       
   
   
}
export default City;