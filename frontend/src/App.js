import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]);

  // Fetch users from backend
  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:3000/users');
      setUsers(response.data);
      console.log('Users fetched:', response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  // Auto load users on first render
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Users</h1>
      <button onClick={fetchUsers}>Update DB</button>
      {/* database : users  */}
    </div>
  );
}

export default App;
