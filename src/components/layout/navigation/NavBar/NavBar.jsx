import React from 'react';
import logo from '@assets/logo/logo.png';
import { FiShoppingCart } from 'react-icons/fi';
import './navBar.scss';

const NavBar = () => {
    return (
        <nav className='top-nav-bar'>
                <img className='top-nav-bar-logo' src={logo} alt="logo"/>
                <ul className='top-nav-bar-list'>
                    <li className='top-nav-bar-list-item'>Home</li>
                    <li className='top-nav-bar-list-item'>About us</li>
                    <li className='top-nav-bar-list-item'>Products</li>
                    <li className='top-nav-bar-list-item'>Become a partner</li>
                    <li className='top-nav-bar-list-item'>Enquiry</li>
                    <li className='top-nav-bar-list-item'>Login</li>
                    <li className='top-nav-bar-list-item'>
                        <FiShoppingCart className='top-nav-bar-list-item-icon' />
                    </li>
                </ul>
        </nav>
    );
}

export default NavBar;




