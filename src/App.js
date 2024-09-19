import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import './App.css';
import { TbMailFilled } from "react-icons/tb";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaPinterestP, FaUser, FaHeart } from "react-icons/fa";
import { BsHandbagFill } from "react-icons/bs";
import {BrowserRouter,Form,Link, Route, Routes,} from 'react-router-dom'; import Shopgrid from './component/Shopgrid';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Index from './component';
import Blog from './component/Blog';
import ContactPage from './component/Contact';
import Shopdetails from './component/Shopdetails';
import Shopingcart from './component/Shopingcart';
import Checkout from './component/Checkout';
import Shopingblog from './component/Shopingblog';
import { Container } from 'react-bootstrap';
import Freashmeat from './component/Department/Freashmeat';
import Vegetables from './component/Department/Vegetables';
import Nuts from './component/Department/Fruitsandnuts';
import Berries from './component/Department/Berries';
import Oceanfood from './component/Department/Oceanfood';
import Butterandegg from './component/Department/Butterandegg';
import Fastfood from './component/Department/Fastfood';
import Oatmeal from './component/Department/Oatmeal';
import Loginform from './component/Loginform';
import Signup from './component/Signup';
import Adminhome from './component/AdminPage/Adminhome';
import AdminDashboard from './component/AdminPage/AdminDashboard';
import Header from './component/Header';
import Footer from './component/Footer';
// import ProductCards from './component/Meat';



function App() {
  return (
    <BrowserRouter>
    <div>

                                             {/* -------------Common header----------- */}

  

                                             {/* -------------Common header Section End----------- */}




    <Routes> 
      <Route path='/header' element={<Header/>}/>
      <Route path='/footer' element={<Footer/>}/>
      <Route path='/index' element={<Index/>}/>
      <Route path='/Shopgrid' element={<Shopgrid/>} />
      <Route path='/Blog' element={<Blog/>}/>
      <Route path='/Contact' element={<ContactPage/>}/>
      <Route path='/Shopdetails' element={<Shopdetails/>}/>
      <Route path='/Shopingcart' element={<Shopingcart/>}/>
      <Route path='/Checkout' element={<Checkout/>}/>
      <Route path='/Shopingblog' element={<Shopingblog/>}/>
      <Route path='/Freashmeat' element={<Freashmeat/>}/>
      <Route path='/Vegetables' element={<Vegetables/>}/>
      <Route path='/Fruiteandnuts' element={<Nuts/>}/>
      <Route path='/Berries' element={<Berries/>}/>
      <Route path='/Butterandegg' element={<Butterandegg/>}/>
      <Route path='/Oceanfood' element={<Oceanfood/>}/>
      <Route path='/Fastfood' element={<Fastfood/>}/>
      <Route path='/Oatmeal' element={<Oatmeal/>}/> 
      <Route path='/login' element={<Loginform/>}/>
      <Route path='/' element={<Signup/>}/>
      <Route path='/admindashboard' element={<AdminDashboard/>}/>
      <Route path='/adminhome' element={<Adminhome/>}/>
      </Routes>  
    



                                      {/*------------- Footer Section Start ---------------*/}

          

                              {/*---------------- Footer Section End ---------------*/}
    </div>
    </BrowserRouter>
  );
}

export default App;
