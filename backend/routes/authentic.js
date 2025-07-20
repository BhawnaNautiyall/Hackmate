import express from 'express';
const router = express.Router();

import { Client } from 'pg'; 
import bodyParser from 'body-parser';
router.use(bodyParser.json()); // Parse JSON bodies
const { urlencoded } = bodyParser;
router.use(urlencoded({ extended: true }));

import cors from 'cors';
router.use(cors());

const userdb = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'HackMate',
  password: 'bhawnaNautiyal@1',
  port: 5432,
});

userdb.connect()
  .then(() => console.log('Connected to the database'))
  .catch(err => console.error('Database connection error:', err.stack));



router.post('/login', async (req, res) => {
  const { name, password } = req.body;
  console.log('Login request:', { name, password });
  try {
    // Use parameterized query to prevent SQL injection
    const result = await userdb.query(
      'SELECT * FROM users WHERE name = $1 AND password_hash = $2',
      [name, password]
    );
    console.log('Query result:', result.rows);

    if (result.rows.length > 0) {
      // User exists
      res.json({
        success: true,
        message: 'User authenticated',
        user: { name: result.rows[0].name }
      });
    } else {
      // No match found
      res.status(401).json({
        success: false,
        message: 'Invalid credentials'
      });
    }
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

export const authenticRoutes = router;