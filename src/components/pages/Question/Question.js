import React, {useState,useEffect,useContext } from 'react';

import ReCAPTCHA from "react-google-recaptcha";
import Spiner from './../../spinner/spinner';
import {withRouter} from 'react-router-dom';
import {mainContext} from './../../../context/mainContext';
import {Stufflistcontext} from './../../../context/stufflistcontext';
import './Question.css';
import Dropdown3 from './../../Dropdown/Dropdown3/Dropdown3';
import Swal from 'sweetalert2'
const Question=(props)=>{
  const {changesearchbar,modal}=useContext(Stufflistcontext)
  const {login}=useContext(mainContext)
  const [customerquestion, setcustomerquestion] = useState('');
  const [errors, seterrors] = useState('');
  const [showspiner,setShowspiner]=useState(false);
  const userid=localStorage.getItem('user');
  useEffect(()=>{
    changesearchbar(false)
  })
  const question=(event)=>{
    setcustomerquestion(event.target.value)
  }
 
 
  const sabt=()=>{
    if(customerquestion.length<1){
      seterrors("سوالی بپرسید")
    }
   else{
      
      
      return(
        setShowspiner(true),
        fetch('http://localhost:3000/customerquestion',{
        method:'POST',
        headers:{
          'Accept':'application/json',
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body:JSON.stringify(
          {
            question:customerquestion,
            userid:userid,
            
          }
          )
        })  
        .then(async (response)=>{
          const data = await response.json();
          const statuse=await response.status;
          console.log(statuse,'jjjjj')
          if(statuse == 200){
            Swal.fire({
              title: 'لینک تغییر رمز به ایمیل شما ارسال شد',
              icon: 'success',
              confirmButtonText: 'متوجه شدم',
            })
            setShowspiner(false)
            
        
            
          }else if(statuse == 400){
            setShowspiner(false)
            seterrors(data.message)
          
          }else if(statuse == 500){
            setShowspiner(false)
           
            seterrors('خطا در رتباط با سرور')
          }
        }
        
        )
        .catch((error)=>{console.error(error)})
        )
      }
    }
    return(
      <div>
     <div style={{opacity:modal?'0':'1',zIndex:1,marginTop:60}}  className="dropdownmenu">
    <Dropdown3 /> 
    </div>
      <div style={{display:login?'none':'flex',justifyContent:'center',alignItems:'center',marginTop:20}}>
      <text>ابتدا به حساب کاربری خود وارد شوید</text>
                        </div>
                       
      <div className="mainreset">
      <text  style={{marginTop:10,marginBottom:20,display:'block'}}>09106861071پشتیبانی</text> 

      <div className="errorresetpassword" style={{display:errors.length<1?'none':'',}}>
      {errors}
      </div>
     
      <input type="email" placeholder="سوالی دارید؟" onChange={question} />

      <button onClick={sabt}>
    ثبت
      </button>
     
      <div style={{display:showspiner?'flex':'none'}}>
      <Spiner/>
      </div>
      </div>
      </div>
      )
    }
    export default withRouter(Question) ;