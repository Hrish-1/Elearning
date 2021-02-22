import React from "react";
import './Foot.css'
import { BsCodeSlash } from "react-icons/bs";
const Foot = () => {
    return (
        <section id="footer">
    	<div class="container footer-row">
    		<hr />
    		<div class="footer-left-col">
    			<div class="footer-links">
    				<div class="link-title">
    					<h4>Product</h4>
    					<small>Our Plan</small><br />
    					<small>Free Trial</small>
    				</div>
                    <div class="link-title">
    					<h4>About us</h4>
    					<small>Request Demo</small><br />
    					<small>FAQs</small>
    				</div>
    				<div class="link-title">
    					<h4>Support</h4>
    					<small>Features</small><br />
    					<small>Contact Us</small>
    				</div>
    				<div class="link-title">
    					<h4>Explore</h4>
    					<small>Find a nonprofit</small><br />
    					<small>Corporate Solution</small>
    				</div>
    			</div>
    		</div>
    		<div class="footer-right-col">
    			<div class="footer-info">
    				<div class="copyright-text">
    					<small>support@xypo.com</small><br />
    					<small>copyright 2020 Xypo</small>
    				</div>
    				<div class="footer-logo">
    					<BsCodeSlash />
    				</div>
    			</div>
    		</div>
    	</div>
    </section>
    )
}

export default Foot