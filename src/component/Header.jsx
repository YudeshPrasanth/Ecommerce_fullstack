import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { TbMailFilled } from "react-icons/tb";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaPinterestP, FaUser, FaHeart } from "react-icons/fa";
import { BsHandbagFill } from "react-icons/bs";
import { BrowserRouter, Link } from 'react-router-dom';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

function Header() {
    return (
        <>
            {/* Offcanvas Menu */}
            <div className="offcanvas offcanvas-start" data-bs-backdrop="static" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div className="offcanvas-header">
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <Container>
                        <Row>
                            <Col lg={12} md={12} sm={12} xs={12}>
                                <div className="offcanvas-logo">
                                    <a href="#">
                                        <img src="images/logo.png" alt="logo" />
                                    </a>
                                </div>
                            </Col>
                            <Col lg={12} md={12} sm={12} xs={12}>
                                <div className="offcanvas-menu-cart d-flex align-items-center">
                                    <a href="#" className="offcanvas-icon me-2">
                                        <FaHeart />
                                        <span className="icon-badge">1</span>
                                    </a>
                                    <a href="#" className="offcanvas-icon">
                                        <BsHandbagFill />
                                        <span className="icon-badge">3</span>
                                    </a>
                                    <span className='offcanvas_item m-4'> item: <span className='offcanvas_price'>$150.00</span></span>
                                </div>
                            </Col>
                            <Col lg={12} md={12} sm={12} xs={12}>
                                <div className="offcanvas-menu-widget mt-3">
                                    <div className="header__top__right__language">
                                        <img src="images/language.png" alt="language" />
                                        <div>Dashboard</div>
                                        <span className="arrow_carrot-down"></span>
                                        <ul>
                                            <Link to="/adminhome"><li><a href="#">AdminLogin</a></li></Link>
                                            {/* <li><a href="#">English</a></li> */}
                                        </ul>
                                    </div>
                                    <div className="header__top__right__auth">
                                        <Link to="/login"><FaUser /> Login</Link>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={12} md={12} sm={12} xs={12}>
                                <nav className="offcanvas-menu-nav mobile-menu">
                                    <ul className="navbar-nav mx-auto">
                                        <li className="nav-item active">
                                            <Link to="/" className="nav-link_href">Home</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/Shopgrid" className="nav-link_href">Shop</Link>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link_href dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Pages
                                            </a>
                                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <Link to="/Shopdetails" className="dropdown-item">Shop Details</Link>
                                                <Link to="/Shopingcart" className="dropdown-item">Shopping Cart</Link>
                                                <Link to="/Checkout" className="dropdown-item">Check Out</Link>
                                                <Link to="/Shopingblog" className="dropdown-item">Blog Details</Link>
                                            </div>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/Blog" className="nav-link_href">Blog</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/Contact" className="nav-link_href">Contact</Link>
                                        </li>
                                    </ul>
                                </nav>
                                <div id="mobile-menu-wrap"></div>
                                <div className="header__top__right__social mb-3">
                                    <a href="#"><FaFacebookF /></a>
                                    <a href="#"><FaTwitter /></a>
                                    <a href="#"><FaLinkedinIn /></a>
                                    <a href="#"><FaPinterestP /></a>
                                </div>
                                <div className="info-section">
                                    <span className="info-item email">
                                        <TbMailFilled className="info-icon" />
                                        hello@colorlib.com
                                    </span>
                                    <span className="info-item shipping">
                                        Free Shipping for all Orders over $99
                                    </span>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>

            {/* Header */}
            <header className="header">
                <div className="header__top">
                    <div className="container">
                        <Row>
                            <Col lg={6} md={6}>
                                <div className="header__top__left">
                                    <ul>
                                        <li><TbMailFilled /> hello@colorlib.com</li>
                                        <li>Free Shipping for all Order of $99</li>
                                    </ul>
                                </div>
                            </Col>
                            <Col lg={6} md={6}>
                                <div className="header__top__right d-flex align-items-center justify-content-end">
                                    <div className="header__top__right__social">
                                        <a href="#"><FaFacebookF /></a>
                                        <a href="#"><FaTwitter /></a>
                                        <a href="#"><FaLinkedinIn /></a>
                                        <a href="#"><FaPinterestP /></a>
                                    </div>
                                    <div className="header__top__right__language ms-4">
                                        <img src="images/language.png" alt="language" />
                                        <div>Dashboard</div>
                                        <span className="arrow_carrot-down"></span>
                                        <ul>
                                        <Link to="/adminhome"><li><a href="#">AdminLogin</a></li></Link>
                                            {/* <li><a href="#">English</a></li> */}
                                        </ul>
                                    </div>
                                    <div className="header__top__right__auth ms-4">
                                        <Link to="/login"><FaUser /> Login</Link>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>

                <div className="container">
                    <Row className="align-items-center">
                        <Col lg={3} sm={4} md={4} xs={4}>
                            <div className="header__logo">
                                <a href="./index.html"><img src="images/logo.png" alt="logo" /></a>
                            </div>
                        </Col>
                        <Col lg={6} sm={4} md={6} xs={4}>
                            <nav className="header__menu navbar navbar-expand-lg">
                                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarNav">
                                    <ul className="navbar-nav mx-auto">
                                        <li className="nav-item active">
                                            <Link to="/" className="nav-link">Home</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/Shopgrid" className="nav-link">Shop</Link>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Pages
                                            </a>
                                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <Link to="/Shopdetails" className="dropdown-item">Shop Details</Link>
                                                <Link to="/Shopingcart" className="dropdown-item">Shopping Cart</Link>
                                                <Link to="/Checkout" className="dropdown-item">Check Out</Link>
                                                <Link to="/Shopingblog" className="dropdown-item">Blog Details</Link>
                                            </div>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/Blog" className="nav-link">Blog</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/Contact" className="nav-link">Contact</Link>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </Col>
                        <Col lg={3}>
                            <div className="header__cart">
                                <ul className="d-flex">
                                    <li><a href="#"><FaHeart /><span>1</span></a></li>
                                    <li><a href="#"><BsHandbagFill /><span>3</span></a></li>
                                </ul>
                                <div className="header__cart__price">item: <span>$150.00</span></div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </header>
        </>
    );
};

export default Header;
