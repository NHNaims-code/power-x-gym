import React from 'react';
import './Header.css'
import Navbar from '../Navbar/Navbar';
import HeaderMain from '../HeaderMain/HeaderMain';

const Header = () => {
    return (
        <div className="header-root">
            <div className="container m-0 mx-auto">
                <Navbar></Navbar>
                <HeaderMain></HeaderMain>
            </div>
        </div>
    );
};

export default Header;