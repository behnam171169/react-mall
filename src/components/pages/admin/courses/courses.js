import React, { Component,useEffect,useState,useContext } from 'react'
import axios from 'axios';
import './courses.css';
import api from './../../../../htpp/api';
 import {mainContext} from './../../../../context/mainContext';
import {Link} from 'react-router-dom';
const Courses=(props)=>{

const [data, setdata] = useState([]);
const[message,setMessage]=useState('');
const {admin}=useContext(mainContext)
console.log(props.location.state,'nnnn')
console.log(data,'vvvv')
const checkdata=(id)=>{
    axios.put(`${api.api}/admin/courses/check/${id}`, {  
    })
    .then((response)=>{
        if(response.status ==200){
            window.location.reload(true);
            

        }else{
            setMessage('خطایی رخ داد')
        }
    })
}
const deletok=()=>{
    alert('حذف با موفقیت انجام شد')
    window.location.reload(true);
}


    useEffect(()=>{
        axios.get(`${api.api}/admin/courses`, { 
        })
        .then((response)=>{
            setdata(response.data);
        })
    },[]);

   const deletedata=(id)=>{
    axios.delete(`${api.api}/admin/course/${id}`)
    .then(res => {
        if(res.status ==200){
            deletok();
        }
    })
   }
    return(
        <div>
        <div style={{display:admin?'none':'flex',justifyContent:'center',alignItems:'center',marginTop:25}}>
    <text>شما مدیر سایت نیستید</text>
        </div>
        <div style={{display:admin?'flex':'none'}} className="maincourses">

     {    data.map((dataa)=>
    <div className="coursescards">
                   <Link to={{
  pathname: '/postdetails',
  state:dataa
}}>
    
              
 <img src={`${api.api}${dataa.images}`} className="coursesImage" />
<div className="detail">


<text >{dataa.title}</text>
<div className="price">
 <text style={{color:'#009432'}}>تومان</text>
<text style={{color:'#009432'}}>{dataa.prices}</text>
</div>
 </div>  
 
 </Link>
 <div className="mainadmin" >
 <Link className="adminedit" to={{
  pathname: '/admin/edit/courses',
  state: {
id:dataa._id
  }
}}>
     ویرایش</Link>

 <button className="admindlete"  onClick={()=>{deletedata(dataa._id)}}> حذف</button>
 </div>
 <button className="adminok"  onClick={()=>checkdata(dataa._id)}>تایید</button>
</div>

 ) }  
 
        </div>
        </div>
    )
}
export default Courses;