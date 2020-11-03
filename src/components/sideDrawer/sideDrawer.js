import React, { Component,useState,useContext } from 'react';
import {  IoIosArrowForward } from "react-icons/io";
import { IconContext } from "react-icons";
import {Link} from 'react-router-dom';
import './sideDrawer.css';
import Logo from './../logo/logo';
 import Backdrop from '../backdrop/backdrop';
 import SlideDrowerpages from './slideDrowerpages/slideDrowerpages';
 import {Stufflistcontext} from './../../context/stufflistcontext';
 import {mainContext} from './../../context/mainContext';
 import {withRouter} from 'react-router-dom';
const SideDrawer=(props)=>{

    const {menu,changemenu,drawer,changedrawer,menuname,changemenuname,stufflist,changestufflist,book,flower}=useContext(Stufflistcontext)
    // const {menu,changemenu,drawer,changedrawer,menuname,changemenuname}=useContext(mainContext)

    // console.log(stufflist,'jhgf')
    const closedrawer=()=>{
     
        changedrawer(false)
    }
   const changeDrawer=(text)=>{
//    changedrawer()
changemenu(!menu)
changestufflist(text)
   changemenuname(text)
   }
    let classes=['SideDrawer','Close'];
    if(drawer){
        classes=['SideDrawer','open']
      
    }
 
    let classes2=['SideDrawer2','Close2'];
    if(menu==true){
        classes2=['SideDrawer2','open2']
    }
   
  // const  openmenu=()=>{
  //   changemenu(!menu)
  // }

    return(
        <React.Fragment>
    
 <Backdrop show={props.show} modalclose={props.closeDrawer}/>

<div style={{display:menu ?'none':'block'}}  className={classes.join(' ')} style={{paddingTop:0}} >
    <div >
  
    <Logo/> 
    </div>
    
  
    
    <Link style={{display:menu ?'none':'block',textDecoration:'none'}}  className="Draweritems" onClick={()=>closedrawer()} to="/">صفحه اصلی</Link>
       <Link style={{display:menu ?'none':'block',textDecoration:'none'}}  className="Draweritems" onClick={()=>changeDrawer(flower)} >گل</Link>
       
       <div className={classes2.join(' ')}>
           <div >
          
           </div>
           <SlideDrowerpages  />
       </div>
       <Link style={{display:menu ?'none':'block',textDecoration:'none'}} className="Draweritems" onClick={()=>changeDrawer(book)} >لوتزم خانگی</Link>
       <Link style={{display:menu ?'none':'block',textDecoration:'none'}} className="Draweritems" >آرایشی و بهداشتی</Link>
       <Link style={{display:menu ?'none':'block',textDecoration:'none'}} className="Draweritems"  onClick={changeDrawer} to="/Computer" > کامپیوتر و لپ تاپ</Link>
       <Link style={{display:menu ?'none':'block',textDecoration:'none'}} className="Draweritems" >لوازم جانبی دیجیتال</Link>
       <Link style={{display:menu ?'none':'block',textDecoration:'none'}} className="Draweritems" onClick={changeDrawer} to="/flower">گل</Link>
       <Link style={{display:menu ?'none':'block',textDecoration:'none'}} className="Draweritems" >لوتزم خانگی</Link>
       <Link style={{display:menu ?'none':'block',textDecoration:'none'}} className="Draweritems" >آرایشی و بهداشتی</Link>
       <Link style={{display:menu ?'none':'block',textDecoration:'none'}} className="Draweritems"  onClick={changeDrawer} to="/Computer" > کامپیوتر و لپ تاپ</Link>
       <Link style={{display:menu ?'none':'block',textDecoration:'none'}} className="Draweritems" >لوازم جانبی دیجیتال</Link>
   
   </div>
   
        </React.Fragment>
        
    )
}
export default withRouter(SideDrawer);