import React, { Component,useContext } from 'react'
import './Flowerlist.css';
import {Stufflistcontext} from './../../../../context/stufflistcontext'
import {withRouter} from 'react-router-dom';
const Flowerlist=(props)=>{
    const {stufflist,changedrawer}=useContext(Stufflistcontext)
    
    const selectstuff=(x)=>{
        changedrawer()
        props.history.push({
            pathname:`/Stuff/${x[0]}`,
            // state:x
        })
        localStorage.setItem('stuffdata',x)
    }
    return(
        <div >
        {stufflist.map((data)=>
            <button  onClick={()=>selectstuff(data)} className="menulistbutton">
            <text>{data[0]}</text>
            </button>
            )
        } 
        </div> 
        )
    }
    export default withRouter(Flowerlist);