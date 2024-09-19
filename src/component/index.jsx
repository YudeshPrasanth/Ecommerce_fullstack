import React, { useState } from 'react';
import { FaHeart } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";
import {  FaRetweet } from "react-icons/fa";
import { FaRegCalendar } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
// import {BrowserRouter,Form,Link, Route, Routes,} from 'react-router-dom';
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Index() {

    // ---------------- Featured section OR Filter section Start -------------------

    const [filter, setFilter] = useState('All');

    const products = [
        { category: 'oranges', title: 'Crab Pool Security', price: '$30.00', img: 'images/caterogies/orange1.jpg' },
        { category: 'oranges', title: 'Crab Pool Security', price: '$30.00', img: 'images/caterogies/banana.jpg' },
        { category: 'fastfood', title: 'Crab Pool Security', price: '$30.00', img: 'images/caterogies/Burger.jpg' },
        { category: 'fastfood', title: 'Crab Pool Security', price: '$30.00', img: 'images/caterogies/chees.jpg' },
        { category: 'red', title: 'Crab Pool Security', price: '$30.00', img: 'images/caterogies/apple.jpg' },
        { category: 'oranges', title: 'Crab Pool Security', price: '$30.00', img: 'images/caterogies/mango.jpg' },
        { category: 'vegetables', title: 'Crab Pool Security', price: '$30.00', img: 'images/caterogies/vegtable.jpg' },
        { category: 'red', title: 'Crab Pool Security', price: '$30.00', img: 'images/caterogies/pomo.jpg' },
    ];

    const filteredProducts = filter === 'All' ? products : products.filter(product => product.category === filter);

    const handleFilterChange = (category) => {
        setFilter(category);
    };  

    // -------------------- End OF Featured section OR Filter section ----------------------


 // ---------------- LastProduct section Start-------------------

    const options = {
        loop: true,
        margin: 0,
        items: 1,
        dots: false,
        nav: true,
        navText: ["<span class='fa fa-angle-left'><span/>", "<span class='fa fa-angle-right'><span/>"],
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
    };

    // ----------------End of LastProduct section -------------------

 // ---------------- Blog section Start-------------------
    const blogs = [
        {
            imgSrc: "images/blog/orange-1.jpg",
            date: "jun 25, 2024",
            comments: 5,
            title: "Cooking tips make cooking simple",
            description: "Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat",
            link: "#"
        },
        {
            imgSrc: "images/blog/beans-2.jpg",
            date: "jun 25, 2024",
            comments: 5,
            title: "6 ways to prepare breakfast for 30",
            description: "Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat",
            link: "#"
        },
        {
            imgSrc: "images/blog/pomo-3.avif",
            date: "jun 25, 2024",
            comments: 5,
            title: "Visit the clean farm in the US",
            description: "Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat",
            link: "#"
        }
    ];

       // ----------------End of Blog section -------------------
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
                                <ul >
                                <Link to="/Freashmeat"><li><a href="#" className='link'>Fresh Meat</a></li></Link>
                                <Link to="/Vegetables"><li><a href="#">Vegetables</a></li></Link> 
                                <Link to="/Fruiteandnuts"><li><a href="#">Fruit & Nut Gifts</a></li></Link> 
                                <Link to="/Berries"><li><a href="#">Fresh Berries</a></li></Link> 
                                <Link to="/Oceanfood"><li><a href="#">Ocean Foods</a></li></Link>
                                <Link to="/Butterandegg"><li><a href="#">Butter & Eggs</a></li></Link>
                                <Link to="/Fastfood"><li><a href="#">Fastfood</a></li></Link>
                                <Link to="/Vegetables"><li><a href="#">Fresh Onion</a></li></Link>
                                <Link to="/Fruiteandnuts"><li><a href="#">Papayaya & Crisps</a></li></Link>
                                <Link to="/Oatmeal"><li><a href="#">Oatmeal</a></li></Link>
                                <Link to="/Fruiteandnuts"><li><a href="#">Fresh Bananas</a></li></Link>
                                </ul>
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
                            <div className="hero__item set-bg" style={{ backgroundImage: "url('images/back.jpeg')", }}>
                                <div className="hero__text">
                                    <span>FRUIT FRESH</span>
                                    <h2>Vegetable <br />100% Organic</h2>
                                    <p>Free Pickup and Delivery Available</p>
                                    <a href="#" type="button" className="btn btn-success">SHOP NOW</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Hero Section End */}


            {/* Caterogies section start */}

            <section className="categories">
            <div className="container">
                <div id="categoriesCarousel" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        {/* Carousel items for large screens */}
                        <div className="carousel-item active">
                            <div className="row">
                                <div className="col-lg-3 d-none d-lg-block">
                                    <div className="card categories__item">
                                        <img src="./images/categories/cat-1.jpg" className="card-img" alt="Fresh Fruit" />
                                        <div className="card-img-overlay">
                                            <h5 className="card-title"><a href="#">Fresh Fruit</a></h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 d-none d-lg-block">
                                    <div className="card categories__item">
                                        <img src="./images/categories/cat-2.jpg" className="card-img" alt="Dried Fruit" />
                                        <div className="card-img-overlay">
                                            <h5 className="card-title"><a href="#">Dried Fruit</a></h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 d-none d-lg-block">
                                    <div className="card categories__item">
                                        <img src="./images/categories/cat-3.jpg" className="card-img" alt="Vegetables" />
                                        <div className="card-img-overlay">
                                            <h5 className="card-title"><a href="#">Vegetables</a></h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 d-none d-lg-block">
                                    <div className="card categories__item">
                                        <img src="./images/categories/cat-4.jpg" className="card-img" alt="Drink Fruits" />
                                        <div className="card-img-overlay">
                                            <h5 className="card-title"><a href="#">Drink Fruits</a></h5>
                                        </div>
                                    </div>
                                </div>
                                
                                
                                {/* Placeholder for mobile view */}
                                <div className="col-12 d-lg-none">
                                    <div className="card categories__item">
                                        <img src="./images/categories/cat-1.jpg" className="card-img" alt="Placeholder Image" />
                                        <div className="card-img-overlay">
                                            <h5 className="card-title"><a href="#">Placeholder</a></h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        {/* Carousel items for mobile screens */}
                        <div className="carousel-item d-lg-none">
                            <div className="row">
                                <div className="col-12">
                                    <div className="card categories__item">
                                        <img src="./images/categories/cat-2.jpg" className="card-img" alt="Fresh Fruit" />
                                        <div className="card-img-overlay">
                                            <h5 className="card-title"><a href="#">Fresh Fruit</a></h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item d-lg-none">
                            <div className="row">
                                <div className="col-12">
                                    <div className="card categories__item">
                                        <img src="./images/categories/cat-3.jpg" className="card-img" alt="Dried Fruit" />
                                        <div className="card-img-overlay">
                                            <h5 className="card-title"><a href="#">Dried Fruit</a></h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item d-lg-none">
                            <div className="row">
                                <div className="col-12">
                                    <div className="card categories__item">
                                        <img src="./images/categories/cat-4.jpg" className="card-img" alt="Vegetables" />
                                        <div className="card-img-overlay">
                                            <h5 className="card-title"><a href="#">Vegetables</a></h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item d-lg-none">
                            <div className="row">
                                <div className="col-12">
                                    <div className="card categories__item">
                                        <img src="./images/categories/cat-5.jpg" className="card-img" alt="Drink Fruits" />
                                        <div className="card-img-overlay">
                                            <h5 className="card-title"><a href="#">Drink Fruits</a></h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#categoriesCarousel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#categoriesCarousel" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </section>

        {/* Caterogies section end */}

        {/* Featured section start */}

        <section className="featured spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title">
                            <h2 style={{fontWeight:'bolder'}}>Featured Product</h2>
                        </div>
                        <div className="featured__controls">
                            <ul>
                                <li className={filter === 'All' ? 'active' : ''} onClick={() => handleFilterChange('All')} data-filter="*">All</li>
                                <li className={filter === 'oranges' ? 'active' : ''} onClick={() => handleFilterChange('oranges')} data-filter=".oranges">Oranges</li>
                                <li className={filter === 'red' ? 'active' : ''} onClick={() => handleFilterChange('red')} data-filter=".red">Red fruit</li>
                                <li className={filter === 'vegetables' ? 'active' : ''} onClick={() => handleFilterChange('vegetables')} data-filter=".vegetables">Vegetables</li>
                                <li className={filter === 'fastfood' ? 'active' : ''} onClick={() => handleFilterChange('fastfood')} data-filter=".fastfood">Fastfood</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row featured__filter">
                    {filteredProducts.map((product, index) => (
                        <div key={index} className={`col-lg-3 col-md-4 col-sm-6 mix ${product.category}`}>
                            <div className="featured__item">
                                <div className="featured__item__pic set-bg" style={{ backgroundImage: `url(${product.img})` }}>
                                    <ul className="featured__item__pic__hover">
                                        <li><a href="#"><FaHeart /></a></li>
                                        <li><a href="#"><FaRetweet /></a></li>
                                        <li><a href="#"><MdShoppingCart /></a></li>
                                    </ul>
                                </div>
                                <div className="featured__item__text">
                                    <h6><a href="#">{product.title}</a></h6>
                                    <h5>{product.price}</h5>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

         {/* Featured section end */}

        {/* Banner section Start */}

        <div className="banner">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="banner__pic">
                            <img src="images/Banner/banner-1.jpg" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="banner__pic">
                            <img src="images/Banner/banner-2.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

          {/* Banner section End */}


         {/* LastProduct section Start */}

          <section className="latest-product spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="latest-product__text">
                            <h4>Latest Products</h4>
                            {/* <Carousel className="latest-product__slider owl-carousel" {...options}> */}
                            {/* <Carousel> */}
                                <div className="latest-prdouct__slider__item">
                                    <a href="#" className="latest-product__item">
                                        <div className="latest-product__item__pic">
                                            <img src="images/latestproduct/lp-1.jpg" alt="" />
                                        </div>
                                        <div className="latest-product__item__text">
                                            <h6>Crab Pool Security</h6>
                                            <span>$30.00</span>
                                        </div>
                                    </a>
                                    <a href="#" className="latest-product__item">
                                        <div className="latest-product__item__pic">
                                        <img src="images/latestproduct/lp-2.jpg" alt="" />
                                        </div>
                                        <div className="latest-product__item__text">
                                            <h6>Crab Pool Security</h6>
                                            <span>$30.00</span>
                                        </div>
                                    </a>
                                    <a href="#" className="latest-product__item">
                                        <div className="latest-product__item__pic">
                                        <img src="images/latestproduct/lp-3.jpg" alt="" />
                                        </div>
                                        <div className="latest-product__item__text">
                                            <h6>Crab Pool Security</h6>
                                            <span>$30.00</span>
                                        </div>
                                    </a>
                                </div>
                            {/* </Carousel> */}
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="latest-product__text">
                            <h4>Top Rated Products</h4>
                            {/* <Carousel className="latest-product__slider owl-carousel" {...options}> */}
                            {/* <Carousel> */}
                                <div className="latest-prdouct__slider__item">
                                    <a href="#" className="latest-product__item">
                                        <div className="latest-product__item__pic">
                                        <img src="images/latestproduct/lp-1.jpg" alt="" />
                                        </div>
                                        <div className="latest-product__item__text">
                                            <h6>Crab Pool Security</h6>
                                            <span>$30.00</span>
                                        </div>
                                    </a>
                                    <a href="#" className="latest-product__item">
                                        <div className="latest-product__item__pic">
                                        <img src="images/latestproduct/lp-2.jpg" alt="" />
                                        </div>
                                        <div className="latest-product__item__text">
                                            <h6>Crab Pool Security</h6>
                                            <span>$30.00</span>
                                        </div>
                                    </a>
                                    <a href="#" className="latest-product__item">
                                        <div className="latest-product__item__pic">
                                        <img src="images/latestproduct/lp-3.jpg" alt="" />
                                        </div>
                                        <div className="latest-product__item__text">
                                            <h6>Crab Pool Security</h6>
                                            <span>$30.00</span>
                                        </div>
                                    </a>
                                </div>
                            
                            {/* </Carousel> */}
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="latest-product__text">
                            <h4>Review Products</h4>
                            {/* <Carousel className="latest-product__slider owl-carousel" {...options}> */}
                            {/* <Carousel> */}
                                <div className="latest-prdouct__slider__item">
                                    <a href="#" className="latest-product__item">
                                        <div className="latest-product__item__pic">
                                        <img src="images/latestproduct/lp-1.jpg" alt="" />
                                        </div>
                                        <div className="latest-product__item__text">
                                            <h6>Crab Pool Security</h6>
                                            <span>$30.00</span>
                                        </div>
                                    </a>
                                    <a href="#" className="latest-product__item">
                                        <div className="latest-product__item__pic">
                                        <img src="images/latestproduct/lp-2.jpg" alt="" />
                                        </div>
                                        <div className="latest-product__item__text">
                                            <h6>Crab Pool Security</h6>
                                            <span>$30.00</span>
                                        </div>
                                    </a>
                                    <a href="#" className="latest-product__item">
                                        <div className="latest-product__item__pic">
                                        <img src="images/latestproduct/lp-3.jpg" alt="" />
                                        </div>
                                        <div className="latest-product__item__text">
                                            <h6>Crab Pool Security</h6>
                                            <span>$30.00</span>
                                        </div>
                                    </a>
                                </div>
    
                            {/* </Carousel> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
          
            {/* End of LastProduct section Start */}


            {/* Blog section Start */}

            <section className="from-blog spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title from-blog__title">
                            <h2>From The Blog</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {blogs.map((blog, index) => (
                        <div key={index} className="col-lg-4 col-md-4 col-sm-6">
                            <div className="blog__item">
                                <div className="blog__item__pic">
                                    <img src={blog.imgSrc} alt={blog.title} />
                                </div>
                                <div className="blog__item__text">
                                    <ul>
                                        <li><FaRegCalendar /> {blog.date}</li>
                                        <li><FaRegComment /> {blog.comments}</li>
                                    </ul>
                                    <h5><a href={blog.link}>{blog.title}</a></h5>
                                    <p>{blog.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Banner section End */}


        </div>
        <Footer/>
        </>
    );
}

export default Index;
