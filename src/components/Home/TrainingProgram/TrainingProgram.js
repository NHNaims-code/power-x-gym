import React from 'react';
import './TrainingProgram.css'

const TrainingProgram = () => {
    return (
        <div className="training-program-root container my-5">
            <h1 className="text-center pt-5">TRAINING <span className="text-warning">PROGRAMS</span></h1>
            <div className="row mt-5">
                <div className="col-md-6 mt-3">
                    <div className="tp-card-1">
                        <h2 className="bg-warning d-inline px-4 py-1 rounded">YOGA TRAINING SESSION <i class="fa fa-arrow-right" aria-hidden="true"></i></h2>
                    </div>
                </div>
                <div className="col-md-6 mt-3">
                    <div className="tp-card-2">
                        <h2 className="bg-warning d-inline px-4 py-1 rounded">CARDIO TRAINING SESSION <i class="fa fa-arrow-right" aria-hidden="true"></i></h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrainingProgram;