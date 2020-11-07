import React, {useState,useEffect,useContext } from 'react';
import axios from 'axios';
import ReCAPTCHA from "react-google-recaptcha";
import Spiner from './../../../spinner/spinner';
import {withRouter} from 'react-router-dom';
import api from './../../../../htpp/api';
import {mainContext} from './../../../../context/mainContext';
import {Stufflistcontext} from './../../../../context/stufflistcontext';
import './question.css';
import Dropdown3 from './../../../Dropdown/Dropdown3/Dropdown3';
import Swal from 'sweetalert2'
const AdminQuestion=(props)=>{
  const {changesearchbar,modal}=useContext(Stufflistcontext)
  const {login,admin}=useContext(mainContext)
  const [answer, setanswer] = useState('');
  const [errors, seterrors] = useState('');
  const [showspiner,setShowspiner]=useState(false);
  const[customerquestion,setCustomerquestion]=useState([])
  const userid=localStorage.getItem('user');
  console.log(customerquestion,'pppp')
  useEffect(()=>{
    changesearchbar(false)
    axios.get(`${api.api}/admin/userquestions`, { 
    })
    .then((response)=>{
  
        setCustomerquestion(response.data)
    })
  },[])
  const adminanswer=(event)=>{
    setanswer(event.target.value)

  }
 
 
  const sabt=(text)=>{
    if(answer.length<1){
      seterrors("سوالی بپرسید")
    }
   else{
      
      
      return(
        setShowspiner(true),
        fetch(`${api.api}/answeradmin`,{
        method:'POST',
        headers:{
          'Accept':'application/json',
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body:JSON.stringify(
          {
            answer:answer,
            id:text,
            
          }
          )
        })  
        .then(async (response)=>{
          const data = await response.json();
          const statuse=await response.status;
          console.log(statuse,'jjjjj')
          if(statuse == 200){
            setShowspiner(false)
            window.location.reload({forcedReload:true});
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
       <div className="adminspinner" style={{display:showspiner?'flex':'none'}}>
      <Spiner/>
      </div>
     <div style={{opacity:modal?'0':'1',zIndex:1,marginTop:60}}  className="dropdownmenu">
    <Dropdown3 /> 
    </div>
      <div style={{display:admin?'none':'flex',justifyContent:'center',alignItems:'center',marginTop:20}}>
      <text>شما مدیر نیستید</text>
   </div>
  
       <div style={{display:admin?'block':'none'}}>
       
                  {customerquestion.map((data)=>
                 
      <div className="mainreset">
      <text  style={{marginTop:10,marginBottom:20,display:'block'}}>{data.question}</text> 

      {/* <div className="errorresetpassword" style={{display:errors.length<1?'none':'',}}>
      {errors}
      </div> */}
     
      <input type="email" placeholder="پاسخ دهید" onChange={adminanswer} />

      <button onClick={()=>sabt(data._id)}>
    ثبت
      </button>
     
      
      </div>
 )}  
 </div>
    </div>
     
      )
    }
    export default withRouter(AdminQuestion) ;