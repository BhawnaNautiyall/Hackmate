import React from 'react';
import { useAuth } from '../context/AuthContext';
import './ProfileComponent.css';

const ProfileComponent = () => {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-header">
          <div className="profile-avatar">
            <span>{user?.name?.charAt(0) || 'U'}</span>
          </div>
          <h2>{user?.name || 'User Profile'}</h2>
        </div>
        
        <div className="profile-info">
          <div className="info-item">
            <label>Name:</label>
            <span>{user?.name || 'Not available'}</span>
          </div>
          <div className="info-item">
            <label>Email:</label>
            <span>{user?.email || 'Not available'}</span>
          </div>
          <div className="info-item">
            <label>Branch:</label>
            <span>{user?.branch || 'Not available'}</span>
          </div>
          <div className="info-item">
            <label>Year:</label>
            <span>{user?.year || 'Not available'}</span>
          </div>
        </div>

        <div className="profile-actions">
          <button className="edit-btn">Edit Profile</button>
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileComponent; 