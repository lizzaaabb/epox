import React, { useState } from 'react';
import './Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <div className='header-body'>
        <nav className='header-nav'>
          {/* Desktop Navigation */}
          <div className='nav-menu desktop-menu'>
            <a href="#about" className='nav-link'>ჩვენს შესახებ</a>
            <a href="#epoxy" className='nav-link'>ეპოქსიდი</a>
            <a href="#candle-materials" className='nav-link'>სანთლის & თაბაშირის მასალები</a>
            <a href="#prices" className='nav-link'>ფასები</a>
            <a href="#online-lessons" className='nav-link'>ონლაინ გაკვეთილები</a>
          </div>

          {/* Mobile Menu Button */}
          <button className='mobile-menu-btn' onClick={toggleMenu}>
            <div className={`hamburger ${isMenuOpen ? 'open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </nav>
      </div>

      {/* Mobile Sidebar - Back to slide-in from the right */}
      {isMenuOpen && (
        <div className='sidebar-overlay' onClick={closeMenu}> {/* Keep the overlay */}
          <div className='sidebar-menu' onClick={(e) => e.stopPropagation()}> {/* Keep the original sidebar class */}
            <button className='close-btn' onClick={closeMenu}>×</button>
            <nav className='sidebar-nav'>
              <a href="#about" className='sidebar-link' onClick={closeMenu}>ჩვენს შესახებ</a>
              <a href="#epoxy" className='sidebar-link' onClick={closeMenu}>ეპოქსიდი</a>
              <a href="#candle-materials" className='sidebar-link' onClick={closeMenu}>სანთლის & თაბაშირის მასალები</a>
              <a href="#online-lessons" className='sidebar-link' onClick={closeMenu}>ფასები</a>
              <a href="#online-lessons" className='sidebar-link' onClick={closeMenu}>ონლაინ გაკვეთილები</a>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;