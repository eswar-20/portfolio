import React, { useState } from 'react';

const Navbar = ({ activeSection, setActiveSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Skills', id: 'skills' },
    { name: 'Education', id: 'education' },
    { name: 'Certifications', id: 'certifications' },
    { name: 'Internships', id: 'internships' },
    { name: 'Contact', id: 'contact' }
  ];

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="floating-navbar">
      {/* Floating Pill Container */}
      <div className="navbar-pill">
        {/* Logo/Brand */}
        <div className="navbar-brand">
          <div className="brand-logo">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
            </svg>
          </div>
          <span className="brand-text">Portfolio</span>
        </div>

        {/* Desktop Navigation */}
        <div className="nav-links">
          {navLinks.map((link) => (
            <button
              key={link.id}
              className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
              onClick={() => handleNavClick(link.id)}
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <div className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-content">
          {navLinks.map((link) => (
            <button
              key={link.id}
              className={`mobile-nav-link ${activeSection === link.id ? 'active' : ''}`}
              onClick={() => handleNavClick(link.id)}
            >
              {link.name}
            </button>
          ))}
        </div>
      </div>

      <style jsx>{`
        .floating-navbar {
          position: fixed;
          top: 20px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 1000;
          width: fit-content;
          max-width: 90%;
        }

        .navbar-pill {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(234, 219, 200, 0.3);
          border-radius: 50px;
          padding: 12px 24px;
          display: flex;
          align-items: center;
          gap: 32px;
          box-shadow: 0 8px 32px rgba(111, 78, 55, 0.1);
          transition: all 0.3s ease;
        }

        .navbar-pill:hover {
          box-shadow: 0 12px 40px rgba(111, 78, 55, 0.15);
          border-color: rgba(234, 219, 200, 0.5);
        }

        .navbar-brand {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-shrink: 0;
        }

        .brand-logo {
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, #6F4E37, #A67B5B);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }

        .brand-text {
          font-size: 1.2rem;
          font-weight: 700;
          color: #2C1810;
          letter-spacing: -0.02em;
        }

        .nav-links {
          display: flex;
          gap: 8px;
          align-items: center;
        }

        .nav-link {
          padding: 8px 16px;
          background: transparent;
          border: none;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: 500;
          color: #6F4E37;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
        }

        .nav-link:hover {
          background: rgba(111, 78, 55, 0.08);
          color: #6F4E37;
          transform: translateY(-1px);
        }

        .nav-link.active {
          background: linear-gradient(135deg, #6F4E37, #A67B5B);
          color: white;
          box-shadow: 0 4px 20px rgba(111, 78, 55, 0.25);
        }

        .nav-link.active::before {
          content: '';
          position: absolute;
          inset: -2px;
          border-radius: 22px;
          background: linear-gradient(135deg, #6F4E37, #A67B5B);
          opacity: 0.3;
          z-index: -1;
        }

        .mobile-toggle {
          display: none;
          background: transparent;
          border: none;
          padding: 8px;
          cursor: pointer;
        }

        .hamburger {
          width: 24px;
          height: 20px;
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .hamburger span {
          width: 100%;
          height: 2px;
          background: #0F766E;
          border-radius: 2px;
          transition: all 0.3s ease;
        }

        .hamburger.open span:nth-child(1) {
          transform: rotate(45deg) translate(6px, 6px);
        }

        .hamburger.open span:nth-child(2) {
          opacity: 0;
        }

        .mobile-menu {
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(234, 219, 200, 0.3);
          border-radius: 24px;
          padding: 20px;
          margin-top: 12px;
          min-width: 200px;
          opacity: 0;
          visibility: hidden;
          transform: translateX(-50%) translateY(-10px);
          transition: all 0.3s ease;
          box-shadow: 0 8px 32px rgba(111, 78, 55, 0.1);
        }

        .mobile-menu-content {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .mobile-nav-link {
          padding: 12px 20px;
          background: transparent;
          border: none;
          border-radius: 16px;
          font-size: 0.9rem;
          font-weight: 500;
          color: #6B4F3A;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: left;
        }

        .mobile-nav-link:hover {
          background: rgba(111, 78, 55, 0.08);
          color: #6F4E37;
        }

        .mobile-nav-link.active {
          background: linear-gradient(135deg, #6F4E37, #A67B5B);
          color: white;
        }

        @media (max-width: 768px) {
          .floating-navbar {
            top: 16px;
            width: calc(100% - 32px);
            max-width: none;
          }

          .navbar-pill {
            padding: 12px 16px;
            gap: 16px;
          }

          .nav-links {
            display: none;
          }

          .mobile-toggle {
            display: block;
          }

          .brand-text {
            font-size: 1.1rem;
          }

          .brand-logo {
            width: 36px;
            height: 36px;
          }
        }

        @media (max-width: 480px) {
          .floating-navbar {
            top: 12px;
            width: calc(100% - 24px);
          }

          .navbar-pill {
            padding: 10px 14px;
            gap: 12px;
          }

          .brand-text {
            font-size: 1rem;
          }

          .brand-logo {
            width: 32px;
            height: 32px;
          }

          .brand-logo svg {
            width: 18px;
            height: 18px;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
