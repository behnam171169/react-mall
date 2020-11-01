import React, { Component,useState,useContext} from 'react';
import { IconContext } from "react-icons";
import SideDrawer from '../sideDrawer/sideDrawer';
import './Toolbar.css';
import { FaPhone } from "react-icons/fa";
import { IoMdMenu,IoMdPerson } from "react-icons/io";
import {MdShoppingCart } from "react-icons/md";
import Modal from '../Modal/Modal';
import {mainContext} from './../../context/mainContext';
import {withRouter} from 'react-router-dom';
import { Link } from 'react-router-dom';
import {Stufflistcontext} from './../../context/stufflistcontext';
const Toolbar=(props)=>{
  const {changemodal,changedrawer}=useContext(Stufflistcontext)
  const {login,admin}=useContext(mainContext)
  const[show,setShow]=useState(false);
  const[modalshow,setShowmodal]=useState(false)
  
  const loginregister=()=>{
    
    changemodal()
  }

  const closemodal=()=>{
    setShowmodal(false)
  }
  const closeDrawer=()=>{
    setShow(false)
  }
  const opensidDrawer=()=>{
    
    changedrawer()
    
  }
  return(
    <div className="Toolbar">
    
    <SideDrawer  show={show} closeDrawer={closeDrawer}  />
    
    <div className="sizemin" >
    
    <span>
    
    <IconContext.Provider
    value={{ color: 'red', size: '25px'}}>
    <IoMdMenu  onClick={opensidDrawer} /> 
    </IconContext.Provider>
    </span>
    
    
    </div>
    <div className="customermanage">
    <Link   style={{display:login?'flex':'none',textDecoration:'none'}} className="modallogin" to="/user/buys">
    <IconContext.Provider
    value={{ color: '#ffffff', size: '25px' }}>
    <span > <MdShoppingCart  /></span>
    </IconContext.Provider>
    <span className="toolbartext" >سبدخرید</span>
    
    </Link>
    
    {/* ------------------------------- */}
    <Link  style={{display:login?'flex':'none',textDecoration:'none'}} className="buyscustomer" to="/Customerpage">
    <IconContext.Provider
    value={{ color: '#ffffff', size: '25px' }}>
    <span > <IoMdPerson /></span>
    </IconContext.Provider>
    <span className="toolbartext">حساب کاربری من</span>
    
    </Link>
    {/* ------------------------- */}
    <Link onClick={()=>loginregister()}  style={{display:login?'none':'flex',textDecoration:'none'}} className="loginbuttonmax"  >
    <IconContext.Provider
    value={{ color: '#ffffff', size: '25px' }}>
    <span > <IoMdPerson /></span>
    </IconContext.Provider>
    <span className="toolbartext">ثبت نام/ ورود</span>
    </Link>
    <Link to="/login"  style={{display:login?'none':'flex',textDecoration:'none'}} className="loginbuttonmin"  >
    <IconContext.Provider
    value={{ color: '#ffffff', size: '25px' }}>
    <span > <IoMdPerson /></span>
    </IconContext.Provider>
    <span className="toolbartext">ثبت نام/ ورود</span>
    </Link>
    
    {/* -------------------------------------- */}
    <Link to="/admin"  style={{display:admin?'flex':'none',textDecoration:'none'}} className="buyscustomer" >
    <IconContext.Provider
    value={{ color: '#ffffff', size: '25px' }}>
    <span > <IoMdPerson /></span>
    </IconContext.Provider>
    <span className="toolbartext">پنل مدیریت</span>
    </Link>
    
    </div>
    
    
    <span style={{color:'#ffffff',height:'100%',display:'flex',alignItems:'center'}}>
    {/* <span style={{marginLeft:3,marginTop:10}} >
    <div className="phone">
    <IconContext.Provider
    value={{ color: '#F79F1F', size: '18px'}}>
    <FaPhone /> 
    
    </IconContext.Provider>
    </div>
    </span> */}
    {/* <span style={{marginLeft:4,marginTop:6,color:'#F79F1F'}} className="phone">
    09106861071
    </span> */}
    <Link  to="/Question" className="phone">
    ارتباط با ما
    </Link>
    
    </span>
    
    
    <Modal showModal={modalshow}  closemodal={()=>setShowmodal(false)}/>
    </div>
    
    
    
    )
  }
  export default withRouter(Toolbar);