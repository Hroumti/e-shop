import './Cart.css';

function Cart() {
  const cartItems = Array(3).fill(null);
  
  return (
    <div className="cart-page">
      <div className="cart-container">
        <h1 className="cart-title">CART</h1>
        
        <div className="cart-layout">
          <div className="cart-items-section">
            <div className="cart-header">
              <span>PRODUCT</span>
              <span>PRICE</span>
              <span>QUANTITY</span>
              <span>SUBTOTAL</span>
            </div>
            
            {cartItems.map((_, index) => (
              <div key={index} className="cart-item">
                <div className="item-product">
                  <div className="item-image">IMAGE</div>
                  <div className="item-details">
                    <div className="item-name">Product Name {index + 1}</div>
                    <div className="item-specs">Product specifications</div>
                    <div className="item-remove">REMOVE</div>
                  </div>
                </div>
                
                <div className="item-price">PRICE</div>
                
                <div className="item-quantity">
                  <button className="qty-btn">-</button>
                  <span className="qty-value">1</span>
                  <button className="qty-btn">+</button>
                </div>
                
                <div className="item-subtotal">SUBTOTAL</div>
              </div>
            ))}
          </div>
          
          <div className="cart-summary-section">
            <div className="summary-box">
              <h2 className="summary-title">CART SUMMARY</h2>
              
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
              
              <a href="/checkout" className="checkout-btn">PROCEED TO CHECKOUT</a>
            </div>
            
            <div className="promo-box">
              <h3 className="promo-title">PROMO CODE</h3>
              <input type="text" placeholder="Enter code" className="promo-input" />
              <button className="promo-btn">APPLY</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
