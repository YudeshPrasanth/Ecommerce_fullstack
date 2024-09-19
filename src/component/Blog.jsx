import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { FaPhone } from "react-icons/fa6";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaRegCalendar } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { LiaSearchSolid } from "react-icons/lia";
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "./Header";
import Footer from "./Footer";

const Blog = () => {
  return (
    <>
    <Header/>
 
    <div>

      {/* Hero Section Begin */}
      <section className="hero hero-normal">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="hero__categories">
                <div className="hero__categories__all">
                  <i className="fa fa-bars"></i>
                  <span>All departments</span>
                </div>
                <ul>
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

      {/* Breadcrumb Section Begin */}
          <div className="breadcrumb-section set-bg" style={{ backgroundImage: `url('images/homeminbanner.jpg')` ,height:'150px'}}>
        <Container>
        <Row>
            <Col lg={12}><h2 className="shopbg_text text-center ">Blog</h2></Col>
            </Row>
            <Row>
            <Col lg={12}><p className="shopbg_para text-center">Home- Blog </p></Col>
        </Row>
        </Container>
        </div>
        <div className="sidebar_space">

        </div>


      {/* Blog Section Begin */}
      <section className="blog spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-5">
              <div className="blog__sidebar">
                <div className="blog__sidebar__search">
                  <form action="#">
                    <input type="text" placeholder="Search..." />
                    <button type="submit"><LiaSearchSolid /></button>
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
                    {recentNewsItems.map((item, index) => (
                      <a key={index} href="#" className="blog__sidebar__recent__item">
                        <div className="blog__sidebar__recent__item__pic">
                          <img src={item.imgSrc} alt="" />
                        </div>
                        <div className="blog__sidebar__recent__item__text">
                          <h6>{item.title}</h6>
                          <span>{item.date}</span>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
                <div className="blog__sidebar__item">
                  <h4>Search By</h4>
                  <div className="blog__sidebar__item__tags">
                    {tags.map((tag, index) => (
                      <a key={index} href="#">{tag}</a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-7">
              <div className="row">
                {blogItems.map((item, index) => (
                  <div key={index} className="col-lg-6 col-md-6 col-sm-6">
                    <div className="blog__item">
                      <div className="blog__item__pic">
                        <img src={item.imgSrc} alt="" />
                      </div>
                      <div className="blog__item__text">
                        <ul>
                          <li><FaRegCalendar /> {item.date}</li>
                          
                          <li><FaRegComment /> {item.comments}</li>
                        </ul>
                        <h5><a href="#">{item.title}</a></h5>
                        <p>{item.description}</p>
                        <a href="#" className="blog__btn">READ MORE <IoIosArrowRoundForward /></a>
                      </div>
                    </div>
                  </div>
                ))}
                {/* <div className="col-lg-12">
                  <div className="product__pagination blog__pagination">
                    <a href="#">1</a>
                    <a href="#">2</a>
                    <a href="#">3</a>
                    <a href="#"><IoIosArrowRoundForward /></a>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <Footer/>
    </>
  );
};

const recentNewsItems = [
  {
    imgSrc: "images/blog/sr-1.jpg",
    title: "09 Kinds Of Vegetables Protect The Liver",
    date: "MAR 05, 2019"
  },
  {
    imgSrc: "images/blog/sr-2.jpg",
    title: "Tips You To Balance Nutrition Meal Day",
    date: "MAR 05, 2019"
  },
  {
    imgSrc: "images/blog/sr-3.jpg",
    title: "4 Principles Help You Lose Weight With Vegetables",
    date: "MAR 05, 2019"
  }
];

const tags = ["Apple", "Beauty", "Vegetables", "Fruit", "Healthy Food", "Lifestyle"];

const blogItems = [
  {
    imgSrc: "images/blog/orange-1.jpg",
    date: "May 4,2019",
    comments: 5,
    title: "6 ways to prepare breakfast for 30",
    description: "Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat"
  },
  {
    imgSrc: "images/blog/beans-2.jpg",
    date: "May 4,2019",
    comments: 5,
    title: "Visit the clean farm in the US",
    description: "Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat"
  },
  {
    imgSrc: "images/blog/pomo-3.avif",
    date: "May 4,2019",
    comments: 5,
    title: "Cooking tips make cooking simple",
    description: "Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat"
  },
  {
    imgSrc: "images/blog/mix02-6.jpg",
    date: "May 4,2019",
    comments: 5,
    title: "The Moment You Need To Remove Garlic From The Menu",
    description: "Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat"
  },
  {
    imgSrc: "images/blog/mix-5.jpg",
    date: "May 4,2019",
    comments: 5,
    title: "Cooking tips make cooking simple",
    description: "Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat"
  },
  {
    imgSrc: "images/blog/kiwi-4.jpg",
    date: "May 4,2019",
    comments: 5,
    title: "Cooking tips make cooking simple",
    description: "Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat"
  }
  
];

export default Blog;
