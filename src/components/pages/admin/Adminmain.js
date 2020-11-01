import React, { Component,useState,useEffect,useContext } from 'react'
import  './Adminmain.css';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {mainContext} from './../../../context/mainContext';
import {withRouter} from 'react-router-dom';
import Swal from 'sweetalert2';

const Adminmain=(props)=>{
  const {admin}=useContext(mainContext)
const [titels, settitels] = useState('');
const [prices, setprices] = useState('');
const [explains, setexplains] = useState('');
const [type, settype] = useState('');
const [weights, setweights] = useState('');
const [images,setimages]=useState('');
const [colors,setColors]=useState('');
const [errors,seterrors]=useState('');
const [countrys,setCountrys]=useState('');
const [garantis,setGarantis]=useState('');
const [numberinpuckets,setnumberinpuckets]=useState('');
const [memorys,setMemorys]=useState('');
const userid=localStorage.getItem('user');
const memory=(event)=>{
setMemorys(event.target.value)
}
const numberinpucket=(event)=>{
setnumberinpuckets(event.target.value)
}
const garanti=(event)=>{
setGarantis(event.target.value)
}
const country=(event)=>{
setCountrys(event.target.value)
}

  const title=(event)=>{
    settitels(event.target.value);
  }

  const price=(event)=>{
    setprices(event.target.value)
  }
  const weight=(event)=>{
setweights(event.target.value)
  }
const explain=(event)=>{
  setexplains(event.target.value)
}
const select=(event)=>{
  settype(event.target.value)
  
}
const selectfile=(event)=>{
  setimages(event.target.files[0])
// console.log(event.target.files,'ddd')
}
 const color=(event)=>{
setColors(event.target.value)
 }
const store=()=>{
  if(titels.length<1 || prices.length<1 ||explains.length<1 ){
    seterrors('لطفا همه ی فیلد هارا پر کنید')
  }else if(type.length<1){
seterrors('لطفا دسته بندی را مشخص کنید')
  }else if(images.length<1){
    seterrors('لطفا عکسی برای نمایش انتخاب کنید')
  } 
//   else{
//     const fileExe=['.png','.jpg','.jepg','.svg'];
//     const format=images.name;
//     const imagename=format.split(".");
//     const imageformat="."+imagename[1];
//  if(!fileExe.includes(imageformat)){
//       seterrors("فایل انتخابی تصویر نمی باشد")
//       }
  else{
    seterrors('')

  const Images = new FormData();
    Images.append('file',images);
   
    Images.append('title',titels);
    Images.append('prices',prices);
    Images.append('explains',explains);
    Images.append('type',type);
    Images.append('weight',weights);
    Images.append('color',colors);
    Images.append('country',countrys);
    Images.append('garantis',garantis);
    Images.append('numberinpuckets',numberinpuckets);
    Images.append('memorys',memorys);
    Images.append('user',userid);
    axios.post('http://localhost:3000/admin/course/create',Images, { 
  
    }).then((response)=>{
      // const data = await response.json();
      // const status=await response.status;
      if(response.status==200){
        Swal.fire({
          title: response.data.message,
          icon: 'success',
          confirmButtonText: 'متوجه شدم',
        })
        
        // seterrors(response.data.message)
      }else{
        seterrors('خطایی رخ داد')
      }
     
    
    })
  }

// }
}
 const sendmessage=()=>{
  axios.post('http://localhost:3000/auth/sendmessage', { 
  })
  .then((response)=>{
 
  })
 }
     return(
      <div>
        <div style={{display:admin?'none':'flex',justifyContent:'center',alignItems:'center',marginTop:25}}>
<text>شما مدیر سایت نیستید</text>
        </div>
        
      <div style={{display:admin?'flex':'none'}} className="mainpanel">
     
       
 <div  class="vertical-menu">
        <Link to="/admin/courses" class="active">دوره ها</Link>
        <Link to="/admin/Admincomments" class="active">نظرات</Link>
        
        <Link to="/admin/Orders" class="active">سفارش ها</Link>
        <Link to="/admin/mycourse" class="active">پست های من</Link>
        <Link to="/AdminQuestion" class="active">پرسش ها</Link>

        
      
      </div> 
 
      {/* <form className="createpost"  action="http://localhost:3000/admin/course/create" method="POST" enctype="multipart/form-data"> */}
      <div  className="createpost">

  
       <h1>ایجاد پست جدید</h1>
       <div className="error" style={{display:errors.length<1?'none':'flex'}}>
       <text > {errors}</text>
       </div>
     
       <button onClick={()=>sendmessage()}>oooo</button>
       <input type="text" placeholder="عنوان پست " className="inputs" onChange={title}/>
       <input type="text" placeholder="قیمت" className="inputs" onChange={price} name="price"  />
       <input type="text" placeholder="وزن به گرم" className="inputs" onChange={weight} />
       <input type="text" placeholder="رنگ" className="inputs" onChange={color} />
       <input type="text" placeholder="کشور سازنده" className="inputs" onChange={country} />
       <input type="text" placeholder="گارانتی(به ماه)" className="inputs" onChange={garanti} />
       <input type="text" placeholder="تعداد در بسته" className="inputs" onChange={numberinpucket} />
       <input type="text" placeholder="حافظه داخلی" className="inputs" onChange={memory} />
       <textarea  type="text" placeholder="توضیحات "  className="inputs" onChange={explain} name="explain" >


       </textarea>
       <div  className="inputselect">
       
       <select onChange={select} className="selectbox">
       <option value="none" selected disabled hidden> 
          Select an Option 
      </option> 
    <option value="گل">گل</option>
    <option value="گوشی">گوشی</option>
    <option value="">BMW</option>
  </select>
 
  
       </div>
   <div className="fileupload" >
    <text className="filetext" >آپلود</text>
  <input   type="file" name="file" className="fileinput" multiple="multiple"  onChange={selectfile} />
  </div>
       <button style={{marginTop:5}} onClick={store}>
         ثبت اطلاعات
       </button>
       {/* </form> */}
       </div>
      
      
      </div>
      </div>
    )
}
export default withRouter(Adminmain);