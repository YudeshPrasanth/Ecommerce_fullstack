import React from "react";
import { FaPhone } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { TabView, TabPanel } from 'primereact/tabview';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import {  FaRetweet } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";
import { TiStarFullOutline } from "react-icons/ti";
import { TiStarHalfOutline } from "react-icons/ti";
import Header from "./Header";
import Footer from "./Footer";
        

function Shopdetails() {

    return (
      <>
    <Header/>
        <div>
                    {/* Hero Section Begin */}
                    <section className="hero">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="hero__categories">
                                <div className="hero__categories__all">
                                <i><FaBars /></i> 
                                <span>All departments</span>
                                </div>
                                {/* <ul >
                                    <li><a href="#">Fresh Meat</a></li>
                                    <li><a href="#">Vegetables</a></li>
                                    <li><a href="#">Fruit & Nut Gifts</a></li>
                                    <li><a href="#">Fresh Berries</a></li>
                                    <li><a href="#">Ocean Foods</a></li>
                                    <li><a href="#">Butter & Eggs</a></li>
                                    <li><a href="#">Fastfood</a></li>
                                    <li><a href="#">Fresh Onion</a></li>
                                    <li><a href="#">Papayaya & Crisps</a></li>
                                    <li><a href="#">Oatmeal</a></li>
                                    <li><a href="#">Fresh Bananas</a></li>
                                </ul> */}
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="hero__search">
                                <div className="hero__search__form">
                                    <form action="#">
                                        <div className="hero__search__categories">
                                            All Categories
                                            <span className="arrow_carrot-down"></span>
                                        </div>
                                        <input type="text" placeholder="What do yo u need?" />
                                        <button type="submit" className="site-btn">SEARCH</button>
                                    </form>
                                </div>
                                <div className="hero__search__phone">
                                    <div className="hero__search__phone__icon">
                                        <FaPhone />
                                    </div>
                                    <div className="hero__search__phone__text">
                                        <h5>+65 11.188.888</h5>
                                        <span>support 24/7 time</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Hero Section End */}

        <div>
         <div className="breadcrumb-section set-bg" style={{ backgroundImage: `url('images/homeminbanner.jpg')` ,height:'150px'}}>
        <Container>
        <Row>
            <Col lg={12}><h2 className="shopbg_text text-center ">Vegetable’s Package</h2></Col>
            </Row>
            <Row>
            <Col lg={12}><p className="shopbg_para text-center">Home- Vegetables- Vegetable’s Package </p></Col>
        </Row>
        </Container>
        </div>
        <div className="sidebar_space">

        </div>

        <Container>
      <Row>
        <Col lg={6} md={12} sm={12}>
          <div className="shopdetail_picture large-picture" style={{ backgroundImage: `url('images/categories/cat-4.jpg')`,height:'500px'}}>
          </div>
        {/* <br/> */}
        <Row>
          <Col lg={3} md={3} sm={3} xs={3} className="d-flex align-items-center justify-content-center p-3">
          <div className="shopdetail_picture small-picture" style={{ backgroundImage: `url('images/categories/cat-2.jpg')` }}>
          </div>
          </Col>
          <Col lg={3} md={3} sm={3} xs={3} className="d-flex align-items-center justify-content-center">
          <div className="shopdetail_picture small-picture" style={{ backgroundImage: `url('images/categories/cat-3.jpg')` }}>
          </div>
          </Col>
          <Col lg={3} md={3} sm={3} xs={3} className="d-flex align-items-center justify-content-center">
          <div className="shopdetail_picture small-picture" style={{ backgroundImage: `url('images/categories/cat-4.jpg')` }}>
          </div>
          </Col>
          <Col lg={3} md={3} sm={3} xs={3} className="d-flex align-items-center justify-content-center">
          <div className="shopdetail_picture small-picture" style={{ backgroundImage: `url('images/categories/cat-1.jpg')` }}>
          </div>
          </Col>
          </Row>
        </Col>
        <Col lg={6} md={12} sm={12}>
          <div>
            <h4 className="Shopingdetails_heading04">Vegetable's Package</h4>
            <p className="shopingdetails_icon mt-2"><TiStarFullOutline /><TiStarFullOutline /><TiStarFullOutline /><TiStarFullOutline /><TiStarHalfOutline /><span className="shopingdetails_review">(18 reviews)</span></p>
            <h4 className="Shopingdetails_number mt-2">$50.00</h4>
            <p className="Shopingdetails_para">
              Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ac diam sit amet quam
              vehicula elementum sed sit amet dui. Sed porttitor lectus nibh. Vestibulum ac diam sit amet
              quam vehicula elementum sed sit amet dui. Proin eget tortor risus.
            </p>
          </div>
        
          <hr />
          
          <Row>
      <Col lg={6} md={6} sm={12} xs={4}>
        <ul className="shopingdetails_stock">
          <li><b>Availability</b></li> 
          <li><b>Shipping</b></li>
          <li><b>Weight</b></li>   
          <li><b>Share on</b></li>             
        </ul>
      </Col>
      <Col lg={6} md={6} sm={12} xs={8}>
        <ul className="shopingdetails_stock">
          <li>In Stock</li>
          <li>01 day shipping. <samp>Free pickup today</samp></li>
          <li><span>0.5 kg</span></li>
          <li>
            <span className="social-icons">
              <a href="#" aria-label="Twitter"><FaTwitter /></a>
              <a href="#" aria-label="Google Plus"><FaGooglePlusG /></a>
              <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
              <a href="#" aria-label="Facebook"><FaFacebookF /></a>
            </span>
          </li>
        </ul>
      </Col>
    </Row>
        </Col>
      </Row>
      
      <hr />
      
      <Row>
  <Col lg={12} md={12} sm={12} xs={12}>
    <div className="Shopdetails_tab">
      <TabView className="shopingdetails_tabview">
        <TabPanel header="Description">
        <h6 className="shopingdetails_headtext">Products Infomation</h6>
          <p className="m-0">
          Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Pellentesque in ipsum id orci porta dapibus. 
          Proin eget tortor risus. Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam sit amet quam vehicula 
          elementum sed sit amet dui. Donec rutrum congue leo eget malesuada. Vivamus suscipit tortor eget felis porttitor volutpat.
           Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Praesent sapien massa, convallis a pellentesque nec, 
           egestas non nisi. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vestibulum ante ipsum primis in faucibus orci luctus et 
          ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Proin eget tortor risus.<br/><br/>

          Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
           Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Cras ultricies ligula sed magna dictum porta. Cras ultricies ligula 
           sed magna dictum porta. Sed porttitor lectus nibh. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ac diam
            sit amet quam vehicula elementum sed sit amet dui. Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum
             sed sit amet dui. Proin eget tortor risus.


          </p>
        </TabPanel>
        <TabPanel header="Information">
        <h6 className="shopingdetails_headtext">Products Infomation</h6>
          <p className="m-0">
          Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Pellentesque in ipsum id orci porta dapibus. 
          Proin eget tortor risus. Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam sit amet quam vehicula 
          elementum sed sit amet dui. Donec rutrum congue leo eget malesuada. Vivamus suscipit tortor eget felis porttitor volutpat.
           Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Praesent sapien massa, convallis a pellentesque nec, 
           egestas non nisi. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vestibulum ante ipsum primis in faucibus orci luctus et 
          ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Proin eget tortor risus.<br/><br/>

          Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
           Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Cras ultricies ligula sed magna dictum porta. Cras ultricies ligula 
           sed magna dictum porta.
          </p>
        </TabPanel>
        <TabPanel header="Reviews(1)">
            <h6 className="shopingdetails_headtext">Products Infomation</h6>
          <p className="m-0">
          Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Pellentesque in ipsum id orci porta dapibus. 
          Proin eget tortor risus. Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam sit amet quam vehicula 
          elementum sed sit amet dui. Donec rutrum congue leo eget malesuada. Vivamus suscipit tortor eget felis porttitor volutpat.
           Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Praesent sapien massa, convallis a pellentesque nec, 
           egestas non nisi. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vestibulum ante ipsum primis in faucibus orci luctus et 
          ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Proin eget tortor risus.<br/>

          </p>
        </TabPanel>
      </TabView>
    </div>
  </Col>
</Row>

      <Row>
        <Col lg={12}>
        <div>
            <h2 className="text-center mt-3 shopingdetails_heading">Related Product</h2>
        </div>
        </Col>
             <Col lg={3} md={3} sm={5} xs={12} >
        <div className="product__discount__item mt-4">
          <div className="product__discount__item__pic set-bg" style={{ backgroundImage: 'url(images/categories/cat-1.jpg)',
                                                                                        backgroundSize: 'cover',
                                                                                        backgroundPosition: 'center',
                                                                                        width: '100%',
           }}>
            <ul className="product__item__pic__hover">
                            <li><a href="#"><FaHeart /></a></li>
                            <li><a href="#"><FaRetweet /></a></li>
                            <li><a href="#"><MdShoppingCart /></a></li>

            </ul>
          </div>
          <div className="product__discount__item__text">
            <h5><a href="#">Raisin nuts</a></h5>
            <div className="product__item__price">$30.00 </div>
          </div>
        </div>
      </Col>
      <Col lg={3} md={3} sm={5} xs={12}>
        <div className="product__discount__item  mt-4">
          <div className="product__discount__item__pic set-bg" style={{ backgroundImage: 'url(images/categories/cat-2.jpg)',
                                                                                        backgroundSize: 'cover',
                                                                                        backgroundPosition: 'center',
                                                                                        width: '100%',
           }}>
            <ul className="product__item__pic__hover">
                        <li><a href="#"><FaHeart /></a></li>
                        <li><a href="#"><FaRetweet /></a></li>
                        <li><a href="#"><MdShoppingCart /></a></li>

            </ul>
          </div>
          <div className="product__discount__item__text">
            <h5><a href="#">Vegetables package</a></h5>
            <div className="product__item__price">$30.00</div>
          </div>
        </div>
      </Col>
      <Col lg={3} md={3} sm={5} xs={12}>
        <div className="product__discount__item  mt-4">
          <div className="product__discount__item__pic set-bg" style={{ backgroundImage: 'url(images/categories/cat-3.jpg)',
                                                                                        backgroundSize: 'cover',
                                                                                        backgroundPosition: 'center',
                                                                                        width: '100%',
           }}>
            <ul className="product__item__pic__hover">
                        <li><a href="#"><FaHeart /></a></li>
                        <li><a href="#"><FaRetweet /></a></li>
                        <li><a href="#"><MdShoppingCart /></a></li>

            </ul>
          </div>
          <div className="product__discount__item__text">
                <h5><a href="#">Mixed Fruits</a></h5>
            <div className="product__item__price">$30.00 </div>
          </div>
        </div><br/>
      </Col>
      <Col lg={3} md={3} sm={5} xs={12}>
        <div className="product__discount__item  mt-4">
          <div className="product__discount__item__pic set-bg" style={{ backgroundImage: 'url(images/categories/cat-4.jpg)',
                                                                                        backgroundSize: 'cover',
                                                                                        backgroundPosition: 'center',
                                                                                        width: '100%',
           }}>
            <ul className="product__item__pic__hover">
                            <li><a href="#"><FaHeart /></a></li>
                            <li><a href="#"><FaRetweet /></a></li>
                            <li><a href="#"><MdShoppingCart /></a></li>

            </ul>
          </div>
          <div className="product__discount__item__text">
            <h5><a href="#">Raisin nuts</a></h5>
            <div className="product__item__price">$30.00 </div>
          </div>
        </div>
      </Col>
      </Row>
    </Container>
        </div>

        </div>
        <Footer/>
        </>
    ) ;
}
export default Shopdetails
