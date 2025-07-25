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
const userdb2 = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'HackMate',
  password: 'igdtuw@123',
  port: 5432,
});

userdb.connect()
  .then(() => console.log('Connected to the database'))
  .catch(err => console.error('Database connection error:', err.stack));
userdb2.connect()
  .then(() => console.log('Connected to the database'))
  .catch(err => console.error('Database connection error:', err.stack));



router.get('/users', async (req, res) => {
  try {
    const result = await userdb.query('SELECT * FROM users');
    res.json(result.rows); // ✅ only send this once
  } catch (err) {
    console.error('Error fetching users:', err);
    res.status(500).json({ error: 'Internal Server Error' }); // ✅ only this
  }
});






export const dataRoutes=router;
