module.exports = (repos) => {
  const c_oldest_five = repos.filter((repo) => repo.language === 'C#').slice(0, 5);

  return c_oldest_five;
};
