import React, { Component,useState ,useEffect,useContext} from 'react'
import './register.css';
import ReCAPTCHA from "react-google-recaptcha";
import { Link } from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import Spiner from './../../spinner/spinner';
import {Stufflistcontext} from './../../../context/stufflistcontext';

const Register=(props)=>{
  
  
  const [name, setName] = useState('');
  const [lastname, setlastName] = useState('');
  const [username, setusername] = useState('');
  const [password, setPassword] = useState('');
  const [errors,setErrors]=useState('');
  const [recaptcha,setRecaptcha]=useState(false);
  const [showspiner,setShowspiner]=useState(false);
  const {changesearchbar}=useContext(Stufflistcontext)
  useEffect(() => {
    changesearchbar(false)
 
  }, [])
  const gohome=()=>{
    
    props.history.push('/');
  }
  const gologin=()=>{
    props.history.push('/login');
  }
  const namesave=(event)=>{
    setName(event.target.value)
  }
  const lastnamesave=(event)=>{
    setlastName(event.target.value)
  }
  const usernamesave=(event)=>{
    setusername(event.target.value)
  }
  const passwordsave=(event)=>{
    setPassword(event.target.value)
  }
  const recaptchastate=()=>{
    setRecaptcha(true)
  }
  function datasave(){
    let err=[];
    if(name.length<1 || username.length<1|| lastname.length<1){
      err.push("لطفا همه فیلد ها را پر کنید");
      setErrors(err)
    }else if(password.length<5){
      err.push("تعداد ارقام پسورد حداقل پنج رقم می باشد");
      setErrors(err)
    }else if(username.indexOf('@')== -1 || username.indexOf('.')== -1){
      err.push("فرمت ایمیل معتبر نمی باشد");
      setErrors(err)
    }else if(recaptcha == false){
      err.push("گزینه امنتی را فعال کنید");
      setErrors(err)
    }else{
      setErrors('')
      return(
        setShowspiner(true),
        fetch('http://localhost:3000/auth/register',{
        method:'POST',
        headers:{
          'Accept':'application/json',
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body:JSON.stringify(
          {
            name:name,
            lastname:lastname,
            username:username,
            password:password 
          }
          )
        })   .then(async (response)=>{
          const data = await response.json();
          const status=await response.status;
          
          if(status ==200){
            setShowspiner(false)
            localStorage.setItem('user',data.adduser._id)
         
            localStorage.setItem('token', data.token)
            gohome()
            window.location.reload({forcedReload:true});
            
          }else if (status == 400){
            setShowspiner(false)
            setErrors(data.message)
            
          }else if(status == 500){
            setShowspiner(false)
            setErrors('خطا دز اتصال به سرور')
          }
        }
        
        )
        .catch((error)=>{console.error(error)})
        )
      }
      
    }
    return(
      <div className="mainregister">
      
      
      <input type="text" placeholder="نام" onChange={namesave} />
      <input type="text" placeholder=" نام خانوادگی" onChange={lastnamesave} />
      <input type="email" placeholder="شماره موبایل یا ایمیل"  onChange={usernamesave}/>
      <input type="password" placeholder="رمز عبور" onChange={passwordsave}/>
      {/* <text>
      {recaptcha}
      </text> */}
      
    
      <div className="errorregister" style={{display:errors.length<1?'none':'',}}>
      {errors}
      </div>
      <div style={{display:showspiner?'flex':'none'}}>
      <Spiner/>
      </div>
      <div className="registerrecaptcha">
      <ReCAPTCHA
      hl={"fa"}
      sitekey="6LcdfOUUAAAAAFGXuwyP37TpZSyQpHHGxE28WGYo"
      onChange={recaptchastate}
      />
      </div>
     
      <button onClick={datasave}>
      ثبت نام
      </button>
      
      <text>قبلا ثبت نام کرده اید؟<Link   onClick={gologin}>وارد شوید</Link></text>
      
      
      </div>
      )
    }
    export default withRouter(Register);