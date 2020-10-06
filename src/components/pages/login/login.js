import React, { Component,useState,useContext } from 'react';
import './login.css';
import ReCAPTCHA from "react-google-recaptcha";
import { Link } from 'react-router-dom';
import Spiner from './../../spinner/spinner';
const Login=(props)=>{
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  const [errors, seterrors] = useState('');
  const [recaptcha,setRecaptcha]=useState('');
  const [check,setcheck]=useState(false);
  const [showspiner,setShowspiner]=useState(false);
  const pass=(event)=>{
    setpassword(event.target.value)
  }
  const mail=(event)=>{
    setusername(event.target.value)
  }
  const recaptchastate=()=>{
    setRecaptcha(true)
  }
  const gohome=()=>{
    props.history.push('/');
  }
  const goregister=()=>{
    props.history.push('/register');
  }
  const checkBox=()=>{
    setcheck(!check)
  }
  
  
  const login=(props)=>{
    let err=[];
    if(username.length<1 || password.length<1){
      err.push("لطفا همه فیلد ها را پر کنید");
      seterrors(err)
    }else if(password.length<5){
      err.push("تعداد ارقام پسورد حداقل پنج رقم می باشد");
      
      seterrors(err)
    }else if(username.indexOf('@')== -1 || username.indexOf('.')== -1){
      err.push("فرمت ایمیل معتبر نمی باشد");
      seterrors(err)
    }
    else if(recaptcha == false){
      err.push("گزینه امنتی را فعال کنید");
      seterrors(err)
    }
    else{
      seterrors('')
      setShowspiner(true)
      return(
        fetch('http://localhost:3000/auth/login',{
        method:'POST',
        headers:{
          'Accept':'application/json',
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body:JSON.stringify(
          {
            username:username,
            password:password,
            check:check
          }
          )
        })   .then(async (response)=>{
          
          const data = await response.json();
          
          const status=await response.status;
          console.log(data)
          if(status == 200){
            setShowspiner(false)
            // console.log(data,'llll')
            localStorage.setItem('user',data.userid)
            // localStorage.setItem('admin',data.admin)
            localStorage.setItem('token', data.token)
            gohome()
            window.location.reload(true);
          }else if(status == 400){
            setShowspiner(false)
            seterrors(data.message)
          }else if(status == 500){
            setShowspiner(false)
            seterrors('خطا در ارتباط با سرور')
          }
        }
        )
        .catch((error)=>{console.error(error)})
        )
      }
    }
    return(
      <div className="mainlogin">
      <div className="loginerror" style={{display:errors.length<1?'none':'',}}>
      {errors}
      </div>
      <input type="email" placeholder="ایمیل" onChange={mail} />
      <input type="password" placeholder="رمز عبور" onChange={pass} />
      <div className="loginrecaptcha">
      <ReCAPTCHA
      hl={"fa"}
      sitekey="6LcdfOUUAAAAAFGXuwyP37TpZSyQpHHGxE28WGYo"
      onChange={recaptchastate}
      />
      </div>
      <div style={{display:showspiner?'flex':'none'}}>
      <Spiner/>
      </div>
      {/* <div className="checkbox">
      <input type="checkbox" name="remember" onChange={checkBox} />
      </div> */}
      <button onClick={login}>
      ورود
      </button>
      <div className="cl" style={{display:'flex',justifyContent:'spacebetween'}}>
      <Link to={'./reset'}>فراموشی رمز عبور</Link>
      <text >کاربر جدید هستید<Link onClick={goregister}>ثبت نام کنید</Link></text>
      </div>
      </div>
      )
    }
    export default Login;