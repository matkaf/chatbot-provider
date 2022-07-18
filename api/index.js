const express = require('express');

const app = express();

const PORT = 3001;

app.get('/', (req, res) => {
  res.status(200).send('Hello API!');
});

app.listen(PORT, () => {
  console.log(`Aplicação rodando na porta ${PORT}`);
});
