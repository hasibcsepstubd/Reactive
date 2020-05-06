import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Contact = () => {
    return (
        <div>
            <Header />
            
		<div class="page-banner-area bg-img-3 pt-95 pb-90">
		    <div class="container">
		        <div class="row">
		            <div class="page-banner-content col-12 text-center">
                        <h2>Contact us</h2>
                        <p>Adalot is the best Law Firm. We solve your problems  tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam</p>
		                <ul class="breadcrumb-pagination">
		                    <li><a href="index.html">Home</a></li>
		                    <li>Contact</li>
		                </ul>
		            </div>
		        </div>
		    </div>
		</div>
		
		<div class="contact-us-area pt-120">
		    <div class="container">
		        <div class="row">
                    
                    <div class="col-md-5 contact-address">
                        <div class="contact-information">
                            <ul>
                                <li>
                                    <h5>Address</h5>
                                    <p>256, Centerl Town, Main Street Hilton Tower, New Yourk</p>
                                </li>
                                <li>
                                    <h5>Phone</h5>
                                    <p><a href="tel:+8801265897568">+8801265 897 568</a><br />
                                       <a href="tel:+8801265897568">+8801235 598 656</a>
                                    </p>
                                </li>
                                <li>
                                    <h5>Web</h5>
                                    <p><a href="/">info@yourweb.com</a>
                                        <a href="/">www.yourweb.com</a>
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                   
		            <div class="col-md-7">
		                <div class="contact-form">
		                    <div class="contact-form-title">
		                        <h3>Get in Touch </h3>
		                        <p>Terms & Conditions deleniti atque corrupti sdolores et quas molestias cepturi sint  eca itate non similique sunt in culpa modi tempora incidunt  obtain pain </p>
		                    </div>
		                    <form id="contact-form" action="mail.php" method="post">
		                        <div class="row">
		                            <div class="col-md-6">
		                                <div class="single-input">
		                                    <input name="name" placeholder="Name" type="text " />
		                                </div>
		                            </div>
		                            <div class="col-md-6">
		                                <div class="single-input">
		                                    <input name="email" placeholder="E-mail" type="email" />
		                                </div>
		                            </div>
		                            <div class="col-md-6">
		                                <div class="single-input">
		                                    <input name="phone" placeholder="Phone" type="text " />
		                                </div>
		                            </div>
		                            <div class="col-md-6">
		                                <div class="single-input">
		                                    <input name="subject" placeholder="Subject" type="text " />
		                                </div>
		                            </div>
		                            <div class="col-md-12">
		                                <div class="single-input">
		                                    <textarea name="message" cols="10" rows="4" placeholder="Message"></textarea>
		                                </div>
		                            </div>
		                            <div class="col-md-12">
		                                <div class="single-input">
		                                    <button class="sent-btn" type="submit">Submit</button>
		                                </div>
		                            </div>
		                        </div>
		                    </form>
		                    <p class="form-messege"></p>
		                </div>
		            </div>
		            
		        </div>
		    </div>
		</div>
		
		<div class="brand-area pt-120 pb-115">
		    <div class="container">
		        <div class="row">
		            <div class="col-12">
		                <div class="brand-active owl-carousel">
		                    
		                    <div class="single-brand">
		                      <a href="/"><img src="assets/img/brand/brand1.jpg" alt="" /></a>
		                    </div>
		                    
		                    <div class="single-brand">
		                      <a href="/"><img src="assets/img/brand/brand2.jpg" alt="" /></a>
		                    </div>
		                    
		                    <div class="single-brand">
		                      <a href="/"><img src="assets/img/brand/brand3.jpg" alt="" /></a>
		                    </div>
		                    
		                    <div class="single-brand">
		                      <a href="/"><img src="assets/img/brand/brand4.jpg" alt="" /></a>
		                    </div>
		                    
		                    <div class="single-brand">
		                      <a href="/"><img src="assets/img/brand/brand5.jpg" alt="" /></a>
		                    </div>
		                    
		                </div>
		            </div>
		        </div>
		    </div>
		</div>
        <Footer />
		</div>
        
    )
}

export default Contact;
