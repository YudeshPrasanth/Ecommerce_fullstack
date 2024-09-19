import React from "react";
import { FaPhone } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "./Header";
import Footer from "./Footer";


const Checkout = () => {
    return(
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
            <Col lg={12}><h2 className="shopbg_text text-center ">Checkout </h2></Col>
            </Row>
            <Row>
            <Col lg={12}><p className="shopbg_para text-center">Home- Checkout</p></Col>
        </Row> 
        </Container>
        </div>
        <div className="sidebar_space">

        </div>

        <Container>
        <Row>
            <Col lg={12}>
            <div className="checkout_cupon_div">
            <h4 className="text-center checkout_cupon">Have a cupon?<a href="#" className="checkout_href">Click here</a> to enter your code</h4>
            </div>
            </Col>
        </Row>
        <Row>
            <Col lg={12}>
            <div className="">
                <h3 className="checkout_billing">Billing Details</h3>
            </div>
            </Col>
            <div className="checkout_line pt-3"></div>
        </Row>
        </Container>
<Container>
   <Row>
    <Col lg={8} sm={6}>
                                    
                                    
                
                <div className="checkout__input">
                    <p>First Name<span>*</span></p>
                    <input type="text"/>
                </div>
    
                <div className="checkout__input">
                    <p>Last Name<span>*</span></p>
                    <input type="text"/>
                </div>
        
         <div className="checkout__input">
            <p>Country<span>*</span></p>
            <input type="text"/>
        </div>
        <div className="checkout__input">
            <p>Street Address<span>*</span></p>
            <input type="text" placeholder="Street Address"/>
            <br/><br/>
            <input type="text" placeholder="Apartment, suite, unit etc. (optional)"/>
        </div>
        <div className="checkout__input">
            <p>Town/City<span>*</span></p>
            <input type="text"/>
        </div>
        <div className="checkout__input">
            <p>Country/State<span>*</span></p>
            <input type="text"/>
        </div>
        <div className="checkout__input">
            <p>Postcode / ZIP<span>*</span></p>
            <input type="text"/>
        </div>

        <div className="checkout__input">
            <p>Phone<span>*</span></p>
            <input type="text"/>
        </div>
    
    
        <div className="checkout__input">
            <p>Email<span>*</span></p>
            <input type="text"/>
        </div>
          
        
        <div className="checkout__input__checkbox">
            <label htmlFor="acc">
                <input type="checkbox" id="acc"/>
                Create an account?
                <span className="checkmark"></span>
            </label>
        </div>
        <p>Create an account by entering the information below. If you are a returning customer, please login at the top of the page.</p>
        <div className="checkout__input">
            <p>Account Password<span>*</span></p>
            <input type="password"/>
        </div>
        <div className="checkout__input__checkbox">
            <label htmlFor="diff-acc">
                <input type="checkbox" id="diff-acc"/>
                Ship to a different address?
                <span className="checkmark"></span>
            </label>
        </div>
        <div className="checkout__input">
            <p>Order notes<span>*</span></p>
            <input type="text" placeholder="Notes about your order, e.g. special notes for delivery."/>
        </div> 
    </Col>
    <Col lg={4} md={6}>
    <br/>
        <div class="checkout__order">
            <h4>Your Order</h4>
            <div class="checkout__order__products">Products <span>Total</span></div>
            <ul>
                <li>Vegetable’s <span>$75.99</span></li>
                <li>Fresh Vegetable <span>$151.99</span></li>
                <li>Organic Bananas <span>$53.99</span></li>
            </ul>
            <div class="checkout__order__subtotal">Subtotal <span>$750.99</span></div>
            <div class="checkout__order__total">Total <span>$750.99</span></div>
            <div class="checkout__input__checkbox">
                <label for="acc-or">
                    Create an account?
                    <input type="checkbox" id="acc-or"/>
                    <span class="checkmark"></span>
                </label>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adip elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua.</p>
            <div class="checkout__input__checkbox">
                <label for="payment">
                    Check Payment
                    <input type="checkbox" id="payment"/>
                    <span class="checkmark"></span>
                </label>
            </div>
            <div class="checkout__input__checkbox">
                <label for="paypal">
                    Paypal
                    <input type="checkbox" id="paypal"/>
                    <span class="checkmark"></span>
                </label>
            </div>
            <button type="submit" class="site-btn" style={{backgroundColor:"#7fad39",
                                                            color:"white",
                                                            border:"none",
                                                            fontSize:"20px",
                                                            fontWeight:"700",
                                                            padding:"10px"}}>PLACE ORDER</button>
        </div>
    </Col>
</Row>
        </Container>
        </div>
        </div>
        <Footer/>
        </>
    );
};

export default Checkout;
