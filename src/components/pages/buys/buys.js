import React, { Component,useContext,useEffect,useState } from 'react'
import axios from 'axios';
import Spinner from './../../spinner/spinner';
import {mainContext} from './../../../context/mainContext';
import {Stufflistcontext} from './../../../context/stufflistcontext';
import { IconContext } from "react-icons";
import {AiOutlineDelete } from "react-icons/ai";
import { FaPlus,FaMinus } from "react-icons/fa";
import Dropdown3 from './../../Dropdown/Dropdown3/Dropdown3'
import './buys.css';
const Buys=(props)=>{
   const {userid,login}=useContext(mainContext)
   const[buydata,setbuydata]=useState([]);
   const[sumprices,setsumprices]=useState('');
   const [showspinner,setshowspinner]=useState(false);
   const {changesearchbar,modal}=useContext(Stufflistcontext)
   
   
   const id=localStorage.getItem('user');
   //  console.log(id,'pppoooo')
   useEffect(()=>{
      
      axios.get(`http://localhost:3000/user/buys/${id}`, { 
   })
   .then((response)=>{
      setbuydata(response.data.BUY)
      // let allprices=0;
      // response.data.map((data)=>{
      //   allprices += Number(data.prices)*data.Count; 
      // })
      
      setsumprices(response.data.allprices)
   })
},[]);

const plusnumber=({userid,idpost})=>{
   setshowspinner(true)
   const dataa={
      id:idpost,
   }
   const data=JSON.stringify(dataa)
   axios.put(`http://localhost:3000/user/buys/plus/${userid}`,data ,{ 
})
.then((response)=>{
   if(response.status==200){
      setshowspinner(false)
      window.location.reload({forcedReload:true});
   }
   else{
      setshowspinner(false)
   } })
}
const subtractnumber=({userid,idpost})=>{
   setshowspinner(true)
   const dataa={
      id:idpost,
   }
   const data=JSON.stringify(dataa)
   axios.put(`http://localhost:3000/user/buys/subtract/${userid}`,data ,{ 
})
.then((response)=>{
   console.log(response,'aaa')
   if(response.status==200){
      setshowspinner(false)
      window.location.reload({forcedReload:true});
   }
   else{
      setshowspinner(false)
   }
   
})
}
const  deletebuy=({userid,idpost})=>{
   setshowspinner(true)
   
   const dataa={
      id:idpost,
   }
   const data=JSON.stringify(dataa)
   axios.delete(`http://localhost:3000/user/buys/delete/${userid}`,{headers: { "id": idpost } })
   .then((response)=>{
      
      if(response.status==200){
         setshowspinner(false)
         window.location.reload(true);
      }
      else{
         setshowspinner(false)
      }
      
   })
}
const  customer=()=>{
   props.history.push('/customerdetail');
}

return(
   
   <div>
                <div style={{opacity:modal?'0':'1',zIndex:1,marginTop:60}}  className="dropdownmenu">
    <Dropdown3 /> 
    </div>
   <div style={{display:login?'flex':'none'}}  className="mainbuys">
   <div style={{display:buydata.length<1?'flex':'none',marginTop:100,justifyContent:'center'}}>
   <text >سبدخرید شما خالیست</text>
   </div>
   <div className="spiner"  style={{opacity:showspinner? 1 :0}}>
   <Spinner/>
   </div>
   {buydata.map((data)=>
      <div>
      
      <div  className="buydetail">
      <div className="mainimagebuy">
      <img src="https://www.beytoote.com/images/stories/housekeeping/hou16389.jpg" className="buysImage" />
      </div>
      <div className="buystitle">
      <text className="buytitletext"> <span style={{color:'#44bd32',fontWeight:'bold'}}>نام کالا:</span>{data.title}</text>
      <text style={{display:data.color.length<1?'none':'flex'}} className="buytitletext"><span style={{color:'#44bd32',fontWeight:'bold'}}>رنگ:</span>{data.color}</text>
      <text style={{display:data.weight.length<1?'none':'flex'}} className="buytitletext"><span style={{color:'#44bd32',fontWeight:'bold'}}>وزن:</span>{data.weight}</text>
      <text style={{display:data.memorys.length<1?'none':'flex'}} className="buytitletext"><span style={{color:'#44bd32',fontWeight:'bold'}}>حافظه:</span>{data.memorys}</text>
      <text style={{display:data.numberinpuckets.length<1?'none':'flex'}} className="buytitletext"><span style={{color:'#44bd32',fontWeight:'bold'}}>تعداد در بسته:</span>{data.numberinpuckets}</text>
      <text style={{display:data.garantis.length<1?'none':'flex'}} className="buytitletext"><span style={{color:'#44bd32',fontWeight:'bold'}}>گارانتی:</span>{data.garantis}</text>
      <text style={{display:data.country.length<1?'none':'flex'}} className="buytitletext"><span style={{color:'#44bd32',fontWeight:'bold'}}>کشور سازنده:</span>{data.country}</text>
      
      
      </div>
      <div className="buyprice">
      <text>قیمت:</text>
      <text ><span style={{color:'#F79F1F',fontWeight:'bold'}}>{data.prices}</span> تومان</text>
      
      <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
      {/* <div className="mainbuttonbuy"> */}
      <div className="buynumber" >
      <text>تعداد:</text>
      <IconContext.Provider
      value={{ color: '#F79F1F', size: '25px'}}>
      <FaPlus   onClick={()=>plusnumber({userid:data.user,idpost:data._id})}/> 
      </IconContext.Provider>
      
      <div className="inputnumber">
      <text>{data.Count}</text>
      </div>
      {/* <input defaultValue={data.Count} className="inputnumber"/> */}
      <div style={{display:data.Count >1 ?'flex':'none'}}>
      <IconContext.Provider
      value={{ color: '#F79F1F', size: '25px'}}>
      <FaMinus   onClick={()=>subtractnumber({userid:data.user,idpost:data._id})}/> 
      </IconContext.Provider>
      </div>
      <div style={{display:data.Count ==1 ?'flex':'none'}}>
      <IconContext.Provider
      value={{ color: 'red', size: '25px'}}>
      <AiOutlineDelete   onClick={()=>deletebuy({userid:data.user,idpost:data._id})}/> 
      </IconContext.Provider>
      </div>
      </div>
      {/* <button  className="buttonbuy"><text>{buyicon}</text>افزودن به سبد خرید</button> */}
      {/* </div> */}
      </div>
      </div>
      </div>
      </div>
      )}
     
      <div style={{display:buydata.length<1?'none':'flex'}} className="buysprices">
      <text>جمع کل: {sumprices} تومان</text>
      <button className="buyspricesbutton" onClick={customer}>تصویه حساب</button>
      </div>
      </div> 
    
      </div>
      )
   }
   export default Buys;