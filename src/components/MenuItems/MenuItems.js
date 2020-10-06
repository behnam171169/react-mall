// import React, { Component,useContext } from 'react';
// import './MenuItems.css';
// import { IoMdAdd,IoMdPerson } from "react-icons/io";
// import { MdShoppingCart } from "react-icons/md";
// import MenuItem from './MenuItem/MenuItem';
// import {Link} from 'react-router-dom';
// import { IconContext } from "react-icons";
// import {mainContext} from './../../context/mainContext';
// const MenuItems=(props)=>{
//     // const admin=localStorage.getItem('admin')
//     //  const admin2= JSON.parse(admin)
//     const {admin}=useContext(mainContext);

//     const admin2=JSON.parse(admin);
//     const {userid,login}=useContext(mainContext)
//     // const admin=localStorage.getItem('admin'); 
// //     const customerpage=()=>{
// //    props.history.push('/Customerpage');
// //     }
//     return(
// <ul className="MenuItems">
//     <span style={{display:login==true?'flex':'none'}}>
// <MenuItem link="/user/buys"  >
//        <IconContext.Provider
//       value={{ color: '#ffffff', size: '25px' }}>
//       <span style={{marginTop:7}} > < MdShoppingCart /></span>
//     </IconContext.Provider>
//            <span>سبدخرید</span>
//        </MenuItem>
//        </span>
//        <span style={{display:login?'none':'flex'}} onClick={props.openmodal}>
//        <MenuItem  >
//        <IconContext.Provider
//       value={{ color: '#ffffff', size: '25px' }}>
//       <span style={{marginTop:7}} > <IoMdPerson /></span>
//     </IconContext.Provider>
//            <span>ثبت نام/ورود</span>
//        </MenuItem>
      
//        </span>
//        <span  style={{display:login?'flex':'none'}}>
//        <MenuItem link="/Customerpage">
//        <IconContext.Provider
//       value={{ color: '#ffffff', size: '25px' }}>
//       <span style={{marginTop:7}} > <IoMdPerson /></span>
//     </IconContext.Provider>
//            <span>حساب کاربری من</span>
//        </MenuItem>
//        </span>
//        <MenuItem link='/admin'>
//        <div style={{display:'flex'}}  className="panel">
           
//       پنل مدیریت
//        </div>
          
//        </MenuItem>
//        {/* <MenuItem link="/" >
//        <IconContext.Provider
//       value={{ color: '#ffffff', size: '30px' }}>
//       <span style={{marginTop:10}} > <IoMdAdd /></span>
//     </IconContext.Provider>
//            <span>ثبت نام</span>
//        </MenuItem> */}
   
      

//        {/* <MenuItem link="/add-student" 
//        link={{
//            pathname:"/add-student",
//            search:"?sort-name",
//            hash:"#the-hash",
//            state:{fromDashboard:true}
//        }}
//        >
//        اضافه کردن نام دانش آموز
//        </MenuItem> */}
    
//     </ul>
//     )
    
// }
// export default MenuItems;
