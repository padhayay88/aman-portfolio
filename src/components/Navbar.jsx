import React from 'react';

const Navbar = () => {
  const handleNavClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <div className="logo">Aman</div>
        <div className="nav-menu">
          <a className="nav-link active" onClick={() => handleNavClick('home')}>
            Home
          </a>
          <a className="nav-link" onClick={() => handleNavClick('about')}>
            About
          </a>
          <a className="nav-link" onClick={() => handleNavClick('projects')}>
            Projects
          </a>
          <a className="nav-link" onClick={() => handleNavClick('skills')}>
            Skills
          </a>
          <a className="nav-link" onClick={() => handleNavClick('contact')}>
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
