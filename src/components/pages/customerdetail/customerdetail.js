
import React, { Component ,useState,useContext,useEffect} from 'react';
import './customerdetail.css';
import axios from 'axios';
import {mainContext} from './../../../context/mainContext';
import {Townscontext} from './../../../context/townscontext';
import { IconContext } from "react-icons";
import { FaCaretUp,FaSortDown } from "react-icons/fa";
import Towns from './../../pages/towns/towns';
import City from './../citys/city';
import Swal from 'sweetalert2'
import MapboxLanguage from '@mapbox/mapbox-gl-language';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import MapContainer from '../map/map';
// import Map2 from '../map/map2';
var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
const Customerdetail=(props)=>{
  // const {userid}=useContext(mainContext)
  const userid=localStorage.getItem('user')
  const[lngLat,setLngLat]=useState([]);
  const[name,setName]=useState('');
  const[lastname,setLastname]=useState('');
  const[codemeli,setCodemeli]=useState('');
  const[codeposti,setCodeposti]=useState('');
  const[phonenumber,setphonenumber]=useState('');
  const {Showlistcity,customertowns,customercity,showtown,towns,showcity,citys,coordinate,provins,Townslistshow}=useContext(Townscontext)
  // const[province,setprovince]=useState('');
  // const[city,setcity]=useState('');
  console.log(customertowns,'888')
  const[addres,setaddres]=useState('');
  const[errors, seterrors] = useState('');

  // console.log(userid,'kkk')
  useEffect(()=>{
    
    axios.get(`http://localhost:3000/checkreciverdetails/${userid}`, { 
  })
  .then((response)=>{
    if(response.status==200){
      props.history.push('/Pay')
    }
  })
},[])
const townshow=()=>{
  Townslistshow()
}
// useEffect(()=>{
// mapboxgl.accessToken = 'pk.eyJ1IjoiYmVobmFtMTciLCJhIjoiY2ticzRoNWNjMDAyZTJ5bDU5OWpiZ3B3diJ9.BDs34GTjlq6M3trXe40xvQ';
// var coordinates = document.getElementById('coordinates');
// var map = new mapboxgl.Map({
//   container: 'map',
//   style: 'mapbox://styles/behnam17/ckg2huq8f0qhm1apg9ar41mwi', // stylesheet location
//   center: [51, 35], // starting position [lng, lat]
//   zoom: 9 // starting zoom
// });
//    mapboxgl.setRTLTextPlugin('https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.1.0/mapbox-gl-rtl-text.js');
//   var mapboxLanguage = new MapboxLanguage({
//   defaultLanguage: 'en'
// });

// map.addControl(mapboxLanguage);
// mapboxgl.setRTLTextPlugin('https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.1.0/mapbox-gl-rtl-text.js');
// map.addControl(new MapboxLanguage({
//   defaultLanguage: 'ar'
// }));

// map.addControl(new MapboxGeocoder({       accessToken: mapboxgl.accessToken   })); 
// map.addControl(
//   new mapboxgl.GeolocateControl({
//     positionOptions: {
//       enableHighAccuracy: true
//     },
//     trackUserLocation: true
//   })
//   ); 
//   var marker = new mapboxgl.Marker({
//     draggable: true
//   })
//   .setLngLat([46.55308235230018, 55.665957])
//   .addTo(map); 
//   map.on('click', function(e){
//     console.log(e)
//     var lng=JSON.stringify(e.lngLat.wrap());
//     setLngLat(lng)
//     var _lat = e.lngLat.lat;
//     var _lng = e.lngLat.lng;
//     marker.setLngLat([_lng, _lat]);
//   })
// },[]) 


const [drop,setdrop]=useState('Dropdown');
// const[showtown,setshowtown]=useState(false);
const nametown=(text)=>{
  
  towns(text)
}
const namecity=(text)=>{
  citys(text)
}
const showlistcity=()=>{
  Showlistcity()
}
const sabt=()=>{
  if(name.length<1 || lastname.length<1 || codemeli.length<1 
    ||codeposti.length<1 || phonenumber.length<1 || addres.length<1){
      seterrors('پرکردن همه فیلدها اجباریست')
      Swal.fire({
        title: 'پرکردن همه فیلدها اجباریست',
        icon: 'warning',
        confirmButtonText: 'ok',
      })
    }
    else if( customertowns==='استان'){
      Swal.fire({
        title: 'استان محل خود را انتخاب کنید',
        icon: 'warning',
        confirmButtonText: 'ok',
      })
    }
    else if(customercity==='شهر' ){
      Swal.fire({
        title: 'شهر محل خود را انتخاب کنید ',
        icon: 'warning',
        confirmButtonText: 'ok',
      })
    }
    else if(coordinate.length<1){
      Swal.fire({
        title: 'موقعیت مکانی خود را مشخص کنید',
        icon: 'warning',
        confirmButtonText: 'ok',
      })
    }else{
      const dataa={
        addres:addres,
        user:userid,
        name:name,
        lastname:lastname,
        codemeli:codemeli,
        codeposti:codeposti,
        number:phonenumber,
        province:customertowns,
        city:customercity,
        location:coordinate,
      }
      const data=JSON.stringify(dataa);
      axios.post('http://localhost:3000/reciverdetails',data, { 
    }).then((response)=>{
      if(response.status==200){
        props.history.push('/Pay')
      }
    })
  }
}


return(
  <div className='maincustomerdetail'>
  <div className="customerdetail">
  <div className="mainCustomerdetail1input">
  <text >نام:</text>
  <input onChange={(event)=>setName(event.target.value)} placeholder="نام" className="Customerdetailinput"/>
  </div>
  <div className="mainCustomerdetail1input">
  <text>نام خانوادگی:</text>
  <input onChange={(event)=>setName(event.target.value)} placeholder="نام" className="Customerdetailinput"/>
  </div>
  </div>
  <div className="customerdetail">
  <div className="mainCustomerdetail1input">
  <text>کدملی:</text>
  <input type="number" onChange={(e)=>setCodemeli(e.target.value)} placeholder="کدملی" className="Customerdetailinput"/>
  </div>
  <div className="mainCustomerdetail1input">
  <text>کدپستی:</text>
  <input  type="number"    onChange={(e)=>setCodeposti(e.target.value)}  placeholder="کدپستی" className="Customerdetailinput" />
  </div>
  </div>
  
  <div className="customerdetail">
  <div className="mainCustomerdetail1input">

  <text>استان</text>
  <button  className="hometownselectbox" onClick={townshow}>
  <text>{customertowns}</text>
  <div style={{display:showtown ?'none':'flex'}}>
  <IconContext.Provider
  value={{ color: 'black', size: '25px'}}>
  <FaSortDown  /> 
  </IconContext.Provider>
  </div>
  <div style={{display:showtown ?'flex':'none'}}>
  <IconContext.Provider
  value={{ color: 'black', size: '25px'}}>
  <FaCaretUp  /> 
  </IconContext.Provider>
  </div>
  <div style={{display:showtown ? 'flex':'none',position:'absolute'}} className="nametownselect">
<Towns/>
  </div>
  </button>
  
  </div>
  <div className="mainCustomerdetail1input">
  <text>شهر</text>
  <button className="hometownselectbox" onClick={showlistcity}>
  <text>{customercity}</text>
  <div style={{display:showcity ?'none':'flex'}}>
  <IconContext.Provider
  value={{ color: 'black', size: '25px'}}>
  <FaSortDown  /> 
  </IconContext.Provider>
  </div>
  <div style={{display:showcity ?'flex':'none'}}>
  <IconContext.Provider
  value={{ color: 'black', size: '25px'}}>
  <FaCaretUp  /> 
  </IconContext.Provider>
  </div>
  <div  style={{display:showcity ? 'flex':'none',position:'absolute'}} className="nametownselect">
  <City />
  </div>
  </button> 
  
  </div>
  
  </div>
  <div className="customerdetail">
  <div className="mainCustomerdetail1input">
  <text>شماره همراه تحویل گیرنده:</text>
  <input  type="number" onChange={(e)=>setphonenumber(e.target.value)} placeholder="شماره همراه" className="Customerdetailinput"/>
  </div>
  <div className="mainCustomerdetail1input">
  <text>آدرس محل تحویل کالا</text>
  <input type="text"  onChange={(e)=>setaddres(e.target.value)} placeholder="آدرس دقیق محل تحویل کالا" className="Customerdetailinput" />
  </div>
  </div>
  <div className="customerdetail">
    {/* <Map2 /> */}
  <MapContainer/>
  </div>
  <div className="customerdetail">
  <button  className="continubuy"  onClick={()=>sabt()}>ادامه فرایند خرید</button>
  </div>
  
  </div>
  )
}

export default Customerdetail;



