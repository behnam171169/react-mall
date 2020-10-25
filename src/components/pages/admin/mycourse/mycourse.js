import React, { Component,useEffect,useState,useContext } from 'react'
import axios from 'axios';
import './mycourse.css';
 import {mainContext} from './../../../../context/mainContext';
import {Link} from 'react-router-dom';
const Mycourses=(props)=>{

const [data, setdata] = useState([]);
const[message,setMessage]=useState('');
const {admin}=useContext(mainContext)
const userid=localStorage.getItem('user')
const checkdata=(id)=>{
    axios.put(`http://localhost:3000/admin/courses/check/${id}`, {  
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
        axios.get(`http://localhost:3000/admin/mycourses/${userid}`, { 
        })
        .then((response)=>{
            setdata(response.data);
        })
    },[]);

   const deletedata=(id)=>{
    axios.delete(`http://localhost:3000/admin/course/${id}`)
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
        <div style={{display:admin?'flex':'none'}} className="mycourses">

     {    data.map((dataa)=>
    <div className="coursescards">
                   <Link to={{
  pathname: '/postdetails',
  state: {
id:dataa._id
  }
}}>
    
              
 <img src="https://www.beytoote.com/images/stories/housekeeping/hou16389.jpg" className="coursesImage" />
<div className="detail">


<text >{dataa.title}</text>
<div className="price">
 <text style={{color:'#009432'}}>تومان</text>
<text style={{color:'#009432'}}>{dataa.prices}</text>
</div>
 </div>  
 
 </Link>
 <div className="mainmycourseadmin" >
 <Link className="adminmycourseedit" to={{
  pathname: '/admin/edit/courses',
  state: {
id:dataa._id
  }
}}>
     ویرایش</Link>

 <button className="adminmycoursedlete"  onClick={()=>{deletedata(dataa._id)}}> حذف</button>
 </div>
 <button className="adminok"  onClick={()=>checkdata(dataa._id)}>تایید</button>
</div>

 ) }  
 
        </div>
        </div>
    )
}
export default Mycourses;