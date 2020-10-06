
import React, { Component ,useState,useContext,useEffect} from 'react';
import './customerdetail.css';
import axios from 'axios';
import {mainContext} from './../../../context/mainContext';
import { IconContext } from "react-icons";
import { FaCaretUp,FaSortDown } from "react-icons/fa";
import Towns from './../../pages/towns/towns';
import City from './../citys/city';
import Swal from 'sweetalert2'
import MapboxLanguage from '@mapbox/mapbox-gl-language';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
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
  // const[province,setprovince]=useState('');
  // const[city,setcity]=useState('');
  const[addres,setaddres]=useState('')
  
  const[errors, seterrors] = useState('');
  
  console.log(userid,'kjkj')
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
useEffect(()=>{
  mapboxgl.accessToken = 'pk.eyJ1IjoiYmVobmFtMTciLCJhIjoiY2ticzRoNWNjMDAyZTJ5bDU5OWpiZ3B3diJ9.BDs34GTjlq6M3trXe40xvQ';
  var coordinates = document.getElementById('coordinates');
  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
    center: [-74.5, 40], // starting position [lng, lat]
    zoom: 9 // starting zoom
  });
  mapboxgl.setRTLTextPlugin('https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.1.0/mapbox-gl-rtl-text.js');
  map.addControl(new MapboxLanguage({
    defaultLanguage: 'ar'
  }));
  map.addControl(new MapboxGeocoder({       accessToken: mapboxgl.accessToken   })); 
  map.addControl(
    new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true
      },
      trackUserLocation: true
    })
    ); 
    var marker = new mapboxgl.Marker({
      draggable: true
    })
    .setLngLat([46.55308235230018, 55.665957])
    .addTo(map); 
    map.on('click', function(e){
      console.log(e)
      var lng=JSON.stringify(e.lngLat.wrap());
      setLngLat(lng)
      var _lat = e.lngLat.lat;
      var _lng = e.lngLat.lng;
      marker.setLngLat([_lng, _lat]);
    })
  },[]) 
  const {customertowns,customercity,showtown,towns,showcity,citys}=useContext(mainContext)
  
  const [drop,setdrop]=useState('Dropdown');
  // const[showtown,setshowtown]=useState(false);
  const nametown=(text)=>{
    towns(text)
  }
  const namecity=(text)=>{
    citys(text)
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
      else if(lngLat.length<1){
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
          location:lngLat,
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
    <div className="mainCustomerdetail">
    
    <div className="Customerdetail">
    
    
    <div className="Customerdetail1">
    {/* <text>{customertowns}</text> */}
    <text>نام:</text>
    <input onChange={(event)=>setName(event.target.value)} placeholder="نام" className="Customerdetailinput"/>
    </div>
    <div className="Customerdetail1">
    <text>نام خانوادگی:</text>
    <input onChange={(e)=>setLastname(e.target.value)} placeholder="نام خانوادگی" className="Customerdetailinput" />
    </div>
    </div>
    <div  className="Customerdetailselect">
    <div   className="Customerdetail2">
    <text>استان</text>
    <button  className="hometownselectbox" onClick={()=>nametown('استان')}>
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
    </button>
    <div style={{display:showtown ? 'flex':'none',position:'absolute'}} className="nametownselect">
    <Towns />
    </div>
    </div>
    <div  className="Customerdetail2">
    <text>شهر</text>
    <button className="hometownselectbox" onClick={()=>namecity('شهر')}>
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
    </button>
    <div  style={{display:showcity ? 'flex':'none',position:'absolute'}} className="nametownselect">
    <City />
    </div>
    </div>
    </div>
    
    
    
    
    
    <div className="Customerdetail">
    <div className="Customerdetail1">
    <text>کدملی</text>
    <input type="number" onChange={(e)=>setCodemeli(e.target.value)} placeholder="کدملی" className="Customerdetailinput"/>
    </div>
    <div   className="Customerdetail1">
    <text>کدپستی:</text>
    <input  type="number"    onChange={(e)=>setCodeposti(e.target.value)}  placeholder="کدپستی" className="Customerdetailinput" />
    </div>
    </div>
    {/* <div  className="Customerdetail">
    <div className="Customerdetail1">
    <text>نام تحویل گیرنده:</text>
    <input placeholder="نام" className="Customerdetailinput"/>
    </div>
    <div className="Customerdetail1">
    <text>نام خانوادگی تحویل گیرنده</text>
    <input placeholder="نام خانوادگی" className="Customerdetailinput" />
    </div>
  </div> */}
  <div  className="Customerdetail">
  <div className="Customerdetail1">
  <text>آدرس دقیق محل تحویل کالا:</text>
  <input type="text"  onChange={(e)=>setaddres(e.target.value)} placeholder="آدرس دقیق محل تحویل کالا" className="Customerdetailinput" />
  </div>
  <div className="Customerdetail1">
  <text>شماره همراه تحویل گیرنده:</text>
  <input  type="number" onChange={(e)=>setphonenumber(e.target.value)} placeholder="شماره همراه" className="Customerdetailinput"/>
  </div>
  
  </div>
  
  <div className="mainmap">
  <div id="map">
  
  </div>
  <div className="pay">
  <text>موقیت مکانی خود را  مشخص کنید</text>
  <text><span style={{color:'red'}}>توجه:</span>موقعیت مکانی تایین شده باید با آدرس دقیق محل تحویل کالا یکی باشد </text>
  <button  onClick={()=>sabt()}>ادامه فرایند خرید</button>
  </div>
  
  </div>
  <div className="recivererror">
  <text >{errors}</text>
  </div>
  </div>
  
  )
}

export default Customerdetail;

