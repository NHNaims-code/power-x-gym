import React from 'react';
import './MemberShip.css';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MSBasicInfo from './MSBasicInfo/MSBasicInfo';
import PaymentInfo from './PaymentInfo/PaymentInfo';
import { Link } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import OCHeader from '../OurClasses/OCHeader/OCHeader';
import Footer from '../Home/Footer/Footer';

   

const MemberShip = () => {
    const useStyles = makeStyles((theme) => ({
        root: {
            width: '100%',
        },
        backButton: {
          marginRight: theme.spacing(1),
        },
        instructions: {
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(1),
        },
    }));
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();
  
    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
  
    // const handleReset = () => {
    //   setActiveStep(0);
    // };
    function getSteps() {
      return ['Personal Details', 'Bank Payment', 'Membership Created'];
    }
    
    function getStepContent(stepIndex) {
      switch (stepIndex) {
        case 0:
            return <MSBasicInfo></MSBasicInfo>;
          case 1:
            return <PaymentInfo></PaymentInfo>;
        case 2:
          return <div className="alert alert-success container text-center">Your request successfully. Please wait for confirmation.</div>;
        default:
          return 'Unknown stepIndex';
      }
    }
    
    const history = useHistory();
    
    return (
        <div>
          <OCHeader title="YOUR GYM MEMBERSHIP"></OCHeader>
          <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <div className="alert alert-success container text-center">Thank you for your perches!</div>
            <div className="d-flex justify-content-end container  mb-5 pb-5">
              <Link to="/">
                <button onClick={()=>{history.push('/')}} className="btn bg-warning px-3">GO TO HOME</button>
              </Link>
            </div>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <div className="d-flex justify-content-between container mb-5 pb-5 mt-3">
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <button className="btn bg-warning px-5" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
          <Footer></Footer>
    </div>
    );
};

export default MemberShip;