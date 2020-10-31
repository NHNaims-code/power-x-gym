import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Footer from '../Footer/Footer';
import Header from '../Header/Header/Header';
import Info from '../Info/Info';
import TrainingProgram from '../TrainingProgram/TrainingProgram';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';
import './Home.css'

const Home = () => {
    return (
        <>
            <Header></Header>
            <Info></Info>
            <AboutUs></AboutUs>
            <TrainingProgram></TrainingProgram>
            <WhyChooseUs></WhyChooseUs>
            <Footer></Footer>
        </>
    );
};

export default Home;