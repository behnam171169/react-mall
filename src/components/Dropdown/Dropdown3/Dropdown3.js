import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Dropdown3.css';
const Dropdown3=()=>{
const licellphon={
    width:'100%'
}
const styletext={
    textDecoration:'none',
    color:'#ffffff'
}
const Nokiaa=(e)=>{

    e.preventDefault();
}
    return(
      <div style={{direction:"rtl"}}>
      <div class="primary_menu">
      <ul id="menu-primary-menu" class="menu">
        <li id="menu-item-8" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-6 current_page_item menu-item-8"><a href="#">صفحه اصلی</a></li>
        <li id="menu-item-29" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-29"><a href="#" style={{fontSize:12}}> لوازم برقی خانگی</a>
          <ul class="sub-menu">
            <li id="menu-item-32" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-32"><a href="#">یخچال</a></li>
            <li id="menu-item-31" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-31"><a href="#">ماشین لباسشویی</a></li>
            <li id="menu-item-30" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-30"><a href="#">Marketing</a>
              <ul class="sub-menu">
                <li id="menu-item-13" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-13"><a href="#">Marketing facts</a></li>
                <li id="menu-item-14" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-14"><a href="#">SEO</a></li>
                <li id="menu-item-34" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-34"><a href="#">SEA</a></li>
              </ul>
            </li>
          </ul>
        </li>
        <li   id="menu-item-33" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-33"><a href="#">About</a></li>
        <li id="menu-item-28" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-28"><a href="#">Contact</a></li>
        <li id="menu-item-33" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-33"><a href="#">About</a></li>
        <li id="menu-item-30" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-30"><a href="#">Marketing</a>
              <ul class="sub-menu">
                <li id="menu-item-13" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-13"><a href="#">Marketing facts</a></li>
                <li id="menu-item-14" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-14"><a href="#">SEO</a></li>
                <li id="menu-item-30" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-30"><a href="#">Marketing</a>
              <ul class="sub-menu">
                <li id="menu-item-13" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-13"><a href="#">Marketing facts</a></li>
                <li id="menu-item-14" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-14"><a href="#">SEO</a></li>
                <li id="menu-item-34" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-34"><a href="#">SEA</a></li>
              </ul>
            </li>
              </ul>
            </li>
      </ul>
    </div>
    </div>
    )
}
export default Dropdown3;
  