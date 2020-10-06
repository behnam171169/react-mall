import React, { Component,useEffect,useState,useContext } from 'react'
import axios from 'axios';
import Spinner from './../../spinner/spinner';
import {mainContext} from './../../../context/mainContext';
const Customerbuys=(props)=>{
    const {login}=useContext(mainContext)
    const [showspinner,setshowspinner]=useState(false);
    const[buydata,setbuydata]=useState([]);
    const id=localStorage.getItem('user')
    useEffect(()=>{
 
        setshowspinner(true)
        axios.get(`http://localhost:3000/user/customerbuys/${id}`, { 
        })
        .then((response)=>{
            if(response.status==200){
                setshowspinner(false)
                setbuydata(response.data.BUY)
            }
        

        })
    },[]);
    return(
        <div>
            <div style={{display:login?'none':'flex',justifyContent:'center',alignItems:'center',marginTop:50}}>
      <text>ابتدا به حساب کاربری خود وارد شوید</text>
                        </div>
        <div style={{display:login?'flex':'none'}}  className="mainbuys">
        <div style={{display:buydata.length<1?'flex':'none',marginTop:100,justifyContent:'center'}}>
            <text >هیچ کالایی خریداری نکرده اید</text>
            </div>
            <div className="spinner"  style={{opacity:showspinner? 1 :0}}>
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
            <text className="buytitletext"><span style={{color:'#44bd32',fontWeight:'bold'}}>رنگ:</span>{data.color}</text>
          </div>
          <div className="buyprice">
              <text>قیمت:</text>
          <text ><span style={{color:'#F79F1F',fontWeight:'bold'}}>{data.prices}</span> تومان</text>

          <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
       {/* <div className="mainbuttonbuy"> */}
       <div className="buynumber" >
         <text>تعداد:</text>
   {/* <IconContext.Provider
      value={{ color: '#F79F1F', size: '25px'}}>
 <FaPlus   onClick={()=>plusnumber({userid:data.user,idpost:data._id})}/> 
    </IconContext.Provider> */}
         <div className="inputnumber">
        <text>{data.Count}</text>
        </div>
       {/* <input defaultValue={data.Count} className="inputnumber"/> */}
       {/* <div style={{display:data.Count >1 ?'flex':'none'}}>
       <IconContext.Provider
      value={{ color: '#F79F1F', size: '25px'}}>
 <FaMinus   onClick={()=>subtractnumber({userid:data.user,idpost:data._id})}/> 
    </IconContext.Provider>
    </div> */}
    {/* <div style={{display:data.Count ==1 ?'flex':'none'}}>
       <IconContext.Provider
      value={{ color: 'red', size: '25px'}}>
 <AiOutlineDelete   onClick={()=>deletebuy({userid:data.user,idpost:data._id})}/> 
    </IconContext.Provider>
    </div> */}
       </div>
 
       </div>
          </div>
          </div>
       </div>
          )}
        
        </div> 

       </div>

    )
}
export default Customerbuys;
