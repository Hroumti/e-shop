import './Products.css';

function Products() {
  const products = Array(24).fill(null);
  
  return (
    <div className="products-page">
      <div className="products-container">
        {/* Sidebar Filters */}
        <aside className="filters-sidebar">
          <div className="filters-header">
            <h2>FILTERS</h2>
            <button className="clear-filters">CLEAR ALL</button>
          </div>

          {/* Category Filter */}
          <div className="filter-section">
            <h3 className="filter-title">CATEGORY</h3>
            <div className="filter-options">
              <label className="filter-option">
                <input type="checkbox" />
                <span>Category 1</span>
              </label>
              <label className="filter-option">
                <input type="checkbox" />
                <span>Category 2</span>
              </label>
              <label className="filter-option">
                <input type="checkbox" />
                <span>Category 3</span>
              </label>
              <label className="filter-option">
                <input type="checkbox" />
                <span>Category 4</span>
              </label>
              <label className="filter-option">
                <input type="checkbox" />
                <span>Category 5</span>
              </label>
            </div>
          </div>

          {/* Price Filter */}
          <div className="filter-section">
            <h3 className="filter-title">PRICE RANGE</h3>
            <div className="price-inputs">
              <input type="number" placeholder="MIN" className="price-input" />
              <span>-</span>
              <input type="number" placeholder="MAX" className="price-input" />
            </div>
            <button className="apply-price-btn">APPLY</button>
          </div>

          {/* Brand Filter */}
          <div className="filter-section">
            <h3 className="filter-title">BRAND</h3>
            <div className="filter-search">
              <input type="text" placeholder="Search brands..." className="search-input" />
            </div>
            <div className="filter-options">
              <label className="filter-option">
                <input type="checkbox" />
                <span>Brand 1</span>
              </label>
              <label className="filter-option">
                <input type="checkbox" />
                <span>Brand 2</span>
              </label>
              <label className="filter-option">
                <input type="checkbox" />
                <span>Brand 3</span>
              </label>
              <label className="filter-option">
                <input type="checkbox" />
                <span>Brand 4</span>
              </label>
              <label className="filter-option">
                <input type="checkbox" />
                <span>Brand 5</span>
              </label>
            </div>
          </div>

          {/* Rating Filter */}
          <div className="filter-section">
            <h3 className="filter-title">RATING</h3>
            <div className="filter-options">
              <label className="filter-option">
                <input type="checkbox" />
                <span>★★★★★ & Up</span>
              </label>
              <label className="filter-option">
                <input type="checkbox" />
                <span>★★★★☆ & Up</span>
              </label>
              <label className="filter-option">
                <input type="checkbox" />
                <span>★★★☆☆ & Up</span>
              </label>
              <label className="filter-option">
                <input type="checkbox" />
                <span>★★☆☆☆ & Up</span>
              </label>
            </div>
          </div>

          {/* Availability Filter */}
          <div className="filter-section">
            <h3 className="filter-title">AVAILABILITY</h3>
            <div className="filter-options">
              <label className="filter-option">
                <input type="checkbox" />
                <span>In Stock</span>
              </label>
              <label className="filter-option">
                <input type="checkbox" />
                <span>Out of Stock</span>
              </label>
            </div>
          </div>

          {/* Discount Filter */}
          <div className="filter-section">
            <h3 className="filter-title">DISCOUNT</h3>
            <div className="filter-options">
              <label className="filter-option">
                <input type="checkbox" />
                <span>50% or more</span>
              </label>
              <label className="filter-option">
                <input type="checkbox" />
                <span>40% or more</span>
              </label>
              <label className="filter-option">
                <input type="checkbox" />
                <span>30% or more</span>
              </label>
              <label className="filter-option">
                <input type="checkbox" />
                <span>20% or more</span>
              </label>
              <label className="filter-option">
                <input type="checkbox" />
                <span>10% or more</span>
              </label>
            </div>
          </div>

          {/* Color Filter */}
          <div className="filter-section">
            <h3 className="filter-title">COLOR</h3>
            <div className="color-options">
              <label className="color-option">
                <input type="checkbox" />
                <span className="color-swatch" style={{backgroundColor: '#000'}}></span>
                <span>Black</span>
              </label>
              <label className="color-option">
                <input type="checkbox" />
                <span className="color-swatch" style={{backgroundColor: '#fff', border: '1px solid #ddd'}}></span>
                <span>White</span>
              </label>
              <label className="color-option">
                <input type="checkbox" />
                <span className="color-swatch" style={{backgroundColor: '#f00'}}></span>
                <span>Red</span>
              </label>
              <label className="color-option">
                <input type="checkbox" />
                <span className="color-swatch" style={{backgroundColor: '#00f'}}></span>
                <span>Blue</span>
              </label>
              <label className="color-option">
                <input type="checkbox" />
                <span className="color-swatch" style={{backgroundColor: '#0f0'}}></span>
                <span>Green</span>
              </label>
            </div>
          </div>

          {/* Size Filter */}
          <div className="filter-section">
            <h3 className="filter-title">SIZE</h3>
            <div className="filter-options">
              <label className="filter-option">
                <input type="checkbox" />
                <span>XS</span>
              </label>
              <label className="filter-option">
                <input type="checkbox" />
                <span>S</span>
              </label>
              <label className="filter-option">
                <input type="checkbox" />
                <span>M</span>
              </label>
              <label className="filter-option">
                <input type="checkbox" />
                <span>L</span>
              </label>
              <label className="filter-option">
                <input type="checkbox" />
                <span>XL</span>
              </label>
              <label className="filter-option">
                <input type="checkbox" />
                <span>XXL</span>
              </label>
            </div>
          </div>
        </aside>

        {/* Products Grid */}
        <main className="products-main">
          <div className="products-header">
            <div className="results-info">
              <h1>ALL PRODUCTS</h1>
              <span className="results-count">SHOWING X RESULTS</span>
            </div>
            <div className="sort-section">
              <label>SORT BY:</label>
              <select className="sort-select">
                <option>RELEVANCE</option>
                <option>PRICE: LOW TO HIGH</option>
                <option>PRICE: HIGH TO LOW</option>
                <option>NEWEST</option>
                <option>RATING</option>
              </select>
            </div>
          </div>

          <div className="products-grid">
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

          <div className="pagination">
            <button className="page-btn">PREVIOUS</button>
            <button className="page-btn active">1</button>
            <button className="page-btn">2</button>
            <button className="page-btn">3</button>
            <button className="page-btn">4</button>
            <button className="page-btn">NEXT</button>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Products;
