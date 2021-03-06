import React, { Component,useEffect,useContext,useState } from 'react'
import Login from '../login/login';
import {mainContext} from './../../../context/mainContext';
import {Stufflistcontext} from './../../../context/stufflistcontext';
import Slideshow from '../../../components/slideshow/slideshow';
import axios from 'axios';
import Spiner from './../../spinner/spinner'
import {Link} from 'react-router-dom';
import Dropdown3 from './../../Dropdown/Dropdown3/Dropdown3'
import { IconContext } from "react-icons";
import { GoSearch  } from "react-icons/go";
import api from './../../../htpp/api';
import './Homepage.css';
const HomePage=()=>{
    const {login,username,admin}=useContext(mainContext)
    const {modal,changemodal}=useContext(Stufflistcontext)
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
    useEffect(()=>{
        axios.get(`${api.api}/all`, { 
        
    }) .then((response)=>{
        setShowspiner(false)
        console.log(response.data,'hhh')
        if(response.status==200){
            setmaindataa(response.data)
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
},[])
console.log(data,'fffff')

return(
    <div>   
    
    <div className="mainsearch">
    <div className="mainsearchinput">
    <div className="iconsearch">
    <IconContext.Provider
    value={{ color: '#F79F1F', size: '30px'}}>
    <GoSearch /> 
    </IconContext.Provider>
    </div>
    <input  value={searchtext} name="searchdata" type="text"  placeholder="جستجوی محصولات"  onChange={(event)=>serchdata(event)}/> 
    </div>
    <div className="searchlogo">
    <text style={{fontSize:25,color:'green'}}>به کالا</text>
    </div>
    
    </div>
    <div style={{opacity:modal?'0':'1',zIndex:1}}  className="dropdownmenu">
    <Dropdown3 /> 
    </div>
    
    <div style={{display:searchtext.length>0?'none':'flex',justifyContent:'center',alignItems:'center'}}>
    
    { <Slideshow /> }
    
    </div>
    
    
    <div style={{display:showspiner?'flex':'none'}}>
    <Spiner/>
    </div>
    {/* <div className="searchbar"> 
    <Searchbar />
</div>  */}
<div className="maincard">


{data.map((dataa)=>
    <div className="flowercardshome">
    <Link style={{textDecoration:'none'}} to={{
        pathname: '/postdetails',
        state:dataa,
    }}>
  
    <img src={`${api.api}${dataa.images}`} className="flowerImagehome" />
    <div style={{display:'flex',alignItems:'center',flexDirection:'column'}}>
    <text >{dataa.title}</text>
    <div className="flowerprice">
    <text style={{color:'#009432'}}>تومان</text>
    <text style={{color:'#009432'}}>{dataa.prices}</text>
    </div> 
    </div> 
   
    </Link>
    
    
    </div>
    
    )
}
</div>

</div>
)
}
export default HomePage;