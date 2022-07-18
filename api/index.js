const axios = require('axios');
const express = require('express');
const cors = require('cors');

const arrayToDict = require('./helpers/arrayToDict');

const app = express();

app.use(cors());

app.use(express.json());

const PORT = process.env.PORT || 3001;

app.get('/', async (_req, res) => {
  try {
    const { data } = await axios.get('http://api.github.com/orgs/takenet/repos');

    const c_oldest_five = data.filter((repo) => repo.language === 'C#').slice(0, 5);

    const dict = arrayToDict(c_oldest_five);


    res.status(200).json({ repos: dict });
  } catch (error) {
    console.log(error.message);
    res.status(400).json('Communication error with GitHub API');
  }

});

app.listen(PORT, () => {
  console.log(`App running into port: ${PORT}`);
});
