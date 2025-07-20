import React from 'react';
import { useAuth } from '../context/AuthContext';
import './header.css';

function Header({ selectedSection, setSelectedSection }) {
  const { isLoggedIn } = useAuth();

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <h1>HackMate</h1>
        </div>
        
        <nav className="nav-buttons">
          <button 
            className={`nav-btn ${selectedSection === 'match' ? 'active' : ''}`}
            onClick={() => setSelectedSection('match')}
          >
            Match
          </button>
          <button 
            className={`nav-btn ${selectedSection === 'posts' ? 'active' : ''}`}
            onClick={() => setSelectedSection('posts')}
          >
            Posts
          </button>
          <button 
            className={`nav-btn ${selectedSection === 'about' ? 'active' : ''}`}
            onClick={() => setSelectedSection('about')}
          >
            About
          </button>
          <button 
            className={`nav-btn ${selectedSection === (isLoggedIn ? 'profile' : 'login') ? 'active' : ''}`}
            onClick={() => setSelectedSection(isLoggedIn ? 'profile' : 'login')}
          >
            {isLoggedIn ? 'Profile' : 'Login'}
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;