import React from 'react';
import './OCMain.css';
import ocCard1 from '../../../Image_Icon/oc-card1.png'
import ocCard2 from '../../../Image_Icon/oc-card2.png'
import ocCard3 from '../../../Image_Icon/oc-card3.png'
import ocCard4 from '../../../Image_Icon/oc-card4.png'
import ocCard5 from '../../../Image_Icon/oc-card5.png'
import ocCard6 from '../../../Image_Icon/oc-card6.png'

const OCMain = () => {
    return (
        <div className="ocmain-root py-5 container">
           <div className="row my-3 pt-1">
               <div className="col-md-4">
                    <div className="oc-card-1">
                        <h2>PSYCHO TRAINING <i class="fa fa-arrow-right" aria-hidden="true"></i></h2>
                    </div>
               </div>
               <div className="col-md-4">
                    <div className="oc-card-2">
                        <h2>SELF DEFENSE <i class="fa fa-arrow-right" aria-hidden="true"></i></h2>
                    </div>
               </div>
               <div className="col-md-4">
                    <div className="oc-card-3">
                         <h2>ADVANCE GYM <i class="fa fa-arrow-right" aria-hidden="true"></i></h2>
                    </div>
               </div>
           </div>

           <div className="row my-5 pb-5 pt-3">
                <div className="col-md-4">
                    <div className="oc-card-4">
                        <h2>CARDIO TRAINING <i class="fa fa-arrow-right" aria-hidden="true"></i></h2>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="oc-card-5">
                        <h2>STRENGTH TRAINING <i class="fa fa-arrow-right" aria-hidden="true"></i></h2>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="oc-card-6">
                        <h2>PSYCHO TRAINING <i class="fa fa-arrow-right" aria-hidden="true"></i></h2>
                    </div>
                </div>
           </div>
        </div>
    );
};

export default OCMain;