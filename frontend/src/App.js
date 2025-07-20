import React, { useEffect, useState } from 'react';
import Header from './components/header';
import Body from './components/body';
import axios from 'axios';
import './App.css';

function App() {
  const [userCards, setUserCards] = useState([]);
  const [postArr, setPostArr] = useState([]);
  const [selectedSection, setSelectedSection] = useState('match');

  const fetchUsers = async () => {
    try {
      const res = await axios.get('http://localhost:3000/users');
      setUserCards(res.data);
    } catch (error) {
      console.error('Error fetching user cards:', error);
    }
  };

  const fetchPosts = async () => {
    
    try {
      const res = await axios.get('http://localhost:3000/posts');
      setPostArr(res.data);
      
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  useEffect(() => {
    fetchUsers();
    fetchPosts();
  }, []);

  const handleSwipe = (direction, id) => {
    console.log(`Swiped ${direction} on card with id: ${id}`);
  };

  return (
    <div className="app">
      
      <Header selectedSection={selectedSection} setSelectedSection={setSelectedSection} />
      <Body
        selectedSection={selectedSection}
        userCards={userCards}
        postArr={postArr}
        onSwipe={handleSwipe}
      />
    </div>
  );
}

export default App;