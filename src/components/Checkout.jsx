import './Checkout.css';

function Checkout() {
  const cartItems = Array(2).fill(null);
  
  return (
    <div className="checkout-page">
      <div className="checkout-container">
        <h1 className="checkout-title">CHECKOUT</h1>
        
        <div className="checkout-layout">
          <div className="checkout-forms">
            {/* Shipping Information */}
            <section className="checkout-section">
              <h2 className="section-title">SHIPPING INFORMATION</h2>
              <div className="form-grid">
                <div className="form-group">
                  <label>FIRST NAME</label>
                  <input type="text" className="form-input" />
                </div>
                <div className="form-group">
                  <label>LAST NAME</label>
                  <input type="text" className="form-input" />
                </div>
                <div className="form-group full-width">
                  <label>EMAIL</label>
                  <input type="email" className="form-input" />
                </div>
                <div className="form-group full-width">
                  <label>PHONE</label>
                  <input type="tel" className="form-input" />
                </div>
                <div className="form-group full-width">
                  <label>ADDRESS</label>
                  <input type="text" className="form-input" />
                </div>
                <div className="form-group">
                  <label>CITY</label>
                  <input type="text" className="form-input" />
                </div>
                <div className="form-group">
                  <label>POSTAL CODE</label>
                  <input type="text" className="form-input" />
                </div>
              </div>
            </section>

            {/* Payment Method */}
            <section className="checkout-section">
              <h2 className="section-title">PAYMENT METHOD</h2>
              <div className="payment-options">
                <label className="payment-option">
                  <input type="radio" name="payment" defaultChecked />
                  <span>CASH ON DELIVERY</span>
                </label>
                <label className="payment-option">
                  <input type="radio" name="payment" />
                  <span>CREDIT CARD</span>
                </label>
                <label className="payment-option">
                  <input type="radio" name="payment" />
                  <span>BANK TRANSFER</span>
                </label>
              </div>
            </section>
          </div>

          {/* Order Summary */}
          <div className="order-summary-section">
            <div className="summary-box">
              <h2 className="summary-title">ORDER SUMMARY</h2>
              
              <div className="order-items">
                {cartItems.map((_, index) => (
                  <div key={index} className="order-item">
                    <div className="order-item-image">IMAGE</div>
                    <div className="order-item-details">
                      <div className="order-item-name">Product Name {index + 1}</div>
                      <div className="order-item-qty">Qty: 1</div>
                    </div>
                    <div className="order-item-price">PRICE</div>
                  </div>
                ))}
              </div>
              
              <div className="summary-divider"></div>
              
              <div className="summary-row">
                <span>Subtotal</span>
                <span>AMOUNT</span>
              </div>
              
              <div className="summary-row">
                <span>Shipping</span>
                <span>AMOUNT</span>
              </div>
              
              <div className="summary-divider"></div>
              
              <div className="summary-row summary-total">
                <span>Total</span>
                <span>AMOUNT</span>
              </div>
              
              <button className="place-order-btn">PLACE ORDER</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
