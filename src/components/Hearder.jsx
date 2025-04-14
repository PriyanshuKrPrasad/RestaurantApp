import React, { useState, useEffect } from 'react';

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) setNavOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const headerStyle = {
    width: '100%',
    background: '#1a1a1a', // Solid dark background
    padding: '10px 20px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
    position: 'sticky',
    top: 0,
    zIndex: 999,
  };

  const topNavStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  };

  const logoStyle = {
    height: '50px',
    borderRadius: '20%',
  };

  const hamburgerStyle = {
    fontSize: '30px',
    cursor: 'pointer',
    color: '#fff',
    display: isMobile ? 'block' : 'none',
    padding: '8px',
    transition: '0.3s',
  };

  const navListStyle = {
    display: isMobile ? (navOpen ? 'flex' : 'none') : 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    listStyle: 'none',
    margin: 0,
    padding: isMobile ? '10px 0' : 0,
    backgroundColor: isMobile ? '#1a1a1a' : 'transparent',
    position: isMobile ? 'absolute' : 'static',
    top: '70px',
    right: 0,
    width: isMobile ? '100%' : 'auto',
    boxShadow: isMobile ? '0 4px 8px rgba(0,0,0,0.2)' : 'none',
    alignItems: 'center',
    justifyContent: isMobile ? 'center' : 'flex-end',
    gap: isMobile ? '20px' : '25px',
    transition: 'all 0.3s ease',
  };

  const linkStyle = {
    position: 'relative',
    textDecoration: 'none',
    fontSize: '16px',
    color: '#fff',
    fontWeight: 600,
    padding: '8px 12px',
    borderRadius: '5px',
    transition: 'all 0.3s ease-in-out',
    display: 'inline-block',
  };

  const hoverEnter = (e) => {
    e.target.style.color = '#ff6e7f';
    e.target.style.transform = 'scale(1.05)';
    e.target.style.borderBottom = '2px solid #ff6e7f';
  };

  const hoverLeave = (e) => {
    e.target.style.color = '#fff';
    e.target.style.transform = 'scale(1)';
    e.target.style.borderBottom = 'none';
  };

  const navItems = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Menu', href: '#menu' },
    { label: 'Events', href: '#events' },
    { label: 'Chefs', href: '#chefs' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header style={headerStyle}>
      <div style={topNavStyle}>
        <div className="logo">
          <img src="src/assets/logo.png" alt="Logo" style={logoStyle} />
        </div>

        <div style={hamburgerStyle} onClick={() => setNavOpen(!navOpen)}>
          {navOpen ? '✖' : '☰'}
        </div>

        <nav id="navmenu" className="navmenu">
          <ul style={navListStyle}>
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  style={linkStyle}
                  onClick={() => setNavOpen(false)}
                  onMouseEnter={hoverEnter}
                  onMouseLeave={hoverLeave}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
