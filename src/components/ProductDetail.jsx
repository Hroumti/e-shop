import { useState } from 'react';
import { Link } from 'react-router-dom';
import './ProductDetail.css';

function ProductDetail() {
  const [activeTab, setActiveTab] = useState('description');
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState('black');
  
  const relatedProducts = Array(4).fill(null);
  
  return (
    <div className="product-detail-page">
      <div className="product-detail-container">
        {/* Breadcrumb */}
        <div className="breadcrumb">
          <Link to="/">HOME</Link>
          <span>/</span>
          <Link to="/products">PRODUCTS</Link>
          <span>/</span>
          <span>PRODUCT NAME</span>
        </div>

        {/* Main Product Section */}
        <div className="product-main">
          <div className="product-layout">
            {/* Image Gallery */}
            <div className="product-gallery">
              <div className="main-image">MAIN IMAGE</div>
              <div className="thumbnail-images">
                <div className="thumbnail active">IMG 1</div>
                <div className="thumbnail">IMG 2</div>
                <div className="thumbnail">IMG 3</div>
                <div className="thumbnail">IMG 4</div>
              </div>
            </div>

            {/* Product Info */}
            <div className="product-info-section">
              <h1 className="product-title">PRODUCT NAME</h1>
              
              <div className="product-rating-section">
                <span className="rating-stars">★★★★☆</span>
                <span className="rating-count">(X REVIEWS)</span>
              </div>

              <div className="product-price-section">
                <div className="current-price">PRICE</div>
                <div>
                  <span className="original-price">ORIGINAL PRICE</span>
                  <span className="discount-badge">-X%</span>
                </div>
              </div>

              {/* Color Variant */}
              <div className="variant-section">
                <div className="variant-label">COLOR</div>
                <div className="variant-options">
                  <div 
                    className={`color-variant ${selectedColor === 'black' ? 'selected' : ''}`}
                    style={{backgroundColor: '#000'}}
                    onClick={() => setSelectedColor('black')}
                  ></div>
                  <div 
                    className={`color-variant ${selectedColor === 'white' ? 'selected' : ''}`}
                    style={{backgroundColor: '#fff', border: '2px solid #ddd'}}
                    onClick={() => setSelectedColor('white')}
                  ></div>
                  <div 
                    className={`color-variant ${selectedColor === 'red' ? 'selected' : ''}`}
                    style={{backgroundColor: '#f00'}}
                    onClick={() => setSelectedColor('red')}
                  ></div>
                  <div 
                    className={`color-variant ${selectedColor === 'blue' ? 'selected' : ''}`}
                    style={{backgroundColor: '#00f'}}
                    onClick={() => setSelectedColor('blue')}
                  ></div>
                </div>
              </div>

              {/* Size Variant */}
              <div className="variant-section">
                <div className="variant-label">SIZE</div>
                <div className="variant-options">
                  {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map(size => (
                    <button
                      key={size}
                      className={`variant-option ${selectedSize === size ? 'selected' : ''}`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="quantity-section">
                <div className="variant-label">QUANTITY</div>
                <div className="quantity-controls">
                  <button className="qty-btn" onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                  <span className="qty-value">{quantity}</span>
                  <button className="qty-btn" onClick={() => setQuantity(quantity + 1)}>+</button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="action-buttons">
                <button className="add-to-cart-btn">ADD TO CART</button>
                <button className="wishlist-btn">♡</button>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="product-details-section">
          <div className="tabs-header">
            <button 
              className={`tab-btn ${activeTab === 'description' ? 'active' : ''}`}
              onClick={() => setActiveTab('description')}
            >
              DESCRIPTION
            </button>
            <button 
              className={`tab-btn ${activeTab === 'specifications' ? 'active' : ''}`}
              onClick={() => setActiveTab('specifications')}
            >
              SPECIFICATIONS
            </button>
            <button 
              className={`tab-btn ${activeTab === 'reviews' ? 'active' : ''}`}
              onClick={() => setActiveTab('reviews')}
            >
              REVIEWS
            </button>
          </div>

          <div className="tab-content">
            {activeTab === 'description' && (
              <div>
                <h3>PRODUCT DESCRIPTION</h3>
                <p>Product description text goes here. This is where you would describe the product features, benefits, and other relevant information.</p>
                <p>Additional details about the product can be added here to help customers make informed decisions.</p>
              </div>
            )}

            {activeTab === 'specifications' && (
              <div>
                <h3>SPECIFICATIONS</h3>
                <div className="specifications-list">
                  <div className="spec-row">
                    <span className="spec-label">MATERIAL</span>
                    <span className="spec-value">MATERIAL TYPE</span>
                  </div>
                  <div className="spec-row">
                    <span className="spec-label">WEIGHT</span>
                    <span className="spec-value">WEIGHT VALUE</span>
                  </div>
                  <div className="spec-row">
                    <span className="spec-label">DIMENSIONS</span>
                    <span className="spec-value">DIMENSIONS VALUE</span>
                  </div>
                  <div className="spec-row">
                    <span className="spec-label">BRAND</span>
                    <span className="spec-value">BRAND NAME</span>
                  </div>
                  <div className="spec-row">
                    <span className="spec-label">WARRANTY</span>
                    <span className="spec-value">WARRANTY INFO</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div>
                <h3>CUSTOMER REVIEWS</h3>
                <p>Customer reviews will be displayed here.</p>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        <div className="related-products-section">
          <h2 className="section-title">RELATED PRODUCTS</h2>
          <div className="related-products-grid">
            {relatedProducts.map((_, index) => (
              <div key={index} className="product-card">
                <div className="product-image">IMAGE</div>
                <div className="product-card-info">
                  <div className="product-name">Related Product {index + 1}</div>
                  <div className="product-price">PRICE</div>
                  <div className="product-rating">★★★★☆</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
