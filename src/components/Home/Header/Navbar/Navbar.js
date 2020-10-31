import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const history = useHistory()
    return (
        <nav class="navbar navbar-expand-lg navbar-light container pt-3">
        <a onClick={()=> {history.push('/')}} class="navbar-brand text-white main-logo" href="#">POWER <span className="text-warning">X</span></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto nav-ul">
            <li class="nav-item  active">
                <Link to="/">
                <a class="nav-link text-white mr-3" href="#">Home <span class="sr-only">(current)</span></a>
                </Link>
            </li>
            {/* <li class="nav-item">
                
                    <a class="nav-link text-white mr-3" href="#">Services</a>
                
            </li> */}
            <li class="nav-item">
                <Link to="/our-classes">
                    <a class="nav-link text-white mr-3" href="#">Our Classes</a>
                </Link>
            </li>
            <li class="nav-item">
                <Link to="/about">
                <a class="nav-link text-white mr-3" href="#aboutUs">About Us</a>
                </Link>
            </li>
            <li class="nav-item">
                <Link to="blog">
                <a class="nav-link text-white mr-3" href="#">Blog</a>
                </Link>
            </li>
            <li class="nav-item">
                <Link to="/pricing">
                <a class="nav-link text-white mr-3" href="#">Pricing</a>
                </Link>
            </li>
            <li class="nav-item">
                <Link to="/contact">
                <a class="nav-link text-white mr-3" href="#">Contact Us</a>
                </Link>
            </li>
            </ul>
            
        </div>
        </nav>
    );
};

export default Navbar;