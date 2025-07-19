import express from 'express';
const app = express();
import {dataRoutes} from './routes/data.js';


app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// express routers use 
app.use(dataRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

export default app;
