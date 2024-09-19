import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import Slider from 'react-slider';
import { FaPhone } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Header from "./Header";
import Footer from "./Footer";


function Shopingcart() {

    const [value, setValue] = useState([130, 250]);

    const handleChange = (newValue) => {
      setValue(newValue);
    }
    const [quantity, setQuantity] = useState(1);

    const handleIncrement = () => {
      setQuantity(quantity + 1);
    };
  
    const handleDecrement = () => {
      if (quantity > 1) {
        setQuantity(quantity - 1);
      }
    };
  
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
            <Col lg={12}><h2 className="shopbg_text text-center ">Shopping Cart </h2></Col>
            </Row>
            <Row>
            <Col lg={12}><p className="shopbg_para text-center">Home- Shopping Cart </p></Col>
        </Row>
        </Container>
        </div>
        <div className="sidebar_space">

        </div>

        <Container>
        <Row>
        <Col lg={12}>
          <div className="shopping-cart-table bg-white rounded overflow-hidden">
            {/* Make the table responsive with vertical scroll on mobile */}
            <div className="table-container">
              <Table className="shopingcart_table01">
                <thead>
                  <tr className="shopingcart_row">
                    <th className="shopingcart_product01">Products</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="shopingcart_product">
                    <td className="shopingcart_image">
                      <h5>
                        <img src="images/categories/cat-1.jpg" alt="Vegetable’s Package" className="img-fluid" style={{width: "80px"}}/>
                        <span className="shopingcart_span p-4">Vegetable’s Package</span>
                      </h5>
                    </td>
                    <td className="shopingcart_price">$55.00</td>
                    <td className="shoppingcart_quantity">
                        <div className="quantity">
                        <div className="pro-qty">
                            <button className="quantity-btn decrement" onClick={handleDecrement}>-</button>
                            <Form.Control type="number" value={quantity} min="1" className="quantity-input" readOnly />
                            <button className="quantity-btn increment" onClick={handleIncrement}>+</button>
                        </div>
                        </div>
                    </td>

                    <td className="shopingcart_total">$110.00</td>
                    <td className="shopingcart_close">
                      <Button variant="link" className="text-danger">
                        <i className="bi bi-x-circle"></i>
                      </Button>
                    </td>
                  </tr>
                  <tr className="shopingcart_product">
                    <td className="shopingcart_image">
                      <h5>
                        <img src="images/categories/cat-2.jpg" alt="Vegetable’s Package" className="img-fluid" style={{width: "80px"}}/>
                        <span className="shopingcart_span p-4">Vegetable’s Package</span>
                      </h5>
                    </td>
                    <td className="shopingcart_price">$55.00</td>
                    <td className="shoppingcart_quantity">
                        <div className="quantity">
                        <div className="pro-qty">
                            <button className="quantity-btn decrement" onClick={handleDecrement}>-</button>
                            <Form.Control type="number" value={quantity} min="1" className="quantity-input" readOnly />
                            <button className="quantity-btn increment" onClick={handleIncrement}>+</button>
                        </div>
                        </div>
                    </td>
                    <td className="shopingcart_total">$110.00</td>
                    <td className="shopingcart_close">
                      <Button variant="link" className="text-danger">
                        <i className="bi bi-x-circle"></i>
                      </Button>
                    </td>
                  </tr>
                  <tr className="shopingcart_product">
                    <td className="shopingcart_image">
                      <h5>
                        <img src="images/categories/cat-3.jpg" alt="Vegetable’s Package" className="img-fluid" style={{width: "80px"}}/>
                        <span className="shopingcart_span p-4">Vegetable’s Package</span>
                      </h5>
                    </td>
                    <td className="shopingcart_price">$55.00</td>
                    <td className="shoppingcart_quantity">
                        <div className="quantity">
                        <div className="pro-qty">
                            <button className="quantity-btn decrement" onClick={handleDecrement}>-</button>
                            <Form.Control type="number" value={quantity} min="1" className="quantity-input" readOnly />
                            <button className="quantity-btn increment" onClick={handleIncrement}>+</button>
                        </div>
                        </div>
                    </td>
                    <td className="shopingcart_total">$110.00</td>
                    <td className="shopingcart_close">
                      <Button variant="link" className="text-danger">
                        <i className="bi bi-x-circle"></i>
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </Col>
      </Row>

            <Row>
                <Col lg={6} sm={12}>
                    <div className="shopingcart_shopbutton">
                        <p className="pt-2">CONTINUE SHOPPING</p>
                    </div>
                </Col>
                <Col lg={6} sm={12} className="update-cart-container">
                    <div className="update-cart-button shopingcart_shopbutton01">
                        <p className="pt-2">UPDATE CART</p>
                    </div>
                </Col>
         </Row>

         <Row>
            <Col lg={6} sm={12}>
            <div className="shopingcart_discount">
                <h4>Discount Codes</h4>
                <input type="text" placeholder="Enter Your coupon code "/><span className="shopingcart_coupon m-3">APPLY COUPON</span>
            </div>
            </Col>

            <Col lg={6} sm={12}>
                <div className="shopping-cart-subtotal">
                    <h4>Cart Total</h4>
                    <div className="shopping-cart-summary">
                        <h5 className="subtotal pt-4">
                            Subtotal
                            <span className="amount">${455}</span>
                        </h5>
                        <span className="shopingcart_line"></span>
                        <h5 className="total pt-4">
                            Total
                            <span className="amount">${455}</span>
                        </h5>
                    </div>
                    <button className="checkout-button">
                        PROCEED TO CHECKOUT
                    </button>
                </div>
            </Col>

             </Row>


        </Container>
        </div>
        <br/><br/><br/>
        </div>
        <Footer/>
        </>
    ) ;
}
export default Shopingcart
