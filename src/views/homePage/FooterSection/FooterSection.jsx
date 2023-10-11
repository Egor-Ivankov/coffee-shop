import React from 'react';
import "./footerSection.scss";
import footerRope from '@assets/img/rope.png';
import teaBag from '@assets/img/tea-bag.png';
import coffeeCup from '@assets/img/coffee-cup.png';
import { FaFacebookF, FaTwitter, FaWhatsapp, FaYoutube, FaInstagram } from 'react-icons/fa';

const FooterSection = () => {
    return (
        <section className='footer-section'>
            <img src={footerRope} className='footer-section-rope' alt='rope'/>
            <div className='footer-section-block'>
                <div className='footer-section-block-info'>
                    <div className='footer-section-block-info-locate'>
                        <h3 className='footer-section-block-info-locate-h3'>LOCATE</h3>
                        <p className='footer-section-block-info-locate-p'>Warehouse 12, Street 6A
                        <br /> Behind Times Square Center,
                        <br /> Phase 1 AI Quoz, Dubai, UAE</p>
                        <br />
                        <p className='footer-section-block-info-locate-p'>+971 55 900 0448</p>
                        <p className='footer-section-block-info-locate-p'>info@suncoffee.com</p>
                    </div>

                    <div className='footer-section-block-info-our-terms'>
                        <h3 className='footer-section-block-info-locate-h3'>OUR TERMS</h3>
                        <p className='footer-section-block-info-locate-link'>Terms Of Service</p>
                        <p className='footer-section-block-info-locate-link'>Refund & Cancellation</p>
                        <p className='footer-section-block-info-locate-link'>Privacy Policy</p>
                        <p className='footer-section-block-info-locate-link'>Delivery Information</p>
                    </div>

                    <div className='footer-section-block-info-get-connected'>
                        <h3 className='footer-section-block-info-get-connected-h3'>GET CONNECTED</h3>
                        <ul className='footer-section-block-info-get-connected-list'>
                            <li className='footer-section-block-info-get-connected-list-link'><FaFacebookF /></li>
                            <li className='footer-section-block-info-get-connected-list-link'><FaTwitter /></li>
                            <li className='footer-section-block-info-get-connected-list-link'><FaWhatsapp /></li>
                            <li className='footer-section-block-info-get-connected-list-link'><FaYoutube /></li>
                            <li className='footer-section-block-info-get-connected-list-link'><FaInstagram /></li>
                        </ul>
                    </div>

                    <div className='footer-section-block-info-customer-services'>
                    <h3 className='footer-section-block-info-customer-services-h3'>CUSTOMER SERVICES</h3>
                        <p className='footer-section-block-info-customer-services-link'>Enquiry</p>
                        <p className='footer-section-block-info-customer-services-link'>Returns</p>
                        <p className='footer-section-block-info-customer-services-link'>About Us</p>
                        <p className='footer-section-block-info-customer-services-link'>My Account</p>
                    </div>
                </div>
                <div className='footer-section-block-coffee-tea'>
                <img src={coffeeCup} className='footer-section-block-coffee-tea-coffee-cup' alt="coffee-cup" />
                <img src={teaBag} className='footer-section-block-coffee-tea-tea-bag' alt='tea-bag'/>
                </div>
            </div>
        </section>
    )
}

export default FooterSection