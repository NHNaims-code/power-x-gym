import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home/Home';
import MemberShip from './components/MemberShip/MemberShip';
import OurClasses from './components/OurClasses/OurClasses/OurClasses';
import Pricing from './components/Pricing/Pricing';
import TrainingProfile from './components/TrainingProfile/TrainingProfile';

export const ClassDetailsContext = createContext();

function App() {
  const [classDetails, setClassDetails] = useState()
  return (
    <ClassDetailsContext.Provider value={[classDetails, setClassDetails]}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/our-classes">
              <OurClasses></OurClasses>
            </Route>
            <Route path="/pricing">
              <Pricing></Pricing>
            </Route>
            <Route path="/membership">
              <MemberShip></MemberShip>
            </Route>
            <Route path="/class-details">
              <TrainingProfile></TrainingProfile>
            </Route>
            <Route path="/about">
              <AboutUs></AboutUs>
            </Route>
            <Route paht="/blog">
              <Blog></Blog>
            </Route>
            <Route path="contact">
              <Contact></Contact>
            </Route>
          </Switch>
        </Router>
    </ClassDetailsContext.Provider>
  );
}

export default App;
