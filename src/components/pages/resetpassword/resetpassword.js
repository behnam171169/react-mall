import React, {useState,useEffect,useContext } from 'react';
import './resetpassword.css';
import ReCAPTCHA from "react-google-recaptcha";
import Spiner from './../../spinner/spinner';
import {withRouter} from 'react-router-dom';
import {mainContext} from './../../../context/mainContext';
import {Stufflistcontext} from './../../../context/stufflistcontext';
import Dropdown3 from './../../Dropdown/Dropdown3/Dropdown3'
import Swal from 'sweetalert2'
const Resetpassword=(props)=>{
  const {changesearchbar,modal}=useContext(Stufflistcontext)
  const {login}=useContext(mainContext)
  const [username, setusername] = useState('');
  const [errors, seterrors] = useState('');

  const [recaptcha,setRecaptcha]=useState(false);
  const [showspiner,setShowspiner]=useState(false);
  useEffect(()=>{
    changesearchbar(false)
  })
  const mail=(event)=>{
    setusername(event.target.value)
  }
  const recaptchastate=()=>{
    setRecaptcha(true)
  }
  const gochangeEmail=()=>{
    props.history.push('/Changepassword');
  
  }
  const reset=()=>{
    if(username.indexOf('@')==-1 || username.indexOf('.com')==-1 ){
      seterrors("فرمت ایمیل نا معتبر است")
     
    }
    else if(recaptcha== false){
      seterrors("لطفا کد امنیتی را فعال کنید")
   
    }else{
      
      
      return(
        setShowspiner(true),
      
        fetch('http://localhost:3000/auth/password/email',{
        method:'POST',
        headers:{
          'Accept':'application/json',
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body:JSON.stringify(
          {
            username:username,
            
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
            
            gochangeEmail()
            
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
      {/* <div style={{display:login?'none':'flex',justifyContent:'center',alignItems:'center',marginTop:20}}>
      <text>ابتدا به حساب کاربری خود وارد شوید</text>
                        </div> */}
      <div className="mainreset">
      <div className="errorresetpassword" style={{display:errors.length<1?'none':'',}}>
      {errors}
      </div>
      <input type="email" placeholder="ایمیل" onChange={mail} />
      <div className="resetrecaptcha">
      <ReCAPTCHA
      hl={"fa"}
      sitekey="6LcdfOUUAAAAAFGXuwyP37TpZSyQpHHGxE28WGYo"
      onChange={recaptchastate}
      />
      </div>
      <button onClick={reset}>
      تغییر رمز
      </button>
      <div style={{display:showspiner?'flex':'none'}}>
      <Spiner/>
      </div>
      </div>
      </div>
      )
    }
    export default withRouter(Resetpassword) ;