import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-section">
          <div className="logo-placeholder">LOGO</div>
        </div>
        
        <div className="search-section">
          <input type="text" placeholder="Search..." className="search-input" />
          <button className="search-button">SEARCH</button>
        </div>
        
        <div className="header-actions">
          <div className="action-item">ACCOUNT</div>
          <div className="action-item">HELP</div>
          <div className="action-item">CART</div>
        </div>
      </div>
    </header>
  );
}

export default Header;
