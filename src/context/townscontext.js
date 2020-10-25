import React, { Component,useEffect,useState } from 'react';
export const Townscontext=React.createContext();
const TownscontextProvider=(props)=>{
  const [provins, setprovins] = useState([{town:'ایلام',city:['آسمان آباد','ایوان']},{town:'تهران',city:['االلل','yyyy']},{town:'شیراز',city:['االلل','yyyy']}])
  const [customertowns, setcustomertowns] = useState('استان');
  const [customercity, setcustomercity] = useState('شهر');
  const[showtown,setshowtown]=useState(false);
  const[showcity,setshowcity]=useState(false);

  const towns=(text)=>{
    setshowtown(!showtown)
    setcustomertowns(text)
  
    //  console.log(text,'xxxxx')
      };
    console.log(customertowns,'rrrr')
      const citys=(text)=>{
        setcustomercity(text)
        setshowcity(!showcity)
          }
        const  show=()=>{
          setshowtown(false)
          setshowcity(false)
        }
    return(
        <Townscontext.Provider value={{provins,customercity,customertowns,showtown,showcity,citys,show,towns}}>
        {props.children}
        </Townscontext.Provider>
        )
      }

export default TownscontextProvider