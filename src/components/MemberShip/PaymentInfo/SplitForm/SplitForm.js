import React, { useMemo, useState } from "react";
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement
} from "@stripe/react-stripe-js";
import './SplitForm.css'
import visaCard from '../../../../Image_Icon/credit-cards_visa.png';
import masterCard from '../../../../Image_Icon/credit-cards_mastercard.png';
import abBank from '../../../../Image_Icon/credit-cards_amex.png';
import paypal from '../../../../Image_Icon/paypal.png';

const useOptions = () => {

  const options = useMemo(
    () => ({
      style: {
        base: {
          fontSize: '16px',
          color: "#424770",
          letterSpacing: "0.025em",
          fontFamily: "Source Code Pro, monospace",
          "::placeholder": {
            color: "#aab7c4"
          }
        },
        invalid: {
          color: "#9e2146"
        }
      }
    }),
    []
  );

  return options;
};

const SplitForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();

  const handleSubmit = async event => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    const payload = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardNumberElement)
    });
    console.log("[PaymentMethod]", payload);
  };

  return (
    <form onSubmit={handleSubmit} className="container ">
        <div className="card split-form-root">
          <div className="d-flex align-items-center mb-5">
              <input type="radio"className="mr-5 mb-3" checked="true" name="carditCard" id="carditCard"/>
              <div className=" w-100">
                  <div className="row bg-dange w-100">
                    <div className="col-md-6">
                      <h5>Credit Card</h5>
                    </div>
                    <div className="col-md-6 d-flex align-items-center d-flex justify-content-end">
                      <img className="img-fluid pl-1" src={masterCard} alt=""/>
                      <img className="img-fluid pl-1" src={visaCard} alt=""/>
                      <img className="img-fluid pl-1" src={abBank} alt=""/>
                    </div>
                  </div>
                  <p><small>Safe money transfer using your bank account. Visa, MasterCard, Discover, American Express</small></p>
              </div>
          </div>

        <label className=" w-100">
          CARD NUMBER
          <CardNumberElement className="form-control w-100"
            options={options}
            onReady={() => {
              console.log("CardNumberElement [ready]");
            }}
            onChange={event => {
              console.log("CardNumberElement [change]", event);
            }}
            onBlur={() => {
              console.log("CardNumberElement [blur]");
            }}
            onFocus={() => {
              console.log("CardNumberElement [focus]");
            }}
          />
        </label>
        <div className="row mt-4">
            <div className="col-md-6">
                <label htmlFor="nameOnCard" className="p-0 m-0">NAME ON CARD</label>
                <input type="text" className="form-control" name="nameOnCard" id="nameOnCard"/>
            </div>
            <div className="col-md-3">
            <label className="w-100">
                  EXPIRY DATE
                  <CardExpiryElement  className="form-control w-100"
                  options={options}
                  onReady={() => {
                      console.log("CardNumberElement [ready]");
                  }}
                  onChange={event => {
                      console.log("CardNumberElement [change]", event);
                  }}
                  onBlur={() => {
                      console.log("CardNumberElement [blur]");
                  }}
                  onFocus={() => {
                      console.log("CardNumberElement [focus]");
                  }}
                  />
              </label>
            </div>
            <div className="col-md-3">
            <label className="w-100">
                  CVC CODE
                  <CardCvcElement  className="form-control w-100 "
                  options={options}
                  onReady={() => {
                      console.log("CardNumberElement [ready]");
                  }}
                  onChange={event => {
                      console.log("CardNumberElement [change]", event);
                  }}
                  onBlur={() => {
                      console.log("CardNumberElement [blur]");
                  }}
                  onFocus={() => {
                      console.log("CardNumberElement [focus]");
                  }}
                  />
              </label>
            </div>
        </div>
        <br/>
      </div>

      <div className="paypal split-form-root mt-5">
      <div className="d-flex align-items-center mb-5">
              <input type="radio"className="mr-5 mb-3" name="carditCard" id="carditCard"/>
              <div className=" w-100">
                  <div className="row bg-dange w-100">
                    <div className="col-md-6">
                      <h5>Credit Card</h5>
                    </div>
                    <div className="col-md-6 d-flex align-items-center d-flex justify-content-end">
                      <img className="img-fluid pl-1" src={paypal} alt=""/>
                    </div>
                  </div>
                  <p><small>Safe money transfer using your bank account. Visa, MasterCard, Discover, American Express</small></p>
              </div>
          </div>
      </div>
      
      {/* <button className="btn bg-warning" type="submit" disabled={!stripe}>
        CONFIRM & PAY
      </button> */}
    </form>
  );
};

export default SplitForm;
