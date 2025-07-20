import React from 'react';
import './AboutComponent.css';

const AboutComponent = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-header">
          <h1>About HackMate</h1>
          <p>Connecting students through meaningful relationships</p>
        </div>
        
        <div className="about-sections">
          <div className="about-section">
            <div className="section-icon">💻</div>
            <h3>For Students</h3>
            <p>Find study partners, project collaborators, and friends who share your academic interests and goals.</p>
          </div>
          
          <div className="about-section">
            <div className="section-icon">🎯</div>
            <h3>Smart Matching</h3>
            <p>Our intelligent algorithm matches you with compatible students based on your branch, year, and interests.</p>
          </div>
          
          <div className="about-section">
            <div className="section-icon">🔒</div>
            <h3>Safe & Secure</h3>
            <p>Your privacy and security are our top priorities. All interactions are protected and verified.</p>
          </div>
          
          <div className="about-section">
            <div className="section-icon">🚀</div>
            <h3>Build Connections</h3>
            <p>Create lasting friendships and professional networks that will help you throughout your academic journey.</p>
          </div>
        </div>
        
        <div className="about-footer">
          <h3>Ready to find your perfect match?</h3>
          <p>Join thousands of students who have already found their study partners and friends!</p>
        </div>
      </div>
    </div>
  );
};

export default AboutComponent; 