import React, { Component,useState,useContext } from 'react';
import './Modal.css';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import ReCAPTCHA from "react-google-recaptcha";
import {mainContext} from './../../context/mainContext';
import api from './../../htpp/api'
import {Stufflistcontext} from './../../context/stufflistcontext';
import Spiner from './../spinner/spinner';
const Modal=(props)=>{
  const {admin}=useContext(mainContext)
  const {modal,changemodal}=useContext(Stufflistcontext)
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  const [errors, seterrors] = useState('');
  const [showerror,setshowerror]=useState('none');
  const [recaptcha,setRecaptcha]=useState(false);
  const [showspiner,setShowspiner]=useState(false);
  const  closemodal=()=>{
    changemodal(false)
  }
  const recaptchastate=()=>{
    setRecaptcha(true)
  }
  const pass=(event)=>{
    setpassword(event.target.value)
  }
  const mail=(event)=>{
    setusername(event.target.value)
  }
  
  
  const gohome=()=>{
    props.history.push('/');
  }
  
  const reset=()=>{
    props.history.push('/reset');
    closemodal();
  }
  const login=()=>{
    let err=[];
    if(username.length<1 || password.length<1){
      err.push("لطفا همه فیلد ها را پر کنید");
      setshowerror('flex')
      seterrors(err)
    }else if(password.length<5){
      err.push("تعداد ارقام پسورد حداقل پنج رقم می باشد");
      setshowerror('flex')
      seterrors(err)
    }else if(username.indexOf('@')== -1 || username.indexOf('.')== -1){
      err.push("فرمت ایمیل معتبر نمی باشد");
      setshowerror('flex')
      seterrors(err)
    }
    else if(recaptcha == false){
      err.push("گزینه امنتی را فعال کنید");
      setshowerror('flex')
      seterrors(err)
    }
    else{
      seterrors('')
      setshowerror('none')
      return(
        setShowspiner(true),
        fetch(`${api.api}/auth/login`,{
        method:'POST',
        headers:{
          'Accept':'application/json',
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body:JSON.stringify(
          {
            username:username,
            
            password:password,
            check:recaptcha
            
          }
          )
        })   .then(async (response)=>{
          const data = await response.json();
          const statuse=await response.status;
          if(statuse == 200){
            setShowspiner(false)
            localStorage.setItem('user',data.userid)
            localStorage.setItem('admin',data.admin)
            localStorage.setItem('token', data.token)
            gohome() 
            // close()
            closemodal()
            window.location.reload()
            setshowerror('none')
            console.log('kk66')
          }else if(statuse == 400){
            setShowspiner(false)
            seterrors(data.message)
            setshowerror('flex')
          }else if(statuse==500){
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
      <React.Fragment>
      <div style={{display:modal?'flex':'none'}}  onClick={closemodal} className="Backdropmenu">
      
      </div>
      <div className="Modal"
      style={{transform:modal?'translateX(0)':'translateX(-100vw)',
      opacity:modal?'1':'0'
    }}
    >
    <div className="errorse" style={{display:showerror}}>
    <text>{errors}</text>
    </div>
    
    <input type="text" placeholder="username"  onChange={mail}/>
    <input type="password" placeholder="password" onChange={pass} />
    <ReCAPTCHA
    hl={"fa"}
    sitekey="6LcdfOUUAAAAAFGXuwyP37TpZSyQpHHGxE28WGYo"
    onChange={recaptchastate}
    />,
    <div style={{display:showspiner?'flex':'none'}}>
    <Spiner/>
    </div>
    
    <div style={{display:'bluck',marginBottom:30,marginTop:15}}>
    <button onClick={login} style={{marginRight:30}}>
    ورود
    </button>
    
    
    <Link onClick={reset} className="apassword">
    رمز عبور خود را فراموش کرده ام
    </Link>
    </div>
    
    
    <span style={{marginRight:15,color:'white'}}>کاربر جدید هستید؟
    <Link style={{color:'#F79F1F'}} onClick={closemodal}  to="/register" >ثبت نام</Link> کنید </span>
    </div>
    
    
    </React.Fragment>
    
    
    )
  }
  export default withRouter(Modal);
  
  