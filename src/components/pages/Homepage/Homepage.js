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
import './Homepage.css';
const HomePage=()=>{
    const {login,username,admin}=useContext(mainContext)
    const {modal,changemodal}=useContext(Stufflistcontext)
    const [showspiner,setShowspiner]=useState(false);
    const [data, setdata] = useState([])
    const[opacittytext,Setopacittytext]=useState(0.5)
    const[textcolor,Settextcolor]=useState('#27ae60')
    // useEffect(() => {
    //     let interval = setInterval(() => {
    //         if(opacittytext==0.5){
    //             Setopacittytext(1)
    //             Settextcolor('#4cd137')
                
    //         }else if(opacittytext==1){
    //             Setopacittytext(0.5)
    //             Settextcolor('#27ae60')
    //         }
            
    //     }, 100);
        
    //     return () => {
    //         clearInterval(interval);
    //     };
    // });
    useEffect(()=>{
        axios.get('http://localhost:3000/all', { 
        
    }) .then((response)=>{
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
})
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
<input   type="text" className="searchinput" placeholder="جستجوی محصولات"/> 
</div>
<div className="searchlogo">
<text style={{fontSize:25,color:'green'}}>به کالا</text>
</div>
    </div>
    <div style={{opacity:modal?'0':'1',zIndex:1}}  className="dropdownmenu">
    <Dropdown3 /> 
    </div>
    <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
    
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
    
    
    </div>
    
    )
}
</div>

</div>
)
}
export default HomePage;