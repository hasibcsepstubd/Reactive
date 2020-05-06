import React from 'react'

const Header = () => {
    return (
		<header>
		    <div class="header-container">
		        <div class="header-top-area default-bg">
		            <div class="container">
		                <div class="row row-75">
                            <div class="header-top-wrap col-12">
                                <div class="row">
                                    
                                    <div class="col-md-4 col-xl-3">
                                        <div class="header-top-left">
                                            <p>CALL US : <a href="/"> +008 12548 658 658</a></p>
                                        </div>
                                    </div>
                                    
                                    <div class="col-md-4 col-xl-6">
                                        <div class="header-top-middle text-center">
                                            <ul class="social-link">
                                                <li><a href="/"><i class="fa fa-facebook"></i></a></li>
                                                <li><a href="/"><i class="fa fa-twitter"></i></a></li>
                                                <li><a href="/"><i class="fa fa-instagram"></i></a></li>
                                                <li><a href="/"><i class="fa fa-google-plus"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    
                                    <div class="col-md-4 col-xl-3">
                                        <div class="header-top-right">
                                            <p>MAIL US :<a href="/">info@example.com</a></p>
                                        </div>
                                    </div>
                                   
                                </div>
                            </div>
		                </div>
		            </div>
		        </div>
		        
		        <div class="header-bottom-area header-sticky">
		            <div class="container">
		                <div class="row align-items-center">
                            
		                    <div class="col-md-3">
		                        <div class="header-logo">
		                            <a href="index.html"><img src="assets/img/logo/logo.png" alt="" /></a>
		                        </div>
		                    </div>
		                    
		                    <div class="col-md-9">
		                        <div class="header-menu-area text-right">
		                            <nav>
		                                <ul class="main-menu">
		                                    <li class="active"><a href="index.html">HOME</a>
		                                       
		                                        <ul>
		                                            <li><a href="index.html">Home Page 1</a></li>
		                                            <li><a href="index-2.html">Home Page 2</a></li>
		                                        </ul>
		                                       
		                                    </li>
		                                    <li><a href="about.html">ABOUT</a></li>
		                                    <li><a href="service.html">PRACTICE  AREA</a></li>
		                                    <li><a href="pricing-plan.html">PRICE</a></li>
		                                    <li><a href="/">PAGES</a>
		                                        
		                                        <ul>
		                                            <li><a href="appointment.html">Appointment</a></li>
		                                            <li><a href="history.html">History</a></li>
		                                            <li><a href="pricing-plan.html">Pricing Plan</a></li>
		                                            <li><a href="single-service.html">Single Service</a></li>
		                                            <li><a href="testimonials.html">Testimonials</a></li>
		                                        </ul>
		                                        
		                                    </li>
		                                    <li><a href="blog.html">BLOG</a>
		                                        
		                                        <ul>
		                                            <li><a href="blog.html">Blog</a></li>
		                                            <li><a href="single-blog.html">Blog details</a></li>
		                                            <li><a href="blog-left-sidebar.html">Blog Left Sidebar</a></li>
		                                            <li><a href="blog-right-sidebar.html">Blog Right Sidebar</a></li>
		                                        </ul>
		                                        
		                                    </li>
		                                    <li><a href="contact.html">CONTACT</a></li>
		                                </ul>
		                            </nav>
		                        </div>
		                    </div>
		                    
		                </div>
		                <div class="row">
                            <div class="col-12">  
                            
                            <div class="mobile-menu d-lg-none d-xl-none"></div>
                            
                            </div>
                        </div>
		            </div>
		        </div>
		        
		    </div>
		</header>
		
    )
}
export default Header;
