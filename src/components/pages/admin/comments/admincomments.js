import React, { Component, useEffect ,useState,useContext} from 'react'
import axios from 'axios';
import './admincomments.css'
import {mainContext} from './../../../../context/mainContext';
const Admincomments=()=>{
    const [commets, setcommets] = useState([])
    const {admin}=useContext(mainContext)
    useEffect(()=>{
        axios.get('http://localhost:3000/admin/comments', { 
    })
    .then((response)=>{
        setcommets(response.data)
        
    })
},[]);
const check=(id)=>{
    axios.put(`http://localhost:3000/admin/commentsok/${id}`, { 
})
.then((response)=>{
    if(response.status==200){
        window.location.reload({forcedReload:true});
    }
    
})
}
const deletcomment=(id)=>{
    axios.delete(`http://localhost:3000/admin/commentsdelete/${id}`, { 
})
.then((response)=>{
    if(response.status==200){
        window.location.reload({forcedReload:true});
    }
    
})
}
return(
    <div>
    <div style={{display:admin?'none':'flex',justifyContent:'center',alignItems:'center',marginTop:25}}>
<text>شما مدیر سایت نیستید</text>
    </div>
    <div style={{display:admin?'flex':'none'}} className="mainadmincomment">
    { commets.map((dataa)=>
        
        <div className="admincomment">
        <div className="admincommentname">
        <text style={{marginRight:5}}>{dataa.name}</text>
        </div>
        <text className="admincommenttext">{dataa.comment}</text>
        <div style={{display:'flex'}}>
        
        <button className="admincommentdelet" onClick={()=>deletcomment(dataa._id)}>حذف</button>
        <button className="admincommentedit"  onClick={()=>check(dataa._id)}>تایید</button>
        
        </div>
        </div>
        
        
        )}
        </div>
        </div>
        )
    }
    export default Admincomments;