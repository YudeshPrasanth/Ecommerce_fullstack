import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import Slider from 'react-slider';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { FaPhone } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import {  FaRetweet } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";
import { TbLayoutGridFilled } from "react-icons/tb";
import { TfiMenuAlt } from "react-icons/tfi";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "./Header";
import Footer from "./Footer";




function Shopgrid() {

  const [value, setValue] = useState([130, 250]);

  const handleChange = (newValue) => {
    setValue(newValue);
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
            <Col lg={12}><h2 className="shopbg_text text-center ">Organi Shop</h2></Col>
            </Row>
            <Row>
            <Col lg={12}><p className="shopbg_para text-center">Home- Shop</p></Col>
        </Row>
        </Container>
        </div>
        <div className="sidebar_space">

        </div>
        <Container>
            <Row>
            <Col lg={3} md={5}>
            <div className="sidebar_item"> 
              <h4 >Department</h4>
              <ul className="sidebar-menu">
                <li><Link to="/Freashmeat" className="sidebar-link">Fresh Meat</Link></li>
                <li><Link to="/Vegetables" className="sidebar-link">Vegetables</Link></li>
                <li><Link to="/Fruiteandnuts" className="sidebar-link">Fruit & Nut Gifts</Link></li>
                <li><Link to="/Berries" className="sidebar-link">Fresh Berries</Link></li>
                <li><Link to="/Oceanfood" className="sidebar-link">Ocean Foods</Link></li>
                <li><Link to="/Butterandegg" className="sidebar-link">Butter & Eggs</Link></li>
                <li><Link to="/Fastfood" className="sidebar-link">Fastfood</Link></li>
                <li><Link to="/Vegetables" className="sidebar-link">Fresh Onion</Link></li>
                <li><Link to="/Fruiteandnuts" className="sidebar-link">Papaya & Crisps</Link></li>
                <li><Link to="/Oatmeal" className="sidebar-link">Oatmeal</Link></li>
                <li><Link to="/Fruiteandnuts" className="sidebar-link">Fresh Bananas</Link></li>
              </ul>

            </div>


             <div className="sidebar_item">
                <h4>Price</h4>
                
                    <Form.Group>
                      <Form.Control
                        type="text"
                        id="amount"
                        readOnly
                        value={`$${value[0]} - $${value[1]}`}
                        className="range-value"
                      />
                    </Form.Group>
                    <Slider
                      value={value}
                      onChange={handleChange}
                      min={130}
                      max={1000}
                      step={1}
                      className="range-bar"
                      thumbClassName="slider-thumb"
                      trackClassName="slider-track"
                      renderTrack={(props, state) => (
                        <div
                          {...props}
                          className={`slider-track ${
                            state.index === 0 ? 'slider-track-1' : 'slider-track-2'
                          }`}
                        />
                      )}
                      renderThumb={(props) => <div {...props} className="slider-thumb" />}
                      ariaLabel={['Lower thumb', 'Upper thumb']}
                      ariaValuetext={(state) => `$${state.valueNow}`}
                      pearling
                      minDistance={10}
                    />
                  </div> <br/>


                  <Col className="sidebar__item sidebar__item__color--option">
      <h4 className="sidebar_heading">Colors</h4>
      <Col className="sidebar__item__color sidebar__item__color--white">
        <label htmlFor="white">
          White
          <input type="radio" id="white" name="color"/>
        </label>
      </Col>
      <Col className="sidebar__item__color sidebar__item__color--gray">
        <label htmlFor="gray">
          Gray
          <input type="radio" id="gray" name="color"/>
        </label>
      </Col>
      <Col className="sidebar__item__color sidebar__item__color--red">
        <label htmlFor="red">
          Red
          <input type="radio" id="red" name="color"/>
        </label>
      </Col>
      <Col className="sidebar__item__color sidebar__item__color--black">
        <label htmlFor="black">
          Black
          <input type="radio" id="black" name="color"/>
        </label>
      </Col>
      <Col className="sidebar__item__color sidebar__item__color--blue">
        <label htmlFor="blue">
          Blue
          <input type="radio" id="blue" name="color"/>
        </label>
      </Col>
      <Col className="sidebar__item__color sidebar__item__color--green">
        <label htmlFor="green">
          Green
          <input type="radio" id="green" name="color"/>
        </label>
      </Col>
    </Col>


                    {/* Button type */}

                         <div class="sidebar_item_button">
                            <h4>Popular Size</h4><br/>
                            <div class="sidebar_item_size">
                                <label for="large">
                                    Large
                                </label>
                            </div>
                            <div class="sidebar_item_size">
                                <label for="medium">
                                    Medium
                                </label>
                            </div>
                            <div class="sidebar_item_size">
                                <label for="small">
                                    Small
                                </label>
                            </div>
                            <div class="sidebar_item_size">
                                <label for="tiny">
                                    Tiny
                                </label>
                            </div>
                         </div> 
            </Col>
           
            <Col lg={9} md={7}><h2 className="sidebar_head ">Sale Off</h2>
            <div className="sidebar_line"></div>

            <Row>
             <Col lg={4} md={6} sm={12}>
        <div className="product__discount__item">
          <div className="product__discount__item__pic set-bg" style={{ backgroundImage: 'url(images/categories/cat-1.jpg)',
                                                                                        backgroundSize: 'cover',
                                                                                        backgroundPosition: 'center',
                                                                                        width: '100%',
           }}>
            {/* <div className="product__discount__percent">-20%</div> */}
            <ul className="product__item__pic__hover">
                            <li><a href="#"><FaHeart /></a></li>
                            <li><a href="#"><FaRetweet /></a></li>
                            <li><a href="#"><MdShoppingCart /></a></li>

            </ul>
          </div>
          <div className="product__discount__item__text">
            <span>Dried Fruit</span>
            <h5><a href="#">Raisin nuts</a></h5>
            <div className="product__item__price">$30.00 <span>$36.00</span></div>
          </div>
        </div>
      </Col>
      <Col lg={4} md={6} sm={12}>
        <div className="product__discount__item">
          <div className="product__discount__item__pic set-bg" style={{ backgroundImage: 'url(images/categories/cat-2.jpg)',
                                                                                        backgroundSize: 'cover',
                                                                                        backgroundPosition: 'center',
                                                                                        width: '100%',
           }}>
            {/* <div className="product__discount__percent">-20%</div> */}
            <ul className="product__item__pic__hover">
                        <li><a href="#"><FaHeart /></a></li>
                        <li><a href="#"><FaRetweet /></a></li>
                        <li><a href="#"><MdShoppingCart /></a></li>

            </ul>
          </div>
          <div className="product__discount__item__text">
            <span>Vegetables</span>
            <h5><a href="#">Vegetables package</a></h5>
            <div className="product__item__price">$30.00 <span>$36.00</span></div>
          </div>
        </div>
      </Col>
      <Col lg={4} md={6} sm={12}>
        <div className="product__discount__item">
          <div className="product__discount__item__pic set-bg" style={{ backgroundImage: 'url(images/categories/cat-3.jpg)',
                                                                                        backgroundSize: 'cover',
                                                                                        backgroundPosition: 'center',
                                                                                        width: '100%',
           }}>
            {/* <div className="product__discount__percent">-20%</div> */}
            <ul className="product__item__pic__hover">
                        <li><a href="#"><FaHeart /></a></li>
                        <li><a href="#"><FaRetweet /></a></li>
                        <li><a href="#"><MdShoppingCart /></a></li>

            </ul>
          </div>
          <div className="product__discount__item__text">
            <span>Dried Fruit</span>
            <h5><a href="#">Mixed Fruits</a></h5>
            <div className="product__item__price">$30.00 <span>$36.00</span></div>
          </div>
        </div><br/><br/><br/>
      </Col>
      <hr/>
       </Row>

                <Row>
                    <Col lg={4} md={5}>
                    <div className="sort_item text-center">
                    <span className="sort_item_name">Sort By</span>
                    <select className="sort_item_select ps-3 ">
                        <option value="0">Default</option>
                        <option value="0">Default</option>
                    </select>
                    </div>
                    </Col>

                    <Col lg={4} md={4}>
                    <div className="sort_product text-center pt-1">
                    <h6><span className="sort_product_span">16</span>
                    <span className="sort_product_head ps-3 ">Product found</span></h6>
                    </div>
                    </Col>

                    <Col lg={4} md={3}>
                    <div className="sort_icon text-center">
                        <span className=""><TbLayoutGridFilled /></span>    
                        <span className="ps-3"> <TfiMenuAlt /></span>
                    </div><br/><br/><br/>
                    </Col>
                </Row>


                <Row>
             <Col lg={4} md={6} sm={12}>
        <div className="product__discount__item">
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
      <Col lg={4} md={6} sm={12}>
        <div className="product__discount__item">
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
      <Col lg={4} md={6} sm={12}>
        <div className="product__discount__item">
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
      <Col lg={4} md={6} sm={12}>
        <div className="product__discount__item">
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
      <Col lg={4} md={6} sm={12}>
        <div className="product__discount__item">
          <div className="product__discount__item__pic set-bg" style={{ backgroundImage: 'url(images/categories/cat-5.jpg)',
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
      <Col lg={4} md={6} sm={12}>
        <div className="product__discount__item">
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
                <h5><a href="#">Mixed Fruits</a></h5>
            <div className="product__item__price">$30.00 </div>
          </div>
        </div><br/>
      </Col>
      <Col lg={4} md={6} sm={12}>
        <div className="product__discount__item">
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
            <h5><a href="#">Raisin nuts</a></h5>
            <div className="product__item__price">$30.00 </div>
          </div>
        </div>
      </Col>
      <Col lg={4} md={6} sm={12}>
        <div className="product__discount__item">
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
            <h5><a href="#">Vegetables package</a></h5>
            <div className="product__item__price">$30.00</div>
          </div>
        </div>
      </Col>
      <Col lg={4} md={6} sm={12}>
        <div className="product__discount__item">
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
                <h5><a href="#">Mixed Fruits</a></h5>
            <div className="product__item__price">$30.00 </div>
          </div>
        </div><br/>
      </Col>
      <Col lg={4} md={6} sm={12}>
        <div className="product__discount__item">
          <div className="product__discount__item__pic set-bg" style={{ backgroundImage: 'url(images/categories/cat-5.jpg)',
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
      <Col lg={4} md={6} sm={12}>
        <div className="product__discount__item">
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
            <h5><a href="#">Vegetables package</a></h5>
            <div className="product__item__price">$30.00</div>
          </div>
        </div>
      </Col>
      <Col lg={4} md={6} sm={12}>
        <div className="product__discount__item">
          <div className="product__discount__item__pic set-bg" style={{     backgroundImage: 'url(images/categories/cat-2.jpg)',
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
        </div><br/><br/><br/>
      </Col>
       </Row>


       </Col>
        </Row>
         </Container>

        </div>
        </div>
        <Footer/>
        </>
    );
}

export default Shopgrid;
