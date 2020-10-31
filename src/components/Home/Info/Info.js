import React from 'react';
import './Info.css'
import icon1 from '../../../Image_Icon/icon1.png'
import icon2 from '../../../Image_Icon/icon2.png'
import icon3 from '../../../Image_Icon/icon3.png'
import bg1 from '../../../Image_Icon/bg-card-01.png'
import bg2 from '../../../Image_Icon/bg-card-02.png'
import bg3 from '../../../Image_Icon/bg-card-03.png'

const Info = () => {
  
    return (
        <div className="info-root container mt-0">
            <div className="row mt-3">
                <div className="col-md-4">
                    <div className="card-1  my-5 p-5 mx-1">
                        <img className="mb-1" src={icon1} alt=""/>
                        <h1 className="mt-4">PROGRESSION</h1>
                        <p><small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ratione error tenetur molestias. Beatae, exercitationem a? Dolorum, nemo? Excepturi tenetur doloremque molestias esse minima itaque assumenda inventore ut officia nisi?</small></p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card-2 my-5 p-5 mx-1">
                        <img className="mb-1" src={icon2} alt=""/>
                        <h1 className="mt-4">WORKOUT</h1>
                        <p><small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ratione error tenetur molestias. Beatae, exercitationem a? Dolorum, nemo? Excepturi tenetur doloremque molestias esse minima itaque assumenda inventore ut officia nisi?</small></p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card-3 my-5 p-5 mx-1">
                        <img className="mb-1" src={icon3} alt=""/>
                        <h1 className="mt-4">NUTRITION</h1>
                        <p><small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ratione error tenetur molestias. Beatae, exercitationem a? Dolorum, nemo? Excepturi tenetur doloremque molestias esse minima itaque assumenda inventore ut officia nisi?</small></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Info;