import React,{useEffect,useState,useContext} from 'react';
import {BrowserRouter,Route,Redirect,Switch} from 'react-router-dom';
import {Link} from 'react-router-dom';
import Toolbar from '../src/components/Toolbar/Toolbar';
import  Adminmain from './components/pages/admin/Adminmain';
import Dropdown3 from './components/Dropdown/Dropdown3/Dropdown3';
import Slideshow from '../src/components/slideshow/slideshow';
import HomePage from './components/pages/Homepage/Homepage';
import Nokia from './components/pages/cellphone/nokia';
import HTC from './components/pages/cellphone/HTC';
import  Cellphone from './components/pages/cellphone/cellphone';
import  Computer from './components/pages/computer/computer';
import Register from './components/pages/register/register';
import Login from './components/pages/login/login';
import Courses from './components/pages/admin/courses/courses';
 import resetpassword from './components/pages/resetpassword/resetpassword';
 import Changepassword from './components/pages/changepassword/changepassword';
 import Editcourse from './components/pages/admin/editcourse/editcourse';
 import  MainContextProvider from  './context/mainContext';
 import TownscontextProvider from './context/townscontext';
 import StufflistcontextProvider from './context/stufflistcontext';
 import Stuff from './components/pages/Stuff/Stuff';
   import Postdetails from './components/pages/postdetails/postdetails';
  import  CreateComment from './components/pages/comments/CreateComments';
  import Admincomments from './components/pages/admin/comments/admincomments';
  import Buys from './components/pages/buys/buys';
   import  Customerdetail from './components/pages/customerdetail/customerdetail';
   import Pay from './components/pages/pay/pay';
   import EditCustomerdetail from './components/pages/customerdetail/editcustomerdetail';
   import Customerpage from './components/pages/customerpage/customerpage';
   import Customerbuys from './components/pages/buys/customerbuys';
   import Editprofile from './components/pages/editprofile/editprofile';
   import Orders from './components/pages/orders/orders';
   import Orderdetail from './components/pages/orders/orderdetail/orderdetail';
   import Codetaeed from './components/pages/register/codetaeed/codetaeed';
   import Mycourses from './components/pages/admin/mycourse/mycourse';
   import Question from './components/pages/Question/Question';
   import AdminQuestion from './components/pages/admin/question/question';
   import './App.css';
   import {mainContext} from './context/mainContext';
   import {Stufflistcontext} from './context/stufflistcontext';
function App() {
  const zarinpalAuthority=  localStorage.getItem('zarinpalAuthority') 
  const {modal,changemodal}=useContext(Stufflistcontext)
  return (
    <BrowserRouter >
     <TownscontextProvider>
    <MainContextProvider>
  
<div className="App">
    <Toolbar/>

{/* <div style={{opacity:modal?'0':'1',zIndex:1}} className="dropdownmenu">
    <Dropdown3 /> 
    </div> */}

 {/* <div  class="vertical-menu">
        <Link to="/admin/courses" class="active">دوره ها</Link>
        <Link to="/admin/Admincomments">نظرات</Link>
        
        <Link to="/admin/Orders" class="active">سفارش ها</Link>
        
      
      </div>  */}
     
    <div>
      <Route path="/" exact component={HomePage} />
      <Route path="/Computer" exact component={Computer} />
      <Route path="/Nokia" exact component={Nokia} />
      <Route path="/HTC" exact component={HTC} />
      <Route path="/Cellphone" exact component={Cellphone} />
      <Route path="/register" exact component={Register} />
      <Route path="/Login" exact component={Login} />
      <Route path="/reset" exact component={resetpassword} />
      <Route path="/Changepassword/:token" exact component={Changepassword} />
      <Route path="/admin" exact component={Adminmain} />
      <Route path="/admin/courses" exact component={Courses} />
      <Route path="/admin/edit/courses" exact component={Editcourse} />
      <Route path="/Stuff/:id" exact component={Stuff} />
      <Route path="/postdetails" exact component={Postdetails} />
      <Route path="/createcomment" exact component={CreateComment} />
      <Route path="/admin/Admincomments" exact component={Admincomments} />
      <Route path="/user/buys" exact component={Buys} />
      <Route path="/customerdetail" exact component={Customerdetail} />
      <Route path="/Pay" exact component={Pay} />
      <Route path="/EditCustomerdetail" exact component={EditCustomerdetail} />
      <Route path="/Customerpage" exact component={Customerpage} />
      <Route path="/Customerbuys" exact component={Customerbuys} />
      <Route path="/editprofile" exact component={Editprofile} />
      <Route path="/admin/Orders" exact component={Orders} />
      <Route path="/admin/Orderdetail" exact component={Orderdetail} />
      <Route path="/register/Codetaeed" exact component={Codetaeed} />
      <Route path="/admin/mycourse" exact component={Mycourses} />
      <Route path="/Question" exact component={Question} />

      <Route path="/AdminQuestion" exact component={AdminQuestion} />
    <Route path="/https://www.zarinpal.com/pg/StartPay" exact component={() => <Redirect to="https://www.zarinpal.com/pg/StartPay/" />}  />
    </div>
    </div>
    
    </MainContextProvider>
    </TownscontextProvider>
    </BrowserRouter>
  );
}

export default App;
