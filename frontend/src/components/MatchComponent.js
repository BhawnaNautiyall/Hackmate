import React from 'react';
import TinderCard from './TinderCard';
import './MatchComponent.css';

const MatchComponent = ({ userCards, onSwipe }) => {
  return (
    <div className="match-container">
      <div className="match-header">
        <h2>Find Your Match</h2>
        <p>Swipe right to like, left to pass</p>
      </div>
      
      <div className="card-container">
        {userCards.length > 0 ? (
          userCards.map((card) => (
            <TinderCard key={card.id} card={card} onSwipe={onSwipe} />
          ))
        ) : (
          <div className="no-cards">
            <div className="no-cards-icon">💔</div>
            <h3>No more cards available</h3>
            <p>Check back later for new matches!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MatchComponent; 