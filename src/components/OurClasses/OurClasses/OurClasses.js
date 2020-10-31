import React from 'react';
import Footer from '../../Home/Footer/Footer';
import TrainingProgram from '../../Home/TrainingProgram/TrainingProgram';
import MemberShip from '../../MemberShip/MemberShip';
import Pricing from '../../Pricing/Pricing';
import TrainingProfile from '../../TrainingProfile/TrainingProfile';
import OCHeader from '../OCHeader/OCHeader';
import OCMain from '../OCMain/OCMain';
import './OurClasses.css';

const OurClasses = () => {
    return (
        <div>
            <OCHeader title="OUR CLASSES"></OCHeader>
            <OCMain></OCMain>
            {/* <TrainingProfile></TrainingProfile> */}
            {/* <Pricing></Pricing> */}
            {/* <MemberShip></MemberShip> */}
            <Footer></Footer>
        </div>
    );
};

export default OurClasses;