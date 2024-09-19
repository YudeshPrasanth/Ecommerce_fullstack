import React from 'react';
import { FaPhone } from "react-icons/fa6";
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaBars } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import {  FaRetweet } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import Header from '../Header';
import Footer from '../Footer';


const Berries = () => {
    return (
      <>
    <Header/>
        <div>
                  <section className="hero hero-normal">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="hero__categories">
                <div className="hero__categories__all">
                  <i className="fa fa-bars"></i>
                  <span>All departments</span>
                </div>
                {/* <ul>
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
                    <input type="text" placeholder="What do you need?" />
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

      <section className="breadcrumb-section set-bg" style={{ backgroundImage: `url('images/homeminbanner.jpg')` ,height:'150px'}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="breadcrumb__text">
                <h2>Fresh Berries</h2>
                <div className="breadcrumb__option">
                  <a href="./index.html">Home - </a>
                  <span className='breadcrumb__span'>    Fresh Berries</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="sidebar_space">

</div>
        <Container>
        <Row>
        <Col lg={3} md={5}>
                <div className="sidebar_item"> 
                    <h4 >Department</h4>
                <ul>
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

                <div class="sidebar_item_button">
                    <h4 style={{marginTop:"-150px"}}>Popular Size</h4><br/>
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
          <div className="product__discount__item__pic set-bg" style={{ backgroundImage: 'url(images/department/berrie/berrie01.jpg)',
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
            <h5><a href="#">Blueberry</a></h5>
            <div className="product__item__price">$30.00 </div>
          </div>
        </div>
      </Col>
      <Col lg={4} md={6} sm={12}>
        <div className="product__discount__item">
          <div className="product__discount__item__pic set-bg" style={{ backgroundImage: 'url(images/department/berrie/berrie02.jpeg)',
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
            <h5><a href="#">Blackberry</a></h5>
            <div className="product__item__price">$30.00</div>
          </div>
        </div>
      </Col>
      <Col lg={4} md={6} sm={12}>
        <div className="product__discount__item">
          <div className="product__discount__item__pic set-bg" style={{ backgroundImage: 'url(images/department/berrie/berrie03.jpeg)',
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
                <h5><a href="#">Acaiberry</a></h5>
            <div className="product__item__price">$30.00 </div>
          </div>
        </div><br/>
      </Col>
      <Col lg={4} md={6} sm={12}>
        <div className="product__discount__item">
          <div className="product__discount__item__pic set-bg" style={{ backgroundImage: 'url(images/department/berrie/berrie04.jpg)',
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
            <h5><a href="#">Starberry</a></h5>
            <div className="product__item__price">$30.00 </div>
          </div>
        </div>
      </Col>
      <Col lg={4} md={6} sm={12}>
        <div className="product__discount__item">
          <div className="product__discount__item__pic set-bg" style={{ backgroundImage: 'url(images/department/berrie/berrie05.jpeg)',
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
            <h5><a href="#">Tayberry</a></h5>
            <div className="product__item__price">$30.00</div>
          </div>
        </div>
      </Col>
      <Col lg={4} md={6} sm={12}>
        <div className="product__discount__item">
          <div className="product__discount__item__pic set-bg" style={{ backgroundImage: 'url(images/department/berrie/berrie06.jpg)',
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
                <h5><a href="#">Gojiberry</a></h5>
            <div className="product__item__price">$30.00 </div>
          </div>
        </div><br/>
      </Col>
      <Col lg={4} md={6} sm={12}>
        <div className="product__discount__item">
          <div className="product__discount__item__pic set-bg" style={{ backgroundImage: 'url(images/department/berrie/berrie07.jpg)',
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
            <h5><a href="#">Gooseberry</a></h5>
            <div className="product__item__price">$30.00 </div>
          </div>
        </div>
      </Col>
      <Col lg={4} md={6} sm={12}>
        <div className="product__discount__item">
          <div className="product__discount__item__pic set-bg" style={{ backgroundImage: 'url(images/department/berrie/berrie08.jpg)',
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
            <h5><a href="#">CapeGooseberry</a></h5>
            <div className="product__item__price">$30.00</div>
          </div>
        </div>
      </Col>
      <Col lg={4} md={6} sm={12}>
        <div className="product__discount__item">
          <div className="product__discount__item__pic set-bg" style={{ backgroundImage: 'url(images/department/berrie/berrie09.jpg)',
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
                <h5><a href="#">Yellowberry</a></h5>
            <div className="product__item__price">$30.00 </div>
          </div>
        </div><br/>
      </Col>
       </Row>

    </Col>
    </Row>
    </Container>

        </div>
        <Footer/>
        </>
    );
};

    export default Berries;