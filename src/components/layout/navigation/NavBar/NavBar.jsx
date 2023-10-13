import React from 'react';
import logo from '@assets/logo/logo.png';
import { FiShoppingCart } from 'react-icons/fi';
import './navBar.scss';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className='top-nav-bar'>
                <img className='top-nav-bar-logo' src={logo} alt="logo"/>
                <ul className='top-nav-bar-list'>
                    <li className='top-nav-bar-list-item'><Link to="/">Home</Link></li>
                    <li className='top-nav-bar-list-item'><Link to="/aboutUs">About us</Link></li>
                    <li className='top-nav-bar-list-item'><Link to="/products">Products</Link></li>
                    <li className='top-nav-bar-list-item'><Link to="/becomeAPartner">Become a partner</Link></li>
                    <li className='top-nav-bar-list-item'><Link to="/enquiry">Enquiry</Link></li>
                    <li className='top-nav-bar-list-item'><Link to="/login">Login</Link></li>
                    <li className='top-nav-bar-list-item'>
                        <FiShoppingCart className='top-nav-bar-list-item-icon' />
                    </li>
                </ul>
        </nav>
    );
}

export default NavBar;




