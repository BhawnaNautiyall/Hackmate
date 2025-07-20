import React from 'react';
import TinderCard from './TinderCard';
import Posts from './Posts';
import LoginPage from '../authentication/LoginPage';

function Body({ selectedSection, userCards, postArr, onSwipe }) {
  
  if (selectedSection === 'match') {
    return (
      <div className="card-container">
        {userCards.length > 0 ? (
          userCards.map((card) => (
            <TinderCard key={card.id} card={card} onSwipe={onSwipe} />
          ))
        ) : (
          <p>No user cards available</p>
        )}
      </div>
    );
  }
  if (selectedSection === 'posts') {
    return <Posts postArr={postArr} />;
  }
  if (selectedSection === 'login') {
    return <LoginPage />;
  }
  return null;
}

export default Body;