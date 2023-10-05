import React from 'react';
import './footer.scss'
import { FaCcVisa, FaCcMastercard, FaCcPaypal, FaCcStripe, FaCcApplePay, FaGooglePay } from 'react-icons/fa'

const Footer = () => {
    return (
    <footer className='main-footer'>
        <div className='main-footer-copyrights'>
            <p>© 2023 ALL RIGHTS RESERVED | BY SUNCOFFEE.COM</p>
        </div>
        <div className='main-footer-payments'>
            <ul className='main-footer-payments-list'>
                <li><FaCcVisa /></li>
                <li><FaCcMastercard /></li>
                <li><FaCcPaypal /></li>
                <li><FaCcStripe /></li>
                <li><FaCcApplePay /></li>
                <li><FaGooglePay /></li>
            </ul>
        </div>
    </footer>
    )
}

export default Footer;