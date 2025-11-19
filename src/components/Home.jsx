import './Home.css';

function Home() {
  const categories = Array(8).fill(null);
  const products = Array(12).fill(null);
  
  return (
    <div className="home-page">
      {/* Navigation */}
      <nav className="navigation">
        <div className="nav-container">
          <div className="nav-item">CATEGORY 1</div>
          <div className="nav-item">CATEGORY 2</div>
          <div className="nav-item">CATEGORY 3</div>
          <div className="nav-item">CATEGORY 4</div>
          <div className="nav-item">CATEGORY 5</div>
          <div className="nav-item">CATEGORY 6</div>
        </div>
      </nav>

      {/* Hero Banner */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-banner">
            <div className="banner-placeholder">HERO BANNER</div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="category-grid-section">
        <div className="category-container">
          <h2 className="section-title">CATEGORIES</h2>
          <div className="category-grid">
            {categories.map((_, index) => (
              <div key={index} className="category-card">
                <div className="category-image">IMAGE</div>
                <div className="category-name">Category {index + 1}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
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
    </div>
  );
}

export default Home;
