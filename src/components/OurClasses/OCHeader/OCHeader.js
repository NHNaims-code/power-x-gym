import React from 'react';
import Navbar from '../../Home/Header/Navbar/Navbar';
import './OCHeader.css';

const OCHeader = ({title}) => {
    return (
        <div className="ocheader-root">
            <Navbar></Navbar>
            <h1 className="ocheadline">{title}</h1>
        </div>
    );
};

export default OCHeader;