import React from 'react';

import '../App.css';

const Upi = () => {
    
  return (
    <div className="upi-box">
      <img src='images\upi-logo.png' alt="UPI Logo" className="upi-logo" />
      <input type="text" placeholder="Enter UPI ID" className="upi-input" />
      <button className="upi-button">Pay</button>
    </div>
  );
}

export default Upi;
