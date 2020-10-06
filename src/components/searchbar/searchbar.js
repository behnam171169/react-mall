import React, { Component ,useState,useEffect} from 'react';
import { IconContext } from "react-icons";
import { GoSearch  } from "react-icons/go";
import './searchbar.css';
const Searchbar=()=>{
    const[opacittytext,Setopacittytext]=useState(0.5)
   const[textcolor,Settextcolor]=useState('#27ae60')
  
    useEffect(() => {
      let interval = setInterval(() => {
            if(opacittytext==0.5){
                Setopacittytext(1)
                Settextcolor('#4cd137')
               
            }else if(opacittytext==1){
                Setopacittytext(0.5)
                Settextcolor('#27ae60')
            }
          
        }, 100);
    
        return () => {
          clearInterval(interval);
        };
      });
      
    return(
<div className="mainsearch" >
 
    <div className="searchBartext">
 
    <text style={{color:textcolor}} className="textstyle">Beh Kala</text>
    </div>

     

<div className="search">
  <div className="maininputicon">
<input style={{backgroundColor:'white',borderTopRightRadius:'0px',borderBottomRightRadius:'0px',borderRight:'none'}} type="text" className="searchinput" placeholder="جستجوی محصولات"/> 
<div className="mainiconsearch">
  <div className="iconsearch">
<IconContext.Provider

      value={{ color: '#F79F1F', size: '30px'}}>
 <GoSearch /> 
    </IconContext.Provider>
    </div>
    </div>
    </div>
    </div>



   
   
 
     </div>
    )
}
 export default Searchbar;