import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
            <div className="container">
                <nav className="nav">
                    <Link to="/" className="logo">
                        <img src="/logo.png" alt="Ihotu Aura" className="logo-image" />
                        <span className="logo-text">Ihotu Aura</span>
                    </Link>

                    <button
                        className="mobile-menu-toggle"
                        onClick={toggleMobileMenu}
                        aria-label="Toggle menu"
                    >
                        <span className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                    </button>

                    <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
                        <li><Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link></li>
                        <li><Link to="/shop" onClick={() => setIsMobileMenuOpen(false)}>Shop</Link></li>
                        <li><a href="#about" onClick={() => setIsMobileMenuOpen(false)}>About</a></li>
                        <li><a href="#faq" onClick={() => setIsMobileMenuOpen(false)}>FAQ</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
