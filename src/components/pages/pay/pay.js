import React, { Component,useEffect,useContext,useState } from 'react'
import './pay.css';
import {mainContext} from './../../../context/mainContext';
import axios from 'axios';
const Pay=(props)=>{
    const {userid}=useContext(mainContext)
    const {customertowns,customercity,showtown,towns,showcity,citys,show}=useContext(mainContext)
    const id=localStorage.getItem('user')
    const[name,setName]=useState('');
    const[lastname,setLastname]=useState('');
    const[codemeli,setCodemeli]=useState('');
    const[codeposti,setCodeposti]=useState('');
    const[number,setNumber]=useState('');
    const[addres,setAddres]=useState('');
    const[sumprices,setsumprices]=useState('');
    const[errors, seterrors] = useState('');
    const payment=()=>{
        const  dataa={
            id:id,
            name:name,
            price:sumprices,
            number:number,
            }
           const data=JSON.stringify(dataa);
            axios.post('http://localhost:3000/payment',data, { 
            }).then((response)=>{
             
              console.log(response.status,'xxxxx')
                // console.log(response.data.message.Authority,'hhh')
                // localStorage.setItem('zarinpalAuthority',response.data.message.Authority)
                if(response.status==200){
                    window.location =`https://www.zarinpal.com/pg/StartPay/${response.data.message.Authority}`;
                
                 }

            })
    }

    useEffect(()=>{
        axios.get(`http://localhost:3000/user/buys/${id}`, { 
        })
        .then((response)=>{
            console.log(response.data,'jhjhgfdd')
            // setbuydata(response.data)
            // let allprices=0;
            // response.data.map((data)=>{
            //   allprices += Number(data.prices)*data.Count; 
            // })
setsumprices(response.data.allprices)
        })
    },[]);

    useEffect(()=>{
        const dataa={
            id:userid
        }
    const data=JSON.stringify(dataa);
    axios.get(`http://localhost:3000/getreciverdetails/${id}`,{ 
             }).then((response)=>{
console.log(response.data[0],'jj')
if(response.status==200){
    setName(response.data[0].name)
    setLastname(response.data[0].lastname)
    setCodemeli(response.data[0].codemeli)
    setCodeposti(response.data[0].codeposti)
    setNumber(response.data[0].number)
    setAddres(response.data[0].addres)
    citys(response.data[0].city)
towns(response.data[0].province)
}
             })
     },[]);
    return(
        <div className="mainpay">
            <div className="paydetail">
                <div className="payheader">
                    <text>جزییات پرداخت</text>
                </div>
<div className="payreciver">
    <text>تحویل گیرنده:{name} {lastname}</text>
    <text>کد ملی :{codemeli}</text>
    <text>کد پستی :{codeposti}</text>
    <text> شماره همراه :{number}</text>
    <text>استان:{customertowns}</text>
    <text>شهر:{customercity}</text>
<div>
    <text>
 آدرس دقیق:{addres}
    </text>
</div>
    <text>مبلغ:{sumprices}</text>
<div className="mainbutton">
<button className="payeditbutton" onClick={()=>props.history.push('/EditCustomerdetail')}>ویرایش جزییات</button>
<button className="paybutton" onClick={()=>payment()}>پرداخت</button>
</div>

</div>
            </div>
        </div>
    )
}
export default Pay;