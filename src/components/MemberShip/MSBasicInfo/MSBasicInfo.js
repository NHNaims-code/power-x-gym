import React from 'react';
import './MSBasicInfo.css'

const MSBasicInfo = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 mt-4">
                    <label htmlFor="firstName">First Name</label>
                    <input className="form-control" type="text" name="firstName" id="firstName"/>
                </div>
                <div className="col-md-6 mt-4">
                    <label htmlFor="lastName">Last Name</label>
                    <input className="form-control" type="text" name="lastName" id="lastName"/>
                </div>
                <div className="col-md-6 mt-4">
                    <label htmlFor="email">Email</label>
                    <input className="form-control" type="text" name="email" id="email"/>
                </div>
                <div className="col-md-6 mt-4">
                    <label htmlFor="phoneNumber">Phone number</label>
                    <input className="form-control" type="text" name="phoneNumber" id="phoneNumber"/>
                </div>
                <div className="col-md-6 mt-4">
                    <label htmlFor="dateOfBirth">Date of Birth</label>
                    <div className="row" id="dateOfBirth">
                        <div className="col-md-4">
                            <input className="form-control text-center" type="number" name="day" id="" placeholder="Day"/>
                        </div>
                        <div className="col-md-4">
                            <div class="dropdown">
                                <li class="form-control dropdown-toggle text-center" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Month
                                </li>
                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                        <li className="text-center">January</li>
                                        <li className="text-center">February</li>
                                        <li className="text-center">March</li>
                                        <li className="text-center">April</li>
                                        <li className="text-center">May</li>
                                        <li className="text-center">June</li>
                                        <li className="text-center">July</li>
                                        <li className="text-center">August</li>
                                        <li className="text-center">September</li>
                                        <li className="text-center">October</li>
                                        <li className="text-center">November</li>
                                        <li className="text-center">December</li>
                                    </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <input className="form-control text-center" type="number" max="3000" min="1912" name="day" id="" placeholder="Year"/>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 mt-4">
                    <label htmlFor="gender">Gender</label>
                    <div class="dropdown">
                    <li class="form-control dropdown-toggle text-right" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">  
                        </li>
                            <div class="dropdown-menu w-100" aria-labelledby="dropdownMenuLink">
                                <li className="text-center">Male</li>
                                <li className="text-center">Female</li>
                                <li className="text-center">Other</li>
                            </div>
                    </div>
                </div>
                <div className="col-md-6 mt-4">
                    <label htmlFor="phoneNumber">Address line 1:</label>
                    <input className="form-control" type="text" name="phoneNumber" id="phoneNumber"/>
                </div>
                <div className="col-md-6 mt-4">
                    <label htmlFor="phoneNumber">Country/Region:</label>
                    <input className="form-control" type="text" name="phoneNumber" id="phoneNumber"/>
                </div>
                <div className="col-md-6 mt-4">
                    <label htmlFor="phoneNumber">City</label>
                    <input className="form-control" type="text" name="phoneNumber" id="phoneNumber"/>
                </div>
                <div className="col-md-6 mt-4">
                    <label htmlFor="phoneNumber">Postcode</label>
                    <input className="form-control" type="text" name="phoneNumber" id="phoneNumber"/>
                </div>
            </div>
        </div>
    );
};

export default MSBasicInfo;