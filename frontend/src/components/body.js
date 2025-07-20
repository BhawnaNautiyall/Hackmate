import React from 'react';
import Posts from './Posts';
import LoginComponent from './LoginComponent';
import ProfileComponent from './ProfileComponent';
import MatchComponent from './MatchComponent';
import AboutComponent from './AboutComponent';

function Body({ selectedSection, userCards, postArr, onSwipe }) {
  
  switch (selectedSection) {
    case 'match':
      return <MatchComponent userCards={userCards} onSwipe={onSwipe} />;
    
    case 'posts':
      return <Posts postArr={postArr} />;
    
    case 'login':
      return <LoginComponent />;
    
    case 'profile':
      return <ProfileComponent />;
    
    case 'about':
      return <AboutComponent />;
    
    default:
      return <MatchComponent userCards={userCards} onSwipe={onSwipe} />;
  }
}

export default Body;