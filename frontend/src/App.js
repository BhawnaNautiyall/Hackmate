import React, { useEffect, useState } from 'react';
import Header from './components/header';
import Body from './components/body';
import Footer from './components/footer';
import { AuthProvider } from './context/AuthContext';
import axios from 'axios';
import './App.css';

function App() {
  const [userCards, setUserCards] = useState([]);
  const [postArr, setPostArr] = useState([]);
  const [selectedSection, setSelectedSection] = useState('match');

  const fetchUsers = async () => {
    console.log("Fetching data...");
    try {
      const res = await axios.get('http://localhost:3000/userCard');
      console.log('User Cards:', res.data);
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

  useEffect(() => {
    console.log('userCards state:', userCards);
  }, [userCards]);

  const handleSwipe = (direction, id) => {
    console.log(`Swiped ${direction} on card with id: ${id}`);
    // You can add logic here to remove the card, update state, etc.
  };

  return (
    <AuthProvider>
      <div className="app">
        <Header selectedSection={selectedSection} setSelectedSection={setSelectedSection} />
        <main className="main-content">
          <Body
            selectedSection={selectedSection}
            userCards={userCards}
            postArr={postArr}
            onSwipe={handleSwipe}
          />
        </main>
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;