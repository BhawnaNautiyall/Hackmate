import React from 'react';

function Header({ selectedSection, setSelectedSection }) {
  return (
    <header className="header">
      <button onClick={() => setSelectedSection('match')}>Match</button>
      <button onClick={() => setSelectedSection('posts')}>Posts</button>
      <button onClick={() => setSelectedSection('login')}>Login</button>
    </header>
  );
}

export default Header;