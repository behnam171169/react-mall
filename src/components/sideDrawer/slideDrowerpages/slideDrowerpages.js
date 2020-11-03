import React, { Component,useContext } from 'react'
import './slideDrowerpages.css';
import Flowerlist from './pages/Flowerlist';
import { IconContext } from "react-icons";
import { IoMdMenu,IoIosArrowForward } from "react-icons/io";
import {Stufflistcontext} from './../../../context/stufflistcontext'
import {mainContext} from './../../../context/mainContext';
 const SlideDrowerpages=()=>{
   const {stufflist,changedrawer,menu,changemenu,menuname,changemenuname}=useContext(Stufflistcontext)
   //  const {menu,changemenu,menuname,changemenuname,}=useContext(mainContext)
  
    const closemenu=()=>{
        changemenu(!menu) 
      }
    return(
         <div  >
    
      <div  className="closemenuicon"  >
        
      <IconContext.Provider 
      value={{ color: 'black', size: '30px'}}>
 <IoIosArrowForward onClick={()=>closemenu()} /> 
    </IconContext.Provider>
       </div>
        <div >
        <Flowerlist/>
        </div>
         </div>
     )
 }
 export default SlideDrowerpages;