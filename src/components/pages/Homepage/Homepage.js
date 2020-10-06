import React, { Component,useEffect,useContext } from 'react'
import Login from '../login/login';
import {mainContext} from './../../../context/mainContext';
import Slideshow from '../../../components/slideshow/slideshow';
import Spiner from './../../spinner/spinner'
import './Homepage.css';
const HomePage=()=>{
    const {login,username}=useContext(mainContext)
    return(
        <div>
       
     
           
            
        <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            
             { <Slideshow /> }
       
        </div>
        </div>
    )
}
export default HomePage;