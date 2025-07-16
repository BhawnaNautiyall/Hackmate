// userdata.js
import axios from 'axios';

let users = [];

export async function fetchUsers() {
  if (users.length > 0) return users; // cache

  const response = await axios.get('http://localhost:3000/users');
  users = response.data;
  return users;
}
