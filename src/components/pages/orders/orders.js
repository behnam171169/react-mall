import React, { Component,useEffect,useState,useContext } from 'react'
import axios from 'axios';
import './order.css'
import { Link } from 'react-router-dom';
import {mainContext} from './../../../context/mainContext'
import api from './../../../htpp/api';
const Orders=(props)=>{
    const [namecusttomer, setnamecusttomer] = useState([ ])
    const {admin}=useContext(mainContext)
    // const b=namecusttomer
    // const propertyNames = Object.keys(b);
    // var result = Object.keys(namecusttomer[0])[0];
    // const propertyValues = Object.values(namecusttomer[0]);

//     var myJSON = JSON.stringify(namecusttomer[0]);
  console.log((namecusttomer) ,'hhhh')
    const goorderdetail=(x)=>{
        
props.history.push({
    pathname:"/admin/Orderdetail",
    state:{
        resnumber:x 
    }
});

    }
    useEffect(() => {
        // setid(props.location.state.id);
        axios.post(`${api.api}/admin/orders`, { 
        }).then((response)=>{
  console.log((response.data),'8888')
    setnamecusttomer(response.data)
        })
    },[])
//    console.log(namecusttomer,'iuummmm')
//    const list=namecusttomer.map((customer)=>{
//      customer.map((customerr)=>{
// <text>
//  hgh
// </text>
//      })
//    }

   return(
       <div>
    <div style={{display:admin?'none':'flex',justifyContent:'center',alignItems:'center',marginTop:25}}>
<text>شما مدیر سایت نیستید</text>
    </div>
  <div style={{display:admin?'flex':'none'}} className="mainlist">
 {namecusttomer.map((data)=>
<div className="adminlistnamecontrol" >
 <button style={{backgroundColor:data[3]?'green':'blue'}} onClick={()=>goorderdetail(data[2])} className="listname" >
        <text style={{textAlign:'center',color:'black'}}>{data[1]} {data[0]}</text> 
 </button>
 
  <button  onClick={()=>goorderdetail(data[2])} >
        <text style={{textAlign:'center',color:'black'}}>{data[1]} {data[0]}</text> 
  </button>
  </div>

        
 )}
</div>
</div>
)
   
}
export default Orders;
