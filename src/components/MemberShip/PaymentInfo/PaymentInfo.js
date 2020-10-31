import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import SplitForm from './SplitForm/SplitForm';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51HgCLMIp0GP8dYzTaAJ6ny1pDN5H9jueZF5uLoQ8iCczfIAIWHZo34CthQS2tgVsJArYNSAN7k6qP2oAr6cq8cCd00r71IH765');

const PaymentInfo = () => {
  return (
    <Elements stripe={stripePromise}>
      <SplitForm></SplitForm>
    </Elements>
  );
};

export default PaymentInfo;