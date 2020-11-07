import React, { Component,useState } from 'react'
import './Createcomment.css'
import Swal from 'sweetalert2'
import axios from 'axios';
import Spiner from './../../spinner/spinner';
import api from '../../../htpp/api';
const CreateComment=(props)=>{
    const [name, setname] = useState('')
    const [comment, setcomment] = useState('')
    const[error,seterror]=useState('')
    const [showspiner,setShowspiner]=useState(false);
    const dataa=props.location.state;
    const changename=(event)=>{
        setname(event.target.value)
    }
    const changecomment=(event)=>{
        setcomment(event.target.value)
    }
    const createcomment=()=>{
        if(name.length<1 || comment.length<1){
            seterror('پرکردن همه ی فیلد ها اجباریست')
            
        }else{
            setShowspiner(true)
            seterror('')
            const   data=JSON.stringify({
                name:name,
                comment:comment,
                course:props.location.state._id
            })
            
            axios.post(`${api.api}/createcomment`,data, { 
            
        }).then((response)=>{
            setShowspiner(true)
            if(response.status==200) {
                Swal.fire({
                    title: 'نظرشما با موفقیت ثبت شد',
                    icon: 'sucses',
                    confirmButtonText: 'متوجه شدم',
                })
                setShowspiner(false)
                props.history.push({
                    pathname: '/postdetails',
                    state:dataa
                })
            }else if(response.status==400){
                Swal.fire({
                    title: 'خطا در ثبت نظر',
                    icon: 'warning',
                    confirmButtonText: 'متوجه شدم',
                })
                setShowspiner(false)
            }else if(response.status==500){
                Swal.fire({
                    title: 'خطا در ارتباط با سرور',
                    icon: 'warning',
                    confirmButtonText: 'متوجه شدم',
                })
            }
            console.log(response.data)
        })
    }}
    return(
        <div className="maincomment">
        <div className="headercomment">
        <text style={{marginRight:10}} >ثبت نظر کاربران</text>
        </div>
        <div style={{display:error.length>0?'flex':'none'}} className="errorcreatecomment">
        <text  >{error}</text>
        </div>
        <input className="createcommentinput" placeholder="نام خود را وارد کنید" onChange={changename} />
        <textarea placeholder="دیدگاه خود را بنویسید" className="createcommenttextarea" onChange={changecomment} />
        <div style={{display:showspiner?'flex':'none'}}>
        <Spiner/>
        </div>
        <button className="createcommentbutton" onClick={createcomment}>ثبت نظر</button>
        </div>
        )
    }
    export default CreateComment;