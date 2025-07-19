import express from 'express';
import { Client } from 'pg';  
import cors from 'cors';
import bodyParser from 'body-parser';

const { urlencoded } = bodyParser;

const app = express();
const port = 3000;

app.use(cors());
app.use(urlencoded({ extended: true }));
app.use(bodyParser.json());

// const userdb = new Client({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'HackMate',
//   password: 'bhawnaNautiyal@1',
//   port: 5432,
// });

const userdb2 = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'HackMate',
  password: 'igdtuw@123',
  port: 5432,
});

// userdb.connect()
//   .then(() => console.log('Connected to the database'))
//   .catch(err => console.error('Database connection error:', err.stack));

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// app.get('/users', async (req, res) => {
//   try {
//     const result = await userdb.query('SELECT * FROM users');
//     res.json(result.rows); // ✅ only send this once
//   } catch (err) {
//     console.error('Error fetching users:', err);
//     res.status(500).json({ error: 'Internal Server Error' }); // ✅ only this
//   }
// });

userdb2.connect()
  .then(() => console.log('Connected to the database2'))
  .catch(err => console.error('Database connection error:', err.stack));

// userdb2.query('Select * from users', (err, res) => {
//   if (!err) { console.log(res.rows); }
//   else { console.log(err.message); }  
//   userdb2.end();
// });

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/userCard', async (req, res) => {
  try {
    const result = await userdb2.query('SELECT * FROM users');
    res.json(result.rows); // ✅ only send this once
  } catch (err) {
    console.error('Error fetching users:', err);
    res.status(500).json({ error: 'Internal Server Error' }); // ✅ only this
  }
});



app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

export default app;
