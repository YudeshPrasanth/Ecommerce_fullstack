import React from "react";
import { FaPhone } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaRegCalendar } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "./Header";
import Footer from "./Footer";

function Shopingblog() {

   
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
         <div className="breadcrumb-section set-bg" style={{ backgroundImage: `url('images/homeminbanner.jpg')` ,height:'350px',
                                                                                                                display: 'flex',
                                                                                                                flexDirection: 'column',
                                                                                                                justifyContent: 'center',
                                                                                                                alignItems: 'center'}}>
        <Container>
        <Row>
            <Col lg={12}><h2 className="shopbg_text text-center ">The Moment You Need To Remove Garlic From The Menu
            </h2></Col>
            </Row>
            <Row>
            <Col lg={12}><p className="shopbg_para text-center">By Michael Scofield January 14, 2019 8 Comments
            </p></Col>
        </Row>
        </Container>
        </div>

        <div className="sidebar_space">

        </div>

        <Container>
    <Row>
        <Col lg={4} md={6}>
            <div className="blog__sidebar">
                <div className="blog__sidebar__search">
                    <form action="#">
                        <input type="text" placeholder="Search..." />
                        <button type="submit"><span className="icon_search"></span></button>
                    </form>
                </div>
                <div className="blog__sidebar__item">
                    <h4>Categories</h4>
                    <ul>
                        <li><a href="#">All</a></li>
                        <li><a href="#">Beauty (20)</a></li>
                        <li><a href="#">Food (5)</a></li>
                        <li><a href="#">Life Style (9)</a></li>
                        <li><a href="#">Travel (10)</a></li>
                    </ul>
                </div>
                <div className="blog__sidebar__item">
                    <h4>Recent News</h4>
                    <div className="blog__sidebar__recent">
                        <a href="#" className="blog__sidebar__recent__item">
                            <div className="blog__sidebar__recent__item__pic">
                                <img src="images/blog/sr-1.jpg" alt=""/>
                            </div>
                            <div className="blog__sidebar__recent__item__text">
                                <h6>09 Kinds Of Vegetables<br /> Protect The Liver</h6>
                                <span>MAR 05, 2019</span>
                            </div>
                        </a>
                        <a href="#" className="blog__sidebar__recent__item">
                            <div className="blog__sidebar__recent__item__pic">
                                <img src="images/blog/sr-2.jpg" alt=""/>
                            </div>
                            <div className="blog__sidebar__recent__item__text">
                                <h6>Tips You To Balance<br /> Nutrition Meal Day</h6>
                                <span>MAR 05, 2019</span>
                            </div>
                        </a>
                        <a href="#" className="blog__sidebar__recent__item">
                            <div className="blog__sidebar__recent__item__pic">
                                <img src="images/blog/sr-3.jpg" alt=""/>
                            </div>
                            <div className="blog__sidebar__recent__item__text">
                                <h6>4 Principles Help You Lose <br />Weight With Vegetables</h6>
                                <span>MAR 05, 2019</span>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="blog__sidebar__item">
                            <h4>Search By</h4>
                            <div class="blog__sidebar__item__tags">
                                <a href="#">Apple</a>
                                <a href="#">Beauty</a>
                                <a href="#">Vegetables</a>
                                <a href="#">Fruit</a>
                                <a href="#">Healthy Food</a>
                                <a href="#">Lifestyle</a>
                            </div>
                        </div>
            </div>
        </Col>
        
        <Col lg={8} md={12} sm={12} >
            <div >
            <img src="images/strawberry.jpg" alt="" className="shopingblog_catimage"/>
            </div>
            <p className="shopingblog_para mt-4">Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
                dui. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Mauris blandit
                aliquet elit, eget tincidunt nibh pulvinar a. Vivamus magna justo, lacinia eget consectetur
                sed, convallis at tellus. Sed porttitor lectus nibh. Donec sollicitudin molestie malesuada.
                Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Proin eget tortor risus.
                Donec rutrum congue leo eget malesuada. Curabitur non nulla sit amet nisl tempus convallis
                quis ac lectus. Donec sollicitudin molestie malesuada. Nulla quis lorem ut libero malesuada
                feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.</p>
            <h3 className="shopingblog_head">The corner window forms a place within a place that is a resting point within the large
                space.</h3>
            <p className="shopingblog_para mt-4">The study area is located at the back with a view of the vast nature. Together with the other
                buildings, a congruent story has been managed in which the whole has a reinforcing effect on
                the components. The use of materials seeks connection to the main house, the adjacent
                stables</p>
            <Row>
    
        <Col lg={6} md={6} sm={12}>
        <div>
            <div className="shopingblog_image">
                <img src="images/back.jpeg"/>
            </div>
            <div className="shopingblog_cheif p-3">
                <h6>Michael Scofield</h6>
                <p>Admin</p>
            </div>
        </div>
        </Col>

        <Col lg={6} md={6} sm={12}>
            <div class="shopingblog_list">
                <ul>
                    <li><span>Categories:</span> Food</li>
                    <li><span>Tags:</span> All, Trending, Cooking, Healthy Food, Life Style</li>
                </ul>
                <div class="shopingblog_social">
                    <a href="#" className="ms-4"><FaFacebookF /></a>
                    <a href="#"><FaTwitter /></a>
                    <a href="#"><FaGooglePlusG /></a>
                    <a href="#"><FaLinkedinIn /></a>
                    <a href="#"><FaEnvelope /></a>
                </div>
            </div>
        </Col>
        </Row>

        </Col>
    </Row>
    <hr/>
    <Row>
        <Col lg={12} md={12} sm={12}>
        <h1 className="text-center Shoping_post ">Post You May Like</h1>
        <p className="shoping_underline"></p>
        </Col>
    </Row>
    
            {/* Blog section Start */}

    <section class="from-blog spad">
            <Row>
                {/* <!-- Blog Item 1 --> */}
                <Col lg={4} md={4} sm={6}>
                    <div class="blog__item">
                        <div class="blog__item__pic">
                            <img src="images/blog/orange-1.jpg" alt="Cooking tips make cooking simple"/>
                        </div>
                        <div class="blog__item__text">
                            <ul>
                            <li><FaRegCalendar /> jun 25, 2024</li> 
                            <li><FaRegComment /> 5</li>
                            </ul>
                            <h5><a href="#">Cooking tips make cooking simple</a></h5>
                            <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat</p>
                        </div>
                    </div>
                </Col>
                {/* <!-- Blog Item 2 --> */}
                <Col lg={4} md={4} sm={6}>
                    <div class="blog__item">
                        <div class="blog__item__pic">
                            <img src="images/blog/beans-2.jpg" alt="6 ways to prepare breakfast for 30"/>
                        </div>
                        <div class="blog__item__text">
                            <ul>
                            <li><FaRegCalendar /> jun 25, 2024</li> 
                            <li><FaRegComment /> 5</li>
                            </ul>
                            <h5><a href="#">6 ways to prepare breakfast for 30</a></h5>
                            <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat</p>
                        </div>
                    </div>
                </Col>
                {/* <!-- Blog Item 3 --> */}
                <Col lg={4} md={4} sm={6}>
                    <div class="blog__item">
                        <div class="blog__item__pic">
                            <img src="images/blog/pomo-3.avif" alt="Visit the clean farm in the US"/>
                        </div>
                        <div class="blog__item__text">
                            <ul>
                                <li><FaRegCalendar /> jun 25, 2024</li> 
                                <li><FaRegComment /> 5</li>
                            </ul>
                            <h5><a href="#">Visit the clean farm in the US</a></h5>
                            <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat</p>
                        </div>
                    </div>
                </Col>
                </Row>
    </section>

</Container>

        </div>
        </div>
        <Footer/>
        </>
    ) ;
}
export default Shopingblog;