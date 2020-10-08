import React, { Component,useState,useEffect,useContext} from 'react'
import './editprofile.css';
import axios from 'axios';

import Spiner from './../../spinner/spinner';
import {withRouter} from 'react-router-dom';
import {mainContext} from './../../../context/mainContext';
import {Stufflistcontext} from './../../../context/stufflistcontext';
import Dropdown3 from './../../Dropdown/Dropdown3/Dropdown3'
const Editprofile=(props)=>{

    const {login}=useContext(mainContext)
    const [name, setName] = useState('');
    const [lastname, setlastName] = useState('');
    const [username, setusername] = useState('');
    const [showspiner,setShowspiner]=useState(false);
   const [errors,setErrors]=useState('');
   const {changesearchbar,modal}=useContext(Stufflistcontext)
   const id=localStorage.getItem('user')
    useEffect(()=>{
      changesearchbar(false)
        axios.get(`http://localhost:3000/edietprofile/${id}`, { 
        })
        .then((response)=>{
        console.log(response.data.data[0],'oioi')
        setName(response.data.data[0].name)
        setlastName(response.data.data[0].lastname)
        setusername(response.data.data[0].username)
        })
    },[]);
   const namesave=(event)=>{
    setName(event.target.value)
   }
   const lastnamesave=(event)=>{
    setlastName(event.target.value)
   }
   const usernamesave=(event)=>{
    setusername(event.target.value)
   }
 
   
   const datasave=()=>{
  
     if(name.length<1 || username.length<1|| lastname.length<1){

setErrors("لطفا همه فیلد ها را پر کنید")
     }
    
     else if(username.indexOf('@')== -1 || username.indexOf('.com')== -1 ){
   
       setErrors("فرمت ایمیل معتبر نمی باشد")
     }
     
    else{
      setShowspiner(true)
      setErrors('')
    
        const dataa={
          name:name,
          lastname:lastname,
          username:username
      }
      const data=JSON.stringify(dataa)
      axios.put(`http://localhost:3000/auth/editprofile/${id}`,data,{ 
      }).then((response)=>{

if(response.status==200){
  setShowspiner(false)
  props.history.goBack()
}else if(response.status==400){
  setShowspiner(false)
  setErrors('خطا:ویرایش پروفایل انجامنشد')
}else if(response.status==500){
  setShowspiner(false)
  setErrors('خطا در ارتباط با سرور')
}
      })  
     }
 
   }
    return(
      <div>
                              <div style={{opacity:modal?'0':'1',zIndex:1,marginTop:60}}  className="dropdownmenu">
    <Dropdown3 /> 
    </div>
      <div style={{display:login?'none':'flex',justifyContent:'center',alignItems:'center',marginTop:50}}>
      <text>ابتدا به حساب کاربری خود وارد شوید</text>
                        </div>
        <div style={{display:login?'block':'none'}} className="mainreditprofile">
         
<div className="erroreditprofile" style={{display:errors.length>0?'flex':'none'}}>
{errors}
</div>

     <input type="text" placeholder="نام" onChange={namesave} defaultValue={name}/>
     <input type="text" placeholder=" نام خانوادگی" onChange={lastnamesave} defaultValue={lastname}/>
     <input type="email" placeholder="شماره موبایل یا ایمیل" defaultValue={username}  onChange={usernamesave}/>
    <div style={{display:showspiner?'flex':'none'}}>
<Spiner/>
    </div>
<button onClick={()=>datasave()}>
  ثبت
</button>

 

        </div>
        </div>
    )
}
export default withRouter(Editprofile);