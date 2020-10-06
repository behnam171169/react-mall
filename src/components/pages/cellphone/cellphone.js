import React, { Component,useState } from 'react'
import './cellphone.css'
const Cellphone=()=>{
    const phone=[
        {title:'hello',text:'behnam',src:"https://tse3.mm.bing.net/th?id=OIP.OBFcQ9HYyGiprtY4b4ZAQwHaF7&pid=Api&P=0&w=248&h=199"},
        {title:'hello',text:'behnam',src:"https://tse3.mm.bing.net/th?id=OIP.OBFcQ9HYyGiprtY4b4ZAQwHaF7&pid=Api&P=0&w=248&h=199"},
        {title:'hello',text:'behnam',src:"https://tse1.mm.bing.net/th?id=OIP.LmlPBSiTTk2_I0fxXMRHKgHaEo&pid=Api&P=0&w=246&h=154"},
        {title:'hello',text:'behnam',src:"https://tse1.mm.bing.net/th?id=OIP.LmlPBSiTTk2_I0fxXMRHKgHaEo&pid=Api&P=0&w=246&h=154"},
        {title:'hello',text:'behnam',src:"https://tse3.mm.bing.net/th?id=OIP.jLU09u2tFI3y8nk4ECNXBwHaHa&pid=Api&P=0&w=300&h=300"},
        {title:'hello',text:'behnam',src:"https://tse3.mm.bing.net/th?id=OIP.QLTz2Bmfr1gwFcVMB9AU1AHaGf&pid=Api&P=0&w=173&h=152"},
        {title:'hello',text:'behnam',src:"https://tse4.mm.bing.net/th?id=OIP.aEodPHn4aVhcQJ7PNhUuxQHaIc&pid=Api&P=0&w=300&h=300"},
        {title:'hello',text:'behnam',src:"https://tse4.mm.bing.net/th?id=OIP.Q3LYxYT5pD4mfAJuuTuKxwHaJD&pid=Api&P=0&w=300&h=300"},
    ]
    const showCellphone=phone.map((phone)=>
       <img src={phone.src} className="cellphoneImage" />
    )
 console.log(phone)
    return(
        <div className="maincellphone">
                {    phone.map((phone)=>
           <div className="cellphonecards">
   
       <img src={phone.src} className="cellphoneImage" />
   
        
           </div>
 ) }  

        </div>

    )
}
export default Cellphone;