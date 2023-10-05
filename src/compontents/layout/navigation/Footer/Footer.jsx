import React from 'react';
<<<<<<< HEAD
import './footer.scss';
import { FaCcVisa, FaCcMastercard, FaCcPaypal, FaCcStripe, FaCcApplePay, FaGooglePay } from 'react-icons/fa';
=======
import './footer.scss'
import { FaCcVisa, FaCcMastercard, FaCcPaypal, FaCcStripe, FaCcApplePay, FaGooglePay } from 'react-icons/fa'
>>>>>>> 3ae8ca2bafd16e1e23d7d80b41e33b0bb6aa389a

const Footer = () => {
    return (
    <footer className='main-footer'>
        <div className='main-footer-copyrights'>
<<<<<<< HEAD
            <p className='main-footer-copyrights-p'>© 2023 ALL RIGHTS RESERVED | BY SUNCOFFEE.COM</p>
        </div>
        <div className='main-footer-payments'>
            <ul className='main-footer-payments-list'>
                <li className='main-footer-payments-list-item'><FaCcVisa /></li>
                <li className='main-footer-payments-list-item'><FaCcMastercard /></li>
                <li className='main-footer-payments-list-item'><FaCcPaypal /></li>
                <li className='main-footer-payments-list-item'><FaCcStripe /></li>
                <li className='main-footer-payments-list-item'><FaCcApplePay /></li>
                <li className='main-footer-payments-list-item'><FaGooglePay /></li>
=======
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
>>>>>>> 3ae8ca2bafd16e1e23d7d80b41e33b0bb6aa389a
            </ul>
        </div>
    </footer>
    )
}

export default Footer;