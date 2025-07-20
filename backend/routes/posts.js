import express from 'express';
const router = express.Router();

import { Client } from 'pg'; 
import bodyParser from 'body-parser';
router.use(bodyParser.json()); // Parse JSON bodies
const { urlencoded } = bodyParser;
router.use(urlencoded({ extended: true }));

import cors from 'cors';
router.use(cors());

const postdb = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'HackMate',
  password: 'bhawnaNautiyal@1',
  port: 5432,
});

postdb.connect()
  .then(() => console.log('Connected to the database'))
  .catch(err => console.error('Database connection error:', err.stack));


router.get('/posts', async (req, res) => {
  try {
    const result = await postdb.query('SELECT * FROM posts');
    res.json(result.rows); 
    console.log('Posts fetched successfully:', result.rows);
  } catch (err) {
    console.error('Error fetching users:', err);
    res.status(500).json({ error: 'Internal Server Error' }); 
  }
});

export const postsRoutes = router;