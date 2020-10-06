import React, { Component,useState,useEffect } from 'react';
export const mainContext=React.createContext();
const MainContextProvider=(props)=>{
  
 const [login, setlogin] = useState(false);
 const [admin, setadmin] = useState(false);
 const[username,setusername]=useState('');
 const [userid, setuserid] = useState('');
 const [customertowns, setcustomertowns] = useState('استان');
 const [customercity, setcustomercity] = useState('شهر');
 const[showtown,setshowtown]=useState(false);
 const[showcity,setshowcity]=useState(false);
  // const checkadmin=localStorage.getItem('admin');
  const token=localStorage.getItem('token');
  // const user=localStorage.getItem('user');
  // console.log(token,'ppppppp')
  useEffect(()=>{
    // settoken(localStorage.getItem('token'))
    // setadmin(checkadmin)
    // setuserid(user)
    fetch('http://localhost:3000/auth/login/token',{
      method:'POST',
      headers:{
        'Accept':'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
        'headers':token
      },
  }).then(async (response)=>{
    const data = await response.json();
    const status=await response.status;

    if(status==200){

      setlogin(true)
      setusername(data.name)
      setadmin(data.admin)

    }else if(status==400){
      setlogin(false)
      setadmin(false)
    }
 })},[])

// console.log(admin,'yyyyyy')
  const towns=(text)=>{
setcustomertowns(text)
setshowtown(!showtown)
  }
  const citys=(text)=>{
    setcustomercity(text)
    setshowcity(!showcity)
      }
    const  show=()=>{
      setshowtown(false)
      setshowcity(false)
    }
 
    return(
        <mainContext.Provider value={{login,username,admin,userid,towns,
        customertowns,showtown,customercity,showcity,citys,show
        }}>
          {props.children}
        </mainContext.Provider>
    )
}
 

export default MainContextProvider;