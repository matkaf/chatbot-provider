const express = require('express');
const cors = require('cors');

const Controller = require('./controllers');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());

app.use(express.json());

app.get('/', Controller.getOldestFive);

app.listen(PORT, () => {
  console.log(`App running into port: ${PORT}`);
});
