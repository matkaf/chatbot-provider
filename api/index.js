const axios = require('axios');
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.json());

const PORT = process.env.PORT || 3001;

app.get('/', async (_req, res) => {
  try {
    const { data } = await axios.get('http://api.github.com/orgs/takenet/repos');

    const c_oldest_five = data.filter((repo) => repo.language === 'C#')
      .slice(0, 5)
      .map(({ owner, full_name, description }) => ({
        avatar: owner.avatar_url,
        full_name,
        description
      }));

    res.status(200).json(c_oldest_five);
  } catch (error) {
    console.log(error.message);
    res.status(400).json('Communication error with GitHub API');
  }

});

app.listen(PORT, () => {
  console.log(`App running into port: ${PORT}`);
});
