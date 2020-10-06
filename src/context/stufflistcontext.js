import React, { Component,useState,useEffect } from 'react';
export const Stufflistcontext=React.createContext();
const StufflistcontextProvider=(props)=>{
  const [menu, setmenu] = useState(false);
  const [drawer, setDrawer] = useState(false);
  const [modal, setModal] = useState(false);
  const [menuname,setMenuname]=useState('');
  const [flower, setflower] = useState([['گل لاله','گل'],['گل مریم','گل']]);
  const[book,setbook]=useState(['بی ادب','زیبا','خوب','باادب'])
  const [stufflist,setStufflidt]=useState([]);
  const changestufflist=(x)=>{
    setStufflidt(x)
  }
  const changedrawer=()=>{
    setDrawer(!drawer)
    setModal(false)
    
  }
  const changemenuname=(text)=>{
    setMenuname(text)
    
  }
  const changemodal=()=>{
    setModal(!modal)
  }
  const changemenu=()=>{
    setmenu(!menu)
  }
  return(
    <Stufflistcontext.Provider value={{menu,changemenu,drawer,changedrawer,menuname,changemenuname,modal,changemodal,stufflist,changestufflist,book,flower}}>
    {props.children}
    </Stufflistcontext.Provider>
    )
  }
  export default StufflistcontextProvider;