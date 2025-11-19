import './CategoryGrid.css';

function CategoryGrid() {
  const categories = Array(8).fill(null);
  
  return (
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
  );
}

export default CategoryGrid;
