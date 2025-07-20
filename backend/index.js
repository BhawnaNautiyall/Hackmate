import express from 'express';
const app = express();
import {dataRoutes} from './routes/data.js';
import {authenticRoutes} from './routes/authentic.js';
import { postsRoutes } from './routes/posts.js';


app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// express routers use 
app.use(dataRoutes);
app.use(authenticRoutes);
app.use(postsRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

export default app;
