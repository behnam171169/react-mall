import React, { Component, useEffect, useState } from 'react';
import axios from 'axios';
import api from './../../../../htpp/api';
import './orderdetail.css'
const Orderdetail=(props)=>{
    // console.log(props.location.state.resnumber,'lklklklkl')
    
   const[reciverdata,setreciverdata]=useState('');
   const[buydata,setbuydata]=useState([]);

   console.log(reciverdata.resnumber,'kjhgfdsa2222')
// useEffect(()=>{
//     axios.get(`${api.api}/admin/ordersdetail/seeok${props.location.state.resnumber}`, { 
//     })
// },[])
    useEffect(()=>{
        axios.get(`${api.api}/admin/ordersdetail/${props.location.state.resnumber}`, { 
        }).then((response)=>{
   console.log(response.data[0][0],'ccccc')
   setreciverdata(response.data[0][0])
   setbuydata(response.data[1])
        })
    },[])
     const sendstuff=()=>{
        const resnumber=reciverdata.resnumber;
        axios.delete(`${api.api}/admin/sendstuff/ok/${resnumber}`, { 
        })
        .then((response)=>{
            if(response.status==200){
    
                window.location.replace("http://localhost:3001/admin/Orders");
            }
       
        })
     }
    return(
        
        <div className="mainorderdetail">
         <div className="mainreciverinformation">
             <div className="reciverinformation">
             <text>نام:{reciverdata.name}</text>
            <text>نام خانوادگی:{reciverdata.lastname}</text>
             </div>

             <div className="reciverinformation">
             <text>کدملی:{reciverdata.codemeli}</text>
            <text>کدپستی:{reciverdata.codeposti}</text>
            
             </div>

             <div className="reciverinformation">
             <text>استان:{reciverdata.province}</text>
            <text>شهر:{reciverdata.city}</text>
             </div>
             <div className="reciverinformation">
             <text>آدرس:{reciverdata.addres}</text>
             <text>شماره همراه:{reciverdata.number}</text>
             </div>
         </div>
            
        {buydata.map((data)=>
       <div className="datadetail">
          
               <text style={{display:data.title.length<1?'none':'flex'}} className="datadetailtext" >عنوان:{data.title}</text>
               <text   style={{display:data.color.length<1?'none':'flex'}} className="datadetailtext">رنگ:{data.color}</text>
               <text  style={{display:data.country.length<1?'none':'flex'}} className="datadetailtext">کشور سازنده:{data.country}</text>
               <text style={{display:data.memorys.length<1?'none':'flex'}} className="datadetailtext">حافظه داخلی:{data.memorys}</text>
               <text style={{display:data.weight.length<1?'none':'flex'}} className="datadetailtext">وزن:{data.weight}</text>
               <text style={{display:data. garantis.length<1?'none':'flex'}} className="datadetailtext">گارانتی:{data. garantis}</text>
               <text style={{display:data.numberinpuckets.length<1?'none':'flex'}} className="datadetailtext">گارانتی:{data.numberinpuckets}</text>
               <text style={{display:data.Count.length<1?'none':'flex'}} className="datadetailtext">تعداد:{data.Count}</text>

               </div>
        )}
        <div>
            <button onClick={()=>sendstuff()} className="orderdetailbutton">
            <text>تحویل داده شده</text>
            </button>
            
        </div>
       </div>
    )
}
export default Orderdetail;
