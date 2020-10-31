import React from 'react';
import './WhyChooseUs.css';
import icon1 from '../../../Image_Icon/wcu1.png'
import icon2 from '../../../Image_Icon/wcu2.png'
import icon3 from '../../../Image_Icon/wcu3.png'

const WhyChooseUs = () => {
    return (
        <div className="wcs-root container py-5">
            <h1 className="text-warning text-center mt-2">WHY <span className="text-dark">CHOOSE US</span></h1>
            <div className="row d-flex align-items-center mt-5 pt-5">
                <div className="col-md-4 text-center">
                    <div className="p-4 shadow wcu-card my-3">
                        <div>
                            <img src={icon1} alt=""/>
                            <h2 className="mt-5">FREE FITNESS TRAINING</h2>
                            <p><small>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati aspernatur facere dolor eligendi natus cumque ullam nobis veritatis! Qui, possimus?</small></p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 text-center">
                    <div className="p-4 shadow wcu-card my-3">
                        <div>
                            <img src={icon2} alt=""/>
                            <h2 className="mt-5">TONS OF CARDIO & STRENGTH</h2>
                            <p><small>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati aspernatur facere dolor eligendi natus cumque ullam nobis veritatis! Qui, possimus?</small></p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 text-center">
                    <div className="p-4 shadow wcu-card my-3">
                        <div>
                            <img src={icon3} alt=""/>
                            <h2 className="mt-5">NO COMMITMENT MEMBERSHIPS</h2>
                            <p><small>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati aspernatur facere dolor eligendi natus cumque ullam nobis veritatis! Qui, possimus?</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;