// Referência: https://forum.blip.ai/t/acessando-dados-de-um-array-de-objetos/11860/11

module.exports = (repos) => {
  const dict = {};

  repos.forEach(({ owner, full_name, description}, index) => {
    dict[index] = {
      avatar: owner.avatar_url,
      full_name,
      description,
    };
  });

  return dict;
};
