import React, { useState, useEffect } from 'react';
import { fetchUsers } from './userdata'; 

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers().then(data => setUsers(data));
  }, []);

  return (
    <div>
      {/* data : users available in the component */}
      
    </div>
  );
}

export default App;
