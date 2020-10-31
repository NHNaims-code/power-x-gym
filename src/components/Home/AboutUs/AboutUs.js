import React from 'react';
import './AboutUs.css';
import img from '../../../Image_Icon/about-us.png'

const AboutUs = () => {
    return (
        <div className="container about-root mt-5" id="aboutUs">
            <div className="row mt-5">
                <div className="col-md-6">
                    <div>
                        <img className="img-fluid w-100 py-5" src={img} alt=""/>
                    </div>
                </div>
                <div className="col-md-6 p-5 about-us-info">
                    <h1 className="text-secondary">ABOUT US</h1>
                    <h2 className="text-warning">WE ARE HERE TO DREAM!</h2>
                    <h2>OUR TEAM IS HERE SURVE YOU.</h2>
                    <p><small>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem, quos accusantium sunt officiis soluta earum aliquid voluptates minus. Dolore nostrum adipisci quasi suscipit error distinctio! Nobis, expedita eos? Aliquam, nam ipsam exercitationem officia mollitia distinctio reprehenderit, earum, saepe illum accusantium enim repudiandae. Magni, unde dolores necessitatibus dicta iusto quibusdam perferendis?</small></p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;