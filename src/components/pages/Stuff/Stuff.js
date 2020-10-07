import React, { Component,useEffect,useState,useContext } from 'react'
import axios from 'axios';
import './Stuff.css';
import Spiner from './../../spinner/spinner';
import {Link} from 'react-router-dom';
import {mainContext} from './../../../context/mainContext';
const Stuff=(props)=>{
    // const admin=localStorage.getItem('admin')
    // const admin2=JSON.parse(admin);
    const [data, setdata] = useState([])
    const {admin}=useContext(mainContext)
    // console.log(props.location.state[0],'kkkkkk')
    const [showspiner,setShowspiner]=useState(false);
    useEffect(()=>{
        setShowspiner(true)
    const  dataa=  [ props.location.state[0],props.location.state[1]]
        const data=JSON.stringify(dataa)  
        axios.get(`http://localhost:3000/allstuff/${dataa}`, { 
      
    })
    .then((response)=>{
        setShowspiner(false)
        console.log(response,'hhh')
        if(response.status==200){
            setdata(response.data)
        }else if(response.status==400){
            setShowspiner(false)
            alert('خطایی رخ داد')
        }else{
            setShowspiner(false)
            alert('خطا در ارتباط با سرور')
        }  
    }
    )
},[]);
const deletok=()=>{
    alert('حذف با موفقیت انجام شد')
    window.location.reload({forcedReload:true});
}
const deletedata=(id)=>{
    axios.delete(`http://localhost:3000/admin/course/${id}`)
    .then(res => {
        if(res.status ==200){
            deletok();
        }
    })
}

return(
    <React.Fragment>
    <div style={{display:showspiner?'flex':'none'}}>
    <Spiner/>
    </div>
    <div className="maincard">
    
    
    {data.map((dataa)=>
        <div className="flowercards">
        <Link to={{
            pathname: '/postdetails',
            state: {
                id:dataa._id
            }
        }}>
          <div className="mainstuffcard">
        <img src="https://www.beytoote.com/images/stories/housekeeping/hou16389.jpg" className="flowerImage" />
        <div style={{display:'flex',alignItems:'center',flexDirection:'column'}}>
        <text >{dataa.title}</text>
        <div className="flowerprice">
        <text style={{color:'#009432'}}>تومان</text>
        <text style={{color:'#009432'}}>{dataa.prices}</text>
        </div> 
        </div> 
        </div>
        </Link>
        <div style={{display:admin ?'flex':'none'}} className="mainfloweradmin" >
        <Link className="adminedit" to={{
            pathname: '/admin/edit/courses',
            state: {
                id:dataa._id
            }
        }}>
        ویرایش</Link>
        <button className="admindlete"  onClick={()=>deletedata(dataa._id)}> حذف</button>
        
        </div>
        
        </div>
        
        )
    }
    </div>
    </React.Fragment>
    )}
    export default Stuff;