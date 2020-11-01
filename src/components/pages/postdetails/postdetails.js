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
const Postdetails=(props)=>{
const userid=localStorage.getItem('user');
  const {login,admin}=useContext(mainContext);
  const [postsdetail, setpostsdetail] = useState([])
  const[comments,setcomments]=useState([]);
  const [id,setid]=useState(props.location.state.id);
  console.log(id,'pppppp')
  // console.log(postsdetail.color,'gghhhhgghhh')
  const[number,setnumber]=useState(1);
  const [showspiner,setShowspiner]=useState(false);
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
    axios.delete(`http://localhost:3000/admin/commentsdelete/${id}`, { 
  })
  .then((response)=>{
    if(response.status==200){
      window.location.reload({forcedReload:true});
    }
  })
}
useEffect(() => {
  
  setShowspiner(true)
  axios.get(`http://localhost:3000/detail/${id}`, { 
})
.then((response)=>{
  if(response.status==200){
    setShowspiner(false)
    setpostsdetail(response.data[0])
  }else if(response.status==400){
    setShowspiner(false)
    alert('جزییات موجود نمی باشد')
  }else if(response.status==500){
    setShowspiner(true)
    alert('خطا در ارتباط با سرور')
  }
}

)
},[])

useEffect(() => {
  axios.get(`http://localhost:3000/comments/${id}`, { 
})
.then((response)=>{
  if(response.status==200){
    setcomments(response.data)
    
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
    axios.post('http://localhost:3000/buys',data, { 
  })
  .then((response)=>{
    if(response.status==200){
      Swal.fire({
        title: 'کالای مورد نظر به سبدخرید شما اضافه شد',
        icon: 'success',
        confirmButtonText: 'متوجه شدم',
      })
      
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
  <img src="https://www.beytoote.com/images/stories/housekeeping/hou16389.jpg" className="postdetailimage" />
  <div className="detailpost">
  <div style={{display:'flex'}}>
  <text style={{marginBottom:40,color:'green',fontWeight:500}}>   نام کالا:   </text>
  <text style={{marginLeft:5,marginRight:5}}>{postsdetail.title}</text>
  </div>
  <text style={{display:(''+postsdetail.memorys).length<1?'none':'flex'}}   className="datadetailtext">حافظه داخلی:{postsdetail.memorys}</text>
  <text style={{display:(''+postsdetail.color).length<1?'none':'flex'}}  className="datadetailtext">رنگ:{postsdetail.color}</text>
  <text style={{display:(''+postsdetail.weight).length<1?'none':'flex'}}  className="datadetailtext">وزن:{postsdetail.weight}</text>
  <text style={{display:(''+postsdetail.country).length<1?'none':'flex'}}  className="datadetailtext">کشور سازنده:{postsdetail.country}</text>
  <text style={{display:(''+postsdetail.garantis).length<1?'none':'flex'}}  className="datadetailtext">گارانتی:{postsdetail.garantis}</text>
  <text style={{display:(''+postsdetail.numberinpuckets).length<1?'none':'flex'}}  className="datadetailtext">تعداد در بسته:{postsdetail.numberinpuckets}</text>
  
  <text style={{marginBottom:15,color:'green',fontWeight:500}}>توضیحات:</text>
  <text>{postsdetail.explains}</text>
  </div>
  
  
  <div className="buypost">
  <text style={{color:'green',fontWeight:500}}>فروشنده: behkala</text>
  <div style={{display:'flex',marginTop:20}}>
  
  <text style={{marginBottom:40,color:'green',fontWeight:500}}> قیمت: </text>
  <text style={{marginRight:5,marginLeft:5,color:'red'}}>{postsdetail.prices}</text>
  <text style={{marginBottom:40,color:'green',fontWeight:500}}> تومان    </text>
  
  </div>
  <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
  <div style={{display:props.location.state.count>=1?'flex':'none'}} className="changenumber" >
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
  
  <button style={{display:props.location.state.count>=1?'flex':'none'}} onClick={buy} className="buttonbuy"><text>{buyicon}</text>افزودن به سبد خرید</button>
  </div>
  </div>
  
  </div>
  <div className="maincustomertalk">
  <div className="customertalk" >
  <Link className="talkcreate"  to={{
    pathname: "/createcomment",
    state: {
      id:props.location.state.id
    }
  }}>ثبت نظر</Link>
  <text  className="talktext">نظرات</text>
  
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
    <div style={{display:showspiner?'flex':'none'}}>
  <Spiner/>
  </div>
    </div>
    )
  }
  export default Postdetails;
  