import React, {useState,useContext,useEffect } from 'react';
import './changepassword.css';
import ReCAPTCHA from "react-google-recaptcha";
import {withRouter} from 'react-router-dom';
import Spiner from './../../spinner/spinner';
import api from '../../../htpp/api';
import {Stufflistcontext} from './../../../context/stufflistcontext';
const Changepassword=(props)=>{
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  const [errors, seterrors] = useState('');
  const [recaptcha,setRecaptcha]=useState('');
  const [showspiner,setShowspiner]=useState(false);
  const {changesearchbar}=useContext(Stufflistcontext)

  const url=window.location.pathname;
  useEffect(() => {
    changesearchbar(false)
  }, [])
  const curenturl= url.slice(16);
  const mail=(event)=>{
    setusername(event.target.value)
  }
  const pass=(event)=>{
    setpassword(event.target.value)
  }
  const recaptchastate=()=>{
    
    setRecaptcha(true)
    
  }
  const gohome=()=>{
    props.history.replace('/')
  }
  const changepass=()=>{
    if(username.indexOf('.com')==-1 ||username.indexOf('@')==-1 ){
      seterrors('فرمت ایمیل نامعتبر است')
      
    }else if(password.length < 5){
      seterrors('تعدادارقام پسوورد نباید کمتر از 5باشد')
      
    }else if(recaptcha==false){
      
    }
    else{
      return(
        setShowspiner(true),
        fetch(`${api.api}/auth/password/reset`,{
        method:'POST',
        headers:{
          'Accept':'application/json',
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body:JSON.stringify(
          {
            username:username,
            password:password,
            token:curenturl
            
          }
          )
        })  
        .then(async (response)=>{
          const data = await response.json();
          const statuse=await response.status;
          
          if(statuse == 200){
            setShowspiner(false)
            gohome()
            
            
          }else if(statuse == 400){
            seterrors(data.message)
            setShowspiner(false)
          }else if(statuse == 500){
            setShowspiner(false)
            seterrors('خطادر ارتباط با سرور')
          }
        }
        
        )
        .catch((error)=>{console.error(error)})
        )
      }
    }
    return(
      <div className="mainreset">
      <div className="changepassworderror" style={{display:errors.length<1?'none':'',}}>
      {errors}
      </div>
      
      
      <input type="email" placeholder="ایمیل" onChange={mail} />
      <input type="password" placeholder="پسوورد" onChange={pass} />
      <div className="hangepasscarecaptcha">
      <ReCAPTCHA
      hl={"fa"}
      sitekey="6LcdfOUUAAAAAFGXuwyP37TpZSyQpHHGxE28WGYo"
      onChange={recaptchastate}
      />
      </div>
      <div style={{display:showspiner?'flex':'none'}}>
      <Spiner/>
      </div>
      <button onClick={changepass} >
      بازیابی رمز
      </button>
      </div>
      )
    }
    export default withRouter(Changepassword);