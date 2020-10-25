import React, { Component,useState,useContext } from 'react';
import './city.css';
import {mainContext} from './../../../context/mainContext';
import {Townscontext} from './../../../context/townscontext';

const City=()=>{
    const {customertowns,provins,citys}=useContext(Townscontext)
    
    const namecity=(text)=>{
        citys(text)
      }
      
   return(
   <div>
   {customertowns=='استان'? 
        <text>ابتدا استان را انتخاب کنید</text>
:provins.map((data)=>data.town==customertowns?
    data.city.map((dataa)=>
        <button onClick={()=>namecity(dataa)}  className="citybutton">{dataa}</button> 
    )
:null)}
</div>
)
}
      
   
   
   
 
export default City;