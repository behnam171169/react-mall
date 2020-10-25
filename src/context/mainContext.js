import React, { Component,useState,useEffect } from 'react';
export const mainContext=React.createContext();
const MainContextProvider=(props)=>{
  
 const [login, setlogin] = useState(false);
 const [admin, setadmin] = useState(false);
 const[username,setusername]=useState('');
 const [userid, setuserid] = useState('');
 const [coordinate,setCordinate]=useState('')
  const token=localStorage.getItem('token');

  useEffect(()=>{

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

 const changecoordinate=(text)=>{
setCordinate(text)
 }
    return(
        <mainContext.Provider value={{login,username,admin,userid,changecoordinate,coordinate
        }}>
          {props.children}
        </mainContext.Provider>
    )
}
 

export default MainContextProvider;