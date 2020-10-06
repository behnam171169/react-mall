import React, { Component,useState,useContext,useEffect } from 'react'
import  './editcourse.css';
import axios from 'axios';

const Editcourse=(props)=>{
  useEffect(() => {
    const {id} = props.location.state;
    setid(id)
    axios.get(`http://localhost:3000/detail/${id}`, { 
    })
    .then((response)=>{
      console.log(response,'popo')
   settitels(response.data[0].title)
    setprices(response.data[0].prices)
    setexplains(response.data[0].explains)
    settype(response.data[0].types)
    setimages(response.data[0].images)
    setMemorys(response.data[0].memorys)
    setweights(response.data[0].weight)
    setnumberinpuckets(response.data[0].numberinpuckets)
    setGarantis(response.data[0].garantis)
    setCountrys(response.data[0].country)
    setColors(response.data[0].color)
    }
 
    )
  },[])
  const [editdata,setEditdata]=useState('');
const [titels, settitels] = useState('');
const [prices, setprices] = useState('');
const [explains, setexplains] = useState(editdata.explains);
const [type, settype] = useState(editdata.types);
const [images,setimages]=useState(editdata.images);
const [colors,setColors]=useState('');
const [errors,seterrors]=useState('');
const [countrys,setCountrys]=useState('');
const [garantis,setGarantis]=useState('');
const [numberinpuckets,setnumberinpuckets]=useState('');
const [memorys,setMemorys]=useState('');
const [weights, setweights] = useState('');
const [id,setid]=useState('');


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
  const weight=(event)=>{
    setweights(event.target.value)
      }
  const title=(event)=>{
    settitels(event.target.value);
  }
  const color=(event)=>{
    setColors(event.target.value)
     }
  const price=(event)=>{
    setprices(event.target.value)
  }
const explain=(event)=>{
  setexplains(event.target.value)
}
const select=(event)=>{
  settype(event.target.value)
}
const selectfile=(event)=>{
  setimages(event.target.files[0])
}
const  gocourse=()=>{
  props.history.goBack()
  // props.history.push('/admin/courses')
}
const store=(props)=>{
const dataa={
  title:titels,
 explain:explains,
 type:type,
 images:images,
 prices:prices,
 color:colors,
 weight:weights,
 country:countrys,
 garantis:garantis,
 numberinpuckets:numberinpuckets,
 memorys:memorys
}
const data=JSON.stringify(dataa)
    axios.put(`http://localhost:3000/admin/course/edit/${id}`,data).then((response)=>{ 
      if(response.status ==200){
        gocourse()
 seterrors('')
      }else{
        seterrors('خطایی رخ داد')
      }
   
    })

}
    return(
      <div className="maineditpanel">
     
        {/* <div class="vertical-menu">
        <a href="#" class="active">دوره ها</a>
        <a href="#">دوره ها</a>
        <a href="#">دوره ها</a>
        <a href="#">دوره ها</a>
        <a href="#">دوره ها</a>
        <a href="#">دوره ها</a>
        <a href="#">دوره ها</a>
      </div> */}
 
      {/* <form className="createpost"  action="http://localhost:3000/admin/course/create" method="POST" enctype="multipart/form-data"> */}
      <div  className="editpost">

    <text>{prices}</text>
       <h1>ویرایش پست</h1>
       <div className="error" style={{display:errors.length<1?'none':'flex'}}>
  
       </div>
       {/* <text > {editdata}</text> */}
    <text>{prices}</text>
       <input defaultValue={titels} type="text" placeholder="عنوان پست را وارد کنید" className="inputs" onChange={title}/>
       <input defaultValue={prices} type="text" placeholder="قیمت را وارد کنید" className="inputs" onChange={price} name="price"  />
       <textarea  defaultValue={explains} type="text" placeholder="توضیحات "  className="inputs" onChange={explain} name="explain" >

       </textarea>
       <input type="text" defaultValue={weights} placeholder="وزن به گرم" className="inputs" onChange={weight} />
       <input type="text" defaultValue={colors}  placeholder="رنگ" className="inputs" onChange={color} />
       <input type="text"  defaultValue={countrys}  placeholder="کشور سازنده" className="inputs" onChange={country} />
       <input type="text" defaultValue={garantis}  placeholder="گارانتی(به ماه)" className="inputs" onChange={garanti} />
       <input type="text" defaultValue={numberinpuckets}  placeholder="تعداد در بسته" className="inputs" onChange={numberinpucket} />
       <input type="text" defaultValue={memorys}  placeholder="حافظه داخلی" className="inputs" onChange={memory} />
       <div  className="editinputselect">
       
       <select onChange={select} className="editselectbox">
       <option value="none" selected disabled hidden> 
         {type}
      </option> 
<option value="گل">گل</option>
    <option value="گوشی">گوشی</option>
    <option value="2">BMW</option>
  </select>
  <div className="fileedit" >
    <text className="filetextedit" >آپلود</text>
  <input   type="file" name="file" className="fileinput" multiple="multiple"  onChange={selectfile} />
  </div>
  
       </div>
 <img  src={'images'} className="images"/> 
       <button onClick={store}>
         ثبت اطلاعات
       </button>
       {/* </form> */}
       </div>
      
      
      </div>
    )
}
export default Editcourse;