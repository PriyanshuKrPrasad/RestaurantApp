import React, { useState, useEffect } from 'react';

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // LOGIN STATE
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);

      if (window.innerWidth > 768) {
        setNavOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    // CHECK LOGIN STATUS FROM LOCAL STORAGE
    const user = localStorage.getItem('user');

    if (user) {
      setIsLoggedIn(true);
    }

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // ================= AUTH FUNCTIONS =================

  const handleLogin = () => {
    // SAVE USER LOGIN
    localStorage.setItem('user', 'loggedInUser');

    setIsLoggedIn(true);

    alert('Login Successful');
  };

  const handleLogout = () => {
    // REMOVE USER
    localStorage.removeItem('user');

    setIsLoggedIn(false);

    alert('Logged Out Successfully');

    // OPTIONAL REDIRECT
    window.location.href = '/';
  };

  // ================= STYLES =================

  const headerStyle = {
    width: '100%',
    background: '#1a1a1a',
    padding: '12px 25px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 9999,
  };

  const navContainer = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',
  };

  const logoWrapper = {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
  };

  const logoStyle = {
    height: '55px',
    borderRadius: '12px',
    objectFit: 'cover',
  };

  const centerNav = {
    flex: 2,
    display: isMobile ? 'none' : 'flex',
    justifyContent: 'center',
  };

  const navListStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '25px',
    listStyle: 'none',
    margin: 0,
    padding: 0,
  };

  const mobileNavStyle = {
    display: navOpen ? 'flex' : 'none',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '20px',
    position: 'absolute',
    top: '75px',
    right: 0,
    width: '100%',
    background: '#1a1a1a',
    padding: '25px 0',
    boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
    zIndex: 1000,
  };

  const linkStyle = {
    textDecoration: 'none',
    color: '#fff',
    fontSize: '16px',
    fontWeight: '600',
    padding: '8px 12px',
    borderRadius: '5px',
    transition: '0.3s',
  };

  const hoverEnter = (e) => {
    e.target.style.color = '#ff6e7f';
    e.target.style.transform = 'scale(1.05)';
  };

  const hoverLeave = (e) => {
    e.target.style.color = '#fff';
    e.target.style.transform = 'scale(1)';
  };

  const rightSection = {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: '15px',
  };

  const authButtonStyle = {
    background: '#ff6e7f',
    color: '#fff',
    border: 'none',
    padding: '10px 18px',
    borderRadius: '6px',
    fontSize: '15px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: '0.3s',
  };

  const hamburgerStyle = {
    fontSize: '30px',
    color: '#fff',
    cursor: 'pointer',
    display: isMobile ? 'block' : 'none',
  };

  // ================= NAV ITEMS =================

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
    <>
      {/* PAGE SPACE FOR FIXED HEADER */}
      <div style={{ height: '70px' }}></div>

      <header style={headerStyle}>
        <div style={navContainer}>

          {/* LOGO */}
          <div style={logoWrapper}>
            <img
              src="src/assets/logo.png"
              alt="Logo"
              style={logoStyle}
            />
          </div>

          {/* DESKTOP NAV */}
          <nav style={centerNav}>
            <ul style={navListStyle}>
              {navItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    style={linkStyle}
                    onMouseEnter={hoverEnter}
                    onMouseLeave={hoverLeave}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* RIGHT SECTION */}
          <div style={rightSection}>

            {/* LOGIN / LOGOUT BUTTON */}
            {!isMobile && (
              <button
                style={authButtonStyle}
                onClick={isLoggedIn ? handleLogout : handleLogin}
              >
                {isLoggedIn ? 'Logout' : 'Login'}
              </button>
            )}

            {/* HAMBURGER */}
            <div
              style={hamburgerStyle}
              onClick={() => setNavOpen(!navOpen)}
            >
              {navOpen ? '✖' : '☰'}
            </div>
          </div>
        </div>

        {/* MOBILE MENU */}
        {isMobile && (
          <nav style={mobileNavStyle}>
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                style={linkStyle}
                onClick={() => setNavOpen(false)}
                onMouseEnter={hoverEnter}
                onMouseLeave={hoverLeave}
              >
                {item.label}
              </a>
            ))}

            {/* MOBILE LOGIN / LOGOUT */}
            <button
              style={authButtonStyle}
              onClick={isLoggedIn ? handleLogout : handleLogin}
            >
              {isLoggedIn ? 'Logout' : 'Login'}
            </button>
          </nav>
        )}
      </header>
    </>
  );
};

export default Header;