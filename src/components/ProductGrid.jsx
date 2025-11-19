import './ProductGrid.css';

function ProductGrid() {
  const products = Array(12).fill(null);
  
  return (
    <section className="product-grid-section">
      <div className="product-container">
        <h2 className="section-title">PRODUCTS</h2>
        <div className="product-grid">
          {products.map((_, index) => (
            <div key={index} className="product-card">
              <div className="product-image">IMAGE</div>
              <div className="product-info">
                <div className="product-name">Product Name {index + 1}</div>
                <div className="product-price">PRICE</div>
                <div className="product-rating">★★★★☆</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductGrid;
