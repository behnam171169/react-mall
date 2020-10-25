
import React, { Component,useState,useContext } from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import './map.css';
import {mainContext} from './../../../context/mainContext';
 const MapContainer=(props)=>{
  const {changecoordinate,coordinate}=useContext(mainContext)
console.log(coordinate,'8888')
const [position, setposition] = useState({lat:35.69439,lng:51.42151})
  const onMarkerClick=(a,b,c)=>{
    changecoordinate('')
  //  console.log(b.center.lat(),'ppppp')
  //  console.log(c.latLng.lng(),'yyyyy')
  // changecoordinate({lat:b.center.lat(),lng:b.center.lng()})
   setposition({lat:b.center.lat(),lng:b.center.lng()})
  }
  const setlocation=()=>{
    changecoordinate(position)
  }
  const containerStyle = {
    position: 'relative',  
    width: '100%',
    height:'100%',
    top:0
 
  };
  console.log(coordinate,'68777777')
  const style = {
    width: '50%',
    height: '50%',
  }
return (
<div className="mainmap">

  <Map
  containerStyle={containerStyle}
  // style={style}
  google={props.google} zoom={7}
  clickable={true}
  onCenterChanged={onMarkerClick}
  initialCenter={{
    lat: 35.69439,
    lng:51.42151
  }}
  streetViewControl={true}
  mapTypeControlOptions={true}
  >
     
    <Marker
title={'The marker`s title will appear as a tooltip.'}
 name={'SOMA'}
//  position={markerCenter}
position={{lat:position.lat,lng:position.lng}} 
// onDragend={moveMarker}
/>

</Map> 
<div className="setlocation">
<text className="setlocationtext" >موقعیت مکانی خود را مشخص کنید</text>
<button onClick={()=>setlocation()} className="mapbutton" >ثبت موقعیت</button>

</div>
<text>توجه:موقعیت مکانی تععین شده باید با آدرس دقیق محل تحویل کالا یکی باشد</text>

</div>
      
    );

}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyBS9JLzY5yZ44XT2a0DwBnN82mZxraiwpg'),
})(MapContainer)
