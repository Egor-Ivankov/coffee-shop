import React from 'react';
import './footer.scss';
import { FaCcVisa, FaCcMastercard, FaCcPaypal, FaCcStripe, FaCcApplePay, FaGooglePay } from 'react-icons/fa';

const Footer = () => {
    return (
    <footer className='main-footer'>
        <div className='main-footer-inside'>
            <p className='main-footer-inside-copyrights'>© 2023 ALL RIGHTS RESERVED | BY SUNCOFFEE.COM</p>
            <ul className='main-footer-inside-payments-list'>
                <li className='main-footer-inside-payments-list-item'><FaCcVisa /></li>
                <li className='main-footer-inside-payments-list-item'><FaCcMastercard /></li>
                <li className='main-footer-inside-payments-list-item'><FaCcPaypal /></li>
                <li className='main-footer-inside-payments-list-item'><FaCcStripe /></li>
                <li className='main-footer-inside-payments-list-item'><FaCcApplePay /></li>
                <li className='main-footer-inside-payments-list-item'><FaGooglePay /></li>
            </ul>
        </div>
        
    </footer>
    )
}

export default Footer;