import React from 'react'
import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
  Link
} from "react-router-dom";
// import About from './About';
// import Service from './Services';
// import PricingPlan from './Pricing-plan';
// import Appointment from './Appointment';
// import History from './History';
// import SingleService from './Single-service';
// import Testimonials from './Testimonials';
// import Blog from './Blog';
// import SingleBlog from './Single-blog';
// import BlogLeftSidebar from './Blog-left-sidebar';
// import BlogRightSidebar from './Blog-right-sidebar';
// import Contact from './Contact';
// import Home from './index';

const Header = () => {
	
    return (
		<>
		<header>
		    <div className="header-container">
		        <div className="header-top-area default-bg">
		            <div className="container">
		                <div className="row row-75">
                            <div className="header-top-wrap col-12">
                                <div className="row">
                                    
                                    <div className="col-md-4 col-xl-3">
                                        <div className="header-top-left">
                                            <p>CALL US : <a href="/"> +008 12548 658 658</a></p>
                                        </div>
                                    </div>
                                    
                                    <div className="col-md-4 col-xl-6">
                                        <div className="header-top-middle text-center">
                                            <ul className="social-link">
                                                <li><a href="/"><i className="fa fa-facebook"></i></a></li>
                                                <li><a href="/"><i className="fa fa-twitter"></i></a></li>
                                                <li><a href="/"><i className="fa fa-instagram"></i></a></li>
                                                <li><a href="/"><i className="fa fa-google-plus"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    
                                    <div className="col-md-4 col-xl-3">
                                        <div className="header-top-right">
                                            <p>MAIL US :<a href="/">info@example.com</a></p>
                                        </div>
                                    </div>
                                   
                                </div>
                            </div>
		                </div>
		            </div>
		        </div>
				{/* <Router> */}
		        <div className="header-bottom-area header-sticky">
		            <div className="container">
		                <div className="row align-items-center">
                            
		                    <div className="col-md-3">
		                        <div className="header-logo">
		                            <Link to="/"><img src="assets/img/logo/logo.png" alt="" /></Link>
		                        </div>
		                    </div>
		                    
		                    <div className="col-md-9">
		                        <div className="header-menu-area text-right">
		                            <nav>
		                                <ul className="main-menu">
		                                    <li className="active"><Link to="/">HOME</Link>
		                                       
		                                        <ul>
		                                            <li><Link to="/">Home Page 1</Link></li>
		                                            <li><Link to="/">Home Page 2</Link></li>
		                                        </ul>
		                                       
		                                    </li>
		                                    <li><Link to="/about">ABOUT</Link></li>
		                                    <li><Link to="/service">PRACTICE  AREA</Link></li>
		                                    <li><Link to="/pricing-plan">PRICE</Link></li>
		                                    <li><Link to="/">PAGES</Link>
		                                        
		                                        <ul>
		                                            <li><Link to="/appointment">Appointment</Link></li>
		                                            <li><Link to="/history">History</Link></li>
		                                            <li><Link to="/pricing-plan">Pricing Plan</Link></li>
		                                            <li><Link to="/single-service">Single Service</Link></li>
		                                            <li><Link to="/testimonials">Testimonials</Link></li>
		                                        </ul>
		                                        
		                                    </li>
		                                    <li><Link to="/blog">BLOG</Link>
		                                        
		                                        <ul>
		                                            <li><Link to="/blog">Blog</Link></li>
		                                            <li><Link to="/single-blog">Blog details</Link></li>
		                                            <li><Link to="/blog-left-sidebar">Blog Left Sidebar</Link></li>
		                                            <li><Link to="/blog-right-sidebar">Blog Right Sidebar</Link></li>
		                                        </ul>
		                                        
		                                    </li>
		                                    <li><Link to="/contact">CONTACT</Link></li>
		                                </ul>
		                            </nav>
		                        </div>
		                    </div>
		                    
		                </div>
		                <div className="row">
                            <div className="col-12">  
                            
                            <div className="mobile-menu d-lg-none d-xl-none"></div>
                            
                            </div>
                        </div>
		            </div>
					
		        </div>
				{/* </Router> */}
		    </div>
		</header>
		</>
    )
}
export default Header;
