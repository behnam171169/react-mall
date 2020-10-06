import React, { Component,useContext,useEffect } from 'react'
import './customerpage.css'
import { IconContext } from "react-icons";
import { AiOutlinePoweroff } from "react-icons/ai";
import {FaKey,FaUserEdit} from "react-icons/fa";
import {IoIosBasket } from "react-icons/io";
import {MdShoppingCart } from "react-icons/md";
import {withRouter} from 'react-router-dom';
import {mainContext} from './../../../context/mainContext';

const Customerpage=(props)=>{
      const {login}=useContext(mainContext)
     
     
      const logout=()=>{
            localStorage.removeItem('token')
            
            window.location.reload()
      }
      const newbuy=()=>{
            props.history.push('/user/buys');
      }
      const Customerbuys=()=>{
            props.history.push('/Customerbuys');
      }
      const edit=()=>{
            props.history.push('/editprofile');
      }
      const  changepassword=()=>{
            props.history.push('/reset');
      }
      return(
            <div>
                  <div style={{display:login?'none':'flex',justifyContent:'center',alignItems:'center',marginTop:20}}>
<text>ابتدا به حساب کاربری خود وارد شوید</text>
                  </div>
            <div style={{display:login?'flex':'none'}} className="main"> 
            
            
            <button onClick={()=>logout()} className="logout">
            <IconContext.Provider
            value={{  size: '35px' }}>
            < AiOutlinePoweroff />
            </IconContext.Provider>
            
            
            
            <span className="title">خروج</span>
            </button>
            
            
            
            <button onClick={()=>changepassword()} className="logout">
            <IconContext.Provider
            value={{  size: '35px' }}>
            < FaKey />
            </IconContext.Provider>
            
            <span   className="title">تغییر رمز عبور</span>
            </button>
            <button onClick={()=>Customerbuys()}  className="logout">
            <IconContext.Provider
            value={{  size: '35px' }}>
            < IoIosBasket />
            </IconContext.Provider>
            
            <span className="title">کالاهای خریداری شده</span>
            </button>
            <button onClick={()=>newbuy()} className="logout">
            <IconContext.Provider
            value={{  size: '35px' }}>
            <  MdShoppingCart />
            </IconContext.Provider>
            
            <span className="title">سبد خرید</span>
            </button>
            <button onClick={()=>edit()} className="logout">
            <IconContext.Provider
            value={{  size: '35px' }}>
            <  FaUserEdit />
            </IconContext.Provider>
            
            <span className="title">ویرایش اطلاعات کاربری</span>
            </button >
            </div>
            </div>
            )
      }
      export default withRouter(Customerpage);