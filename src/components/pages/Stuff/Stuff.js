import React, { Component,useEffect,useState,useContext } from 'react'
import axios from 'axios';
import './Stuff.css';
import api from './../../../htpp/api';
import Spiner from './../../spinner/spinner';
import {Link} from 'react-router-dom';
import {mainContext} from './../../../context/mainContext';
import {withRouter} from 'react-router-dom';
import {Stufflistcontext} from './../../../context/stufflistcontext';
import Dropdown3 from './../../Dropdown/Dropdown3/Dropdown3'
import { IconContext } from "react-icons";
import { GoSearch  } from "react-icons/go";
const Stuff=(props)=>{
   
    const {admin}=useContext(mainContext)
    const {changesearchbar,modal}=useContext(Stufflistcontext)
    const [showspiner,setShowspiner]=useState(false);
    const [maindataa, setmaindataa] = useState([])
    
    const [data, setdata] = useState(maindataa)
    const [searchtext, setSerchtext] = useState('')

    
    const serchdata=(event)=>{
        const textData=event.target.value;
        const itemData=maindataa.filter((item)=>{
            const itemDataa=item.title;
            return itemDataa.indexOf(textData)>-1
        })
        setdata(itemData)
        setSerchtext(event.target.value)    
    }
    // const  dataa= [props.location.state[0],props.location.state[1]]
    const dataa=localStorage.getItem('stuffdata')
    useEffect(()=>{
        changesearchbar(true)
        setShowspiner(true)
   
    console.log(dataa,'zzzzzz')
         
        axios.get(`${api.api}/allstuff/${dataa}`, { 
    })
    .then((response)=>{
        setShowspiner(false)
        
        console.log(response.data,'hhh')
        if(response.status==200){
            setdata(response.data)
            setmaindataa(response.data)
        }else if(response.status==400){
            setShowspiner(false)
            alert('خطایی رخ داد')
        }else{
            setShowspiner(false)
            alert('خطا در ارتباط با سرور')
        }  
    }
    )
},[dataa]);
const deletok=()=>{
    alert('حذف با موفقیت انجام شد')
    window.location.reload({forcedReload:true});
}
const deletedata=(id)=>{
    axios.delete(`${api.api}/admin/course/${id}`)
    .then(res => {
        if(res.status ==200){
            deletok();
        }
    })
}

return(
    <React.Fragment>
    <div style={{display:showspiner?'flex':'none',marginTop:50}}>
    <Spiner/>
    </div>
    <div className="stuffmainsearch">
<div className="stuffmainsearchinput">
<div className="stufficonsearch">
<IconContext.Provider
      value={{ color: '#F79F1F', size: '30px'}}>
 <GoSearch /> 
    </IconContext.Provider>
    </div>
<input onChange={serchdata}  type="text" className="stuffsearchinput" placeholder="جستجوی محصولات"/> 
</div>
<div className="stuffsearchlogo">
<text style={{fontSize:25,color:'green'}}>به کالا</text>
</div>
    </div>

<div style={{opacity:modal?'0':'1',zIndex:1}}  className="dropdownmenu">
    <Dropdown3 /> 
    </div>

    <div className="maincard">
    
    
    {data.map((dataa)=>
        <div className="flowercards">
        <Link
        style={{textDecoration:'none'}}
        
         to={{
             
            pathname:'/postdetails',
            state:dataa
        }}
  
        >
          
        <img src={`${api.api}${dataa.images}`} className="flowerImage" />
        <div style={{display:(dataa.buyCount) >=1?'flex':'none',alignItems:'center',flexDirection:'column'}}>
        <text >{dataa.title}</text>
        <div className="flowerprice">
        <text style={{color:'#009432'}}>تومان</text>
        <text style={{color:'#009432'}}>{dataa.prices}</text>
        </div> 
        </div> 
        <div style={{display:(dataa.buyCount)==0?'flex':'none',
        alignItems:'center',flexDirection:'column',marginTop:5,marginBottom:10}}>
            <text>در انبار موجود نیست</text>
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
    export default withRouter(Stuff) ;