const axios = require('axios');

const arrayToDict = require('../helpers/arrayToDict');
const filterFiveByLang = require('../helpers/filterFiveByLang');

const getOldestFive = async () => {
  try {
    const { data } = await axios.get('http://api.github.com/orgs/takenet/repos');

    const filter = filterFiveByLang(data);

    const response = arrayToDict(filter);

    return { found: true, message: response };
  } catch (error) {
    console.log(error.message);
    return { found: false, message: 'Communication error with GitHub API' };
  }
};

module.exports = {
  getOldestFive,
};
