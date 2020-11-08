import React, { Component,useState} from 'react';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import './Dropdown3.css';

const Dropdown3=(props)=>{
  const [drobdown,setdrobdown] = useState(true)
 

const selectstuff=(x)=>{
  
  props.history.push({
      pathname:`/Stuff/${x[0]}`,
      // state:x
  })
  setdrobdown(!drobdown)
  localStorage.setItem('stuffdata',x)
}
const changedropdown=()=>{
  setdrobdown(true)
}
const dataclass='menu-item menu-item-type-post_type menu-item-object-page'
    return(
      <div style={{direction:"rtl"}}>
      <div class="primary_menu">
      <ul id="menu-primary-menu" class="menu">
        <li id="menu-item-8" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-6 current_page_item menu-item-8"><a href="#">صفحه اصلی</a></li>
        <li id="menu-item-29" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-29"><a onMouseEnter={changedropdown} style={{fontSize:12}}> لوازم برقی خانگی</a>
          <ul style={{display:drobdown?'block':'none'}} class="sub-menu">
            <li id="menu-item-32" class={dataclass}><Link onClick={()=>selectstuff(['یخچال','لوازم خانگی برقی'])}>یخچال</Link></li>
            <li id="menu-item-31" class={dataclass}><Link  onClick={()=>selectstuff(['ماشین لباسشویی','لوازم خانگی برقی'])}>ماشین لباسشویی</Link></li>
            <li id="menu-item-30" class={dataclass}><a href="#">Marketing</a>
              <ul class="sub-menu">
                <li id="menu-item-13" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-13"><a href="#">Marketing facts</a></li>
                <li id="menu-item-14" class={dataclass}><a href="#">SEO</a></li>
                <li id="menu-item-34" class={dataclass}><a href="#">SEA</a></li>
              </ul>
            </li>
          </ul>
        </li>
        <li   id="menu-item-33" class={dataclass}><a href="#">About</a></li>
        <li id="menu-item-28" class={dataclass}><a href="#">Contact</a></li>
        <li id="menu-item-33" class={dataclass}><a href="#">About</a></li>
        <li id="menu-item-30" class={dataclass}><a href="#">Marketing</a>
              <ul class="sub-menu">
                <li id="menu-item-13" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-13"><a href="#">Marketing facts</a></li>
                <li id="menu-item-14" class={dataclass}><a href="#">SEO</a></li>
                <li id="menu-item-30" class={dataclass}><a href="#">Marketing</a>
              <ul class="sub-menu">
                <li id="menu-item-13" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-13"><a href="#">Marketing facts</a></li>
                <li id="menu-item-14" class={dataclass}><a href="#">SEO</a></li>
                <li id="menu-item-34" class={dataclass}><a href="#">SEA</a></li>
              </ul>
            </li>
              </ul>
            </li>
      </ul>
    </div>
    </div>
    )
}
export default withRouter(Dropdown3) ;
  