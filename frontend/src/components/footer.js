import React from 'react';
import './footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>HackMate</h3>
          <p>Connecting students through meaningful relationships and academic collaboration.</p>
          <div className="social-links">
            <a href="mailto:contact@hackmate.com" className="social-link">📧</a>
            <a href="tel:+1234567890" className="social-link">📱</a>
            <a href="https://chat.hackmate.com" className="social-link">💬</a>
          </div>
        </div>
        
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#match">Match</a></li>
            <li><a href="#posts">Posts</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#login">Login</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Support</h4>
          <ul>
            <li><a href="/help">Help Center</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Terms of Service</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Features</h4>
          <ul>
            <li><a href="/smart-matching">Smart Matching</a></li>
            <li><a href="/study-groups">Study Groups</a></li>
            <li><a href="/projects">Project Collaboration</a></li>
            <li><a href="/events">Events</a></li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2024 HackMate. All rights reserved.</p>
        <p>Made with ❤️ for students</p>
      </div>
    </footer>
  );
}

export default Footer;
