import React from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../Home/Footer/Footer';
import Header from '../Home/Header/Header/Header';
import OCHeader from '../OurClasses/OCHeader/OCHeader';
import './Pricing.css';

const Pricing = () => {
    const history = useHistory();
    return (
        <div>
            <OCHeader title="PRICING PLANS" ></OCHeader>
            <div className="container my-5 pb-5">
            <h1 className="text-center"><span className="text-warning">CHOOSE THE OFFER </span>THAT SUITS YOU</h1>
            <p className="w-50 mx-auto text-center mt-3 mb-3"><small>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate recusandae accusamus ipsum amet consectetur, reiciendis mollitia ipsam? Facere, nesciunt in pariatur officiis culpa nisi sed quia rerum quam aliquid hic.</small></p>

            <div className="row p-row-root">
                <div className="col-md-4 mt-5">
                    <div className="d-flex flex-column align-items-center text-white p-card1 ">
                        <h6 className="text-warning">BILLED MONTHLY</h6>
                        <h2>ADVANCE PLAN</h2>
                        <h1 className="text-warning">$140</h1>
                        <ul>
                            <li><i class="fa fa-check" aria-hidden="true"></i> Mobile-Optimized</li>
                            <li><i class="fa fa-check" aria-hidden="true"></i> Best Hosting</li>
                            <li><i class="fa fa-check" aria-hidden="true"></i> Free Custom</li>
                            <li><i class="fa fa-check" aria-hidden="true"></i> Outstanding</li>
                            <li><i class="fa fa-check" aria-hidden="true"></i> Happy Customers</li>
                        </ul>
                            <h4 onClick={()=>{history.push('/membership')}} className="btn-warning w-50 text-center py-1 btn-pricing">PURCHASE</h4>
                        </div>
                    </div>
                    <div className="col-md-4 mt-5">
                        <div className="p-card2 d-flex flex-column align-items-center p-4 text-white">
                            <h6 className="text-warning">BILLED MONTHLY</h6>
                            <h2>BASIC PLAN</h2>
                            <h1 className="text-warning">$140</h1>
                            <ul>
                                <li><i class="fa fa-check" aria-hidden="true"></i> Mobile-Optimized</li>
                                <li><i class="fa fa-check" aria-hidden="true"></i> Best Hosting</li>
                                <li><i class="fa fa-check" aria-hidden="true"></i> Free Custom</li>
                                <li><i class="fa fa-check" aria-hidden="true"></i> Outstanding</li>
                                <li><i class="fa fa-check" aria-hidden="true"></i> Happy Customers</li>
                            </ul>
                            <h4 onClick={()=>{history.push('/membership')}} className="btn-warning w-50 text-center py-1 btn-pricing">PURCHASE</h4>
                        </div>
                    </div>
                    <div className="col-md-4 mt-5">
                        <div className="p-card3 d-flex flex-column align-items-center p-4 text-white">
                            <h6 className="text-warning">BILLED MONTHLY</h6>
                            <h2>BEGINERS</h2>
                            <h1 className="text-warning">$140</h1>
                            <ul>
                                <li><i class="fa fa-check" aria-hidden="true"></i> Mobile-Optimized</li>
                                <li><i class="fa fa-check" aria-hidden="true"></i> Best Hosting</li>
                                <li><i class="fa fa-check" aria-hidden="true"></i> Free Custom</li>
                                <li><i class="fa fa-check" aria-hidden="true"></i> Outstanding</li>
                                <li><i class="fa fa-check" aria-hidden="true"></i> Happy Customers</li>
                            </ul>
                            <h4 onClick={()=>{history.push('/membership')}} className="btn-warning w-50 text-center py-1 btn-pricing">PURCHASE</h4>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Pricing;