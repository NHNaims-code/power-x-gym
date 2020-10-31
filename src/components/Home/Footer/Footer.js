import React from 'react';
import './Footer.css';
import youtube from '../../../Image_Icon/bxl-youtube.png'
import facebook from '../../../Image_Icon/bxl-facebook.png'
import instagram from '../../../Image_Icon/bxl-instagram.png'
import twitter from '../../../Image_Icon/bxl-twitter.png'
import whatsapp from '../../../Image_Icon/bxl-whatsapp.png'

const Footer = () => {
    return (
        <div className="footer-root">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 pt-5">
                        <a class="navbar-brand text-white  main-logo" href="#">POWER <span className="text-warning">X</span></a>
                    </div>
                    <div className="col-md-5 pt-5">
                        <div className="row">
                            <div className="col-md-4">
                                <div>
                                    <ul>
                                        <li className="list-heading"><a href="#">Need Help?</a></li>
                                        <li><a href="#">Help Center</a></li>
                                        <li><a href="#">Email Support</a></li>
                                        <li><a href="#">Live Chat</a></li>
                                        <li><a href="#">Gift Certificates</a></li>
                                        <li><a href="#">Send Us Feedback</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div>
                                    <ul>
                                        <li className="list-heading"><a href="#">Digital Resources</a></li>
                                        <li><a href="#">Articles</a></li>
                                        <li><a href="#">E-books</a></li>
                                    </ul>
                                </div>
                                </div>
                            <div className="col-md-4 ">
                                <div>
                                    <ul>
                                        <li className="list-heading"><a href="#">Connect with Us</a></li>
                                        <li className="d-inline">
                                            <img src={youtube} alt=""/>
                                            <img src={facebook} alt=""/>
                                            <img src={instagram} alt=""/>
                                            <img src={twitter} alt=""/>
                                            <img src={whatsapp} alt=""/>
                                        </li>
                                        <li><a href="#">Forum</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 pt-5 px-5">
                        <div>
                            <ul className="newsletter">
                                <li className="list-heading">Join Our Newsletter</li>
                                <p><small>Get exclusive news, features, and updates from The shredder Weight Loss Academy.</small></p>
                            </ul>
                        </div>
                    </div>
                </div>
                <p className="text-center mt-5 pt-3">
                    <small>&copy; {new Date().getFullYear()} Power X Gym. All Rights Reserved.</small>
                </p>
            </div>
        </div>
    );
};

export default Footer;