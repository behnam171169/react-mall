import React, { Component,useState,useEffect } from 'react';
export const Stufflistcontext=React.createContext();
const StufflistcontextProvider=(props)=>{
  const [menu, setmenu] = useState(false);
  const [drawer, setDrawer] = useState(false);
  const [modal, setModal] = useState(false);
  const [menuname,setMenuname]=useState('');
  const [flower, setflower] = useState([['گل لاله','گل'],['گل مریم','گل']]);
  const[electric,setelectric]=useState([['یخچال','لوازم خانگی برقی'],['ماشین لباسشویی','لوازم خانگی برقی']])
  const [stufflist,setStufflidt]=useState([]);
  const [searchbar,setSearchbar]=useState(true);
  const changesearchbar=(x)=>{
    setSearchbar(x)
  }
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
    <Stufflistcontext.Provider value={{menu,changemenu,drawer,changedrawer,menuname,changemenuname,modal,changemodal,stufflist,changestufflist,electric,flower,searchbar,changesearchbar}}>
    {props.children}
    </Stufflistcontext.Provider>
    )
  }
  export default StufflistcontextProvider;