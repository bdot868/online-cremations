import React from 'react';

const Cart = () => {
  return(
    <div>
      <h3>Package Details</h3>
      <p>Essential Cremation Package <span className="cart-price">*$1,995</span></p>
      <div>
      <p>This package features:</p>
        <ul>
          <li>Basic use of facilities & services</li>
          <li>Transfer of deceased into our care</li>
          <li>Refrigeration</li>
          <li>Crematory Fee</li>
          <li>$58 Alternative Container (2-000)</li>
          <li>$34 Basic Plastic Urn</li>
          <li>Death Certificate Processing</li>
          <li>Death Certificate (1)</li>
          <li>Permit (1)</li>
        </ul>
      </div>
      <p><em>*Price before Taxes</em></p>
    </div>
  )
}

export default Cart;
