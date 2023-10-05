import React from 'react';
import logo from '../../../../assets/logo/logo.png';
import shoppingCartIcon from '../../../../assets/icons/shopping-cart-2.png';
import './navBar.scss';

const NavBar = () => {
    return (
        <nav>
            <div className='top-nav-bar'>
                <img className='top-nav-bar-logo' src={logo} alt="logo"/>
                <ul className='top-nav-bar-list'>
                    <li className='top-nav-bar-list-item'>Home</li>
                    <li className='top-nav-bar-list-item'>About us</li>
                    <li className='top-nav-bar-list-item'>Products</li>
                    <li className='top-nav-bar-list-item'>Become a partner</li>
                    <li className='top-nav-bar-list-item'>Enquiry</li>
                    <li className='top-nav-bar-list-item'>Login</li>
                    <li className='top-nav-bar-list-item'>
                        <img 
                        className='top-nav-bar-list-item-icon'
                        src={shoppingCartIcon} alt="shopping-cart-icon" 
                        />
                    </li>
                    {/* edit some changes */}
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;
