import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo-section">
          <div className="logo-placeholder">LOGO</div>
        </Link>
        
        <div className="search-section">
          <input type="text" placeholder="Search..." className="search-input" />
          <button className="search-button">SEARCH</button>
        </div>
        
        <div className="header-actions">
          <div className="action-item">ACCOUNT</div>
          <div className="action-item">HELP</div>
          <Link to="/cart" className="action-item">CART</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
