import React, { useEffect, useState } from 'react';
import TinderCard from './components/TinderCard';
import './App.css';
import axios from 'axios';

function App() {
  const [userCards, setUserCards] = useState([]);
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    console.log("Fetching data...");
    try {
      const res = await axios.get('http://localhost:3000/userCard');
      console.log('User Cards:', res.data);
      setUserCards(res.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    console.log('userCards state:', userCards);
  }, [userCards]);

  const handleSwipe = (direction, id) => {
    console.log(`Swiped ${direction} on card with id: ${id}`);
    // You can add logic here to remove the card, update state, etc.
  };

  return (
    <div className="app">
      <div className="card-container">
        {userCards.length > 0 ? (
          userCards.map((card) => (
            <TinderCard key={card.id} card={card} onSwipe={handleSwipe} />
          ))
        ) : (
          <p>No user cards available</p>
        )}
      </div>
    </div>
  );
}

export default App;
