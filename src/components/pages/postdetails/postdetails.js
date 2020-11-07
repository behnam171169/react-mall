import React, { Component,useContext,useEffect,useState} from 'react';
import './postdetails.css'
import Swal from 'sweetalert2'
import axios from 'axios';
import {Link} from 'react-router-dom';
import { IconContext } from "react-icons";
import { MdShoppingCart} from "react-icons/md";
import { FaPlus,FaMinus } from "react-icons/fa";
import {mainContext} from './../../../context/mainContext';
import Spiner from './../../spinner/spinner';
import api from './../../../htpp/api';
const Postdetails=(props)=>{
const userid=localStorage.getItem('user');
  const {login,admin}=useContext(mainContext);
  const [postsdetail, setpostsdetail] = useState([])
  const[comments,setcomments]=useState([]);
  const [id,setid]=useState(props.location.state._id);
  console.log(id,'pppppp')
  // console.log(postsdetail.color,'gghhhhgghhh')
  const[number,setnumber]=useState(1);
  const [showspiner,setShowspiner]=useState(false);
  const data=props.location.state;

  const plusnumber=()=>{
    setnumber(number+1)
  }
  const subtractnumber=()=>{
    if(number >1)
    setnumber(number-1)
  }
  const changenumber=(event)=>{
    setnumber(event.target.value)
  }
  const logOut=()=>{
    localStorage.removeItem('admin')
  }
  const deletcomment=(id)=>{
    axios.delete(`${api.api}/admin/commentsdelete/${id}`, { 
  })
  .then((response)=>{
    if(response.status==200){
      window.location.reload({forcedReload:true});
    }
  })
}
// useEffect(() => {
  
//   setShowspiner(true)
//   axios.get(`${api.api}/detail/${id}`, { 
// })
// .then((response)=>{
//   if(response.status==200){
//     setShowspiner(false)
//     setpostsdetail(response.data[0])
//   }else if(response.status==400){
//     setShowspiner(false)
//     alert('جزییات موجود نمی باشد')
//   }else if(response.status==500){
//     setShowspiner(true)
//     alert('خطا در ارتباط با سرور')
//   }
// }

// )
// },[])

useEffect(() => {
  window.scrollTo({
    top: 0,
    behavior: "auto"
  });
setShowspiner(true)
  axios.get(`${api.api}/comments/${id}`, { 
})
.then((response)=>{
  if(response.status==200){
    setcomments(response.data)
setShowspiner(false)

  }else if(response.status==400){
    setShowspiner(false)
  }
}
)
},[])
const buy=()=>{
  if(login == false){
    Swal.fire({
      title: 'ابتدا به حساب کاربری خود وارد شوید',
      icon: 'warning',
      confirmButtonText: 'متوجه شدم',
    })
  }else{
    
    const  dataa={
      id:id,
      number:number,
      userid:userid
    }
    const data=JSON.stringify(dataa);
    axios.post(`${api.api}/buys`,data, { 
  })
  .then((response)=>{
    if(response.status==200){
      Swal.fire({
        title: 'کالای مورد نظر به سبدخرید شما اضافه شد',
        icon: 'success',
        confirmButtonText: 'متوجه شدم',
      })
      props.history.goBack();
    }
  }
  )
}}
const buyicon=
<IconContext.Provider
value={{ color: '#F79F1F', size: '25px'}}>
<MdShoppingCart  /> 
</IconContext.Provider>;

return(
  <div style={{display:'flex',flexDirection:'column'}}>
 
  <div className="mainpostdetails">
 
  <img src={`${api.api}${data.images}`} className="postdetailimage" />
  <div className="detailpost">
  <div style={{display:'flex'}}>
  <text className="maindetailtext" >   نام کالا:   </text>
  <text style={{marginLeft:5,marginRight:5}}>{data.title}</text>
  </div>
  <text style={{display:(''+data.memorys).length<1?'none':'flex'}}  className="detailtext">حافظه داخلی:<span className="detailtextspan">{data.memorys}</span></text>
  <text style={{display:(''+data.color).length<1?'none':'flex'}}  className="detailtext">رنگ:<span className="detailtextspan">{data.color}</span></text>
  <text style={{display:(''+data.weight).length<1?'none':'flex'}}  className="detailtext">وزن:<span className="detailtextspan">{data.weight}</span></text>
  <text style={{display:(''+data.country).length<1?'none':'flex'}}  className="detailtext">کشور سازنده:<span className="detailtextspan">{data.country}</span></text>
  <text style={{display:(''+data.garantis).length<1?'none':'flex'}}  className="detailtext">گارانتی:<span className="detailtextspan">{data.garantis}</span></text>
  <text style={{display:(''+data.numberinpuckets).length<1?'none':'flex'}}  className="detailtext">تعداد در بسته:<span className="detailtextspan">{data.numberinpuckets}</span></text>
  
  <text className="maindetailtext" >توضیحات:</text>
  <text>{data.explains}</text>
  </div>
  
  
  <div className="buypost">
  <text style={{color:'green',fontWeight:500}}>فروشنده: behkala</text>
  <div style={{display:'flex',marginTop:20}}>
  
  <text style={{marginBottom:40,color:'green',fontWeight:500}}> قیمت: </text>
  <text style={{marginRight:5,marginLeft:5,color:'red'}}>{data.prices}</text>
  <text style={{marginBottom:40,color:'green',fontWeight:500}}> تومان    </text>
  
  </div>
  <div style={{display:'flex',flexDirection:'column'}}>
  <div style={{display:data.buyCount>=1?'flex':'none'}} className="changenumber" >
  <text>تعداد:</text>
  
  <IconContext.Provider
  value={{ color: '#F79F1F', size: '25px'}}>
  <FaPlus  onClick={plusnumber} /> 
  </IconContext.Provider>
  <input onChange={changenumber} value={number} className="inputnumber"/>
  <IconContext.Provider
  value={{ color: '#F79F1F', size: '25px'}}>
  <FaMinus   onClick={subtractnumber}/> 
  </IconContext.Provider>
  </div>
  
  <button style={{display:data.buyCount>=1?'flex':'none'}} onClick={buy} className="buttonbuy"><text>{buyicon}</text>افزودن به سبد خرید</button>
  </div>
  </div>
  
  </div>
  <div className="maincustomertalk">
  <div className="customertalk" >
  <Link className="talkcreate"  to={{
    pathname: "/createcomment",
    state:data
  }}>ثبت نظر</Link>
  <text  className="talktext">نظرات</text>
  
  </div>
  <div style={{display:showspiner?'flex':'none',marginTop:20}}>
  <Spiner/>
  </div>
  <div className="maincomments">
  {comments.map((comment)=>
    <div className="comments">
    
    <div className="commentname">
    <text>{comment.name}</text>
    </div>
    <text className="commenttext">{comment.comment}</text>
    
    <button style={{display:admin ?'flex':'none'}} className="admincommentdelet" onClick={()=>deletcomment(comment._id)}>حذف</button>
    </div>
    )}
    
    </div>
    
    </div>
   
    </div>
    )
  }
  export default Postdetails;
  