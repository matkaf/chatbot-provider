# TakeBlip - chatbot-provider

Essa API alimenta o chatbot construído para o teste técnico da Take Blip. Ele utiliza a API pública do GitHub para buscar os 5 (cinco) repositórios em `C#` mais antigos da empresa. A aplicação foi desenvolvida em Javascript, com Node.js e Express. E o padrão de arquitetura utilizado foi o M.S.C (model, service e controller).

  ```
  .
  ├──flow
  │   ├──🔸images (contém as imagens utilizadas pelo chatbot)
  │   ├──mybotflow.json
  ├──api
  │   ├──🔸controllers
  │       ├──index.js
  │   ├──🔸services
          |──index.js
  │   ├──🔸helpers
          ├──arrayToDict.js
          ├──filterFiveByLang.js
  └──🔸index.js
  ```

## :rocket: Funcionamento da API

:computer: **API Live**: https://chatbot-provider.herokuapp.com/

Para acessar a API basta clicar no link acima. Ela possui apenas uma rota, no método `GET`, que retorna os 5 (cinco) repositórios solicitados no teste. A resposta vem no formato JSON, contendo um objeto pai com 5 objetos dentro no formato **dictionary** (padrão que se encaixa no funcionamento do chatbot).

Esses objetos estão ordenados pela data de criação do repositório, em ordem crescente (mais antigo para o mais novo) e possuem a seguinte estrutura :

```js
{
  "0": {
    "avatar": "url do avatar da org dona do repositorio",
    "full_name":"nome do repositório",
    "description":"descrição do repositório"
  },
  "1": {
    "avatar": "url do avatar da org dona do repositorio",
    "full_name":"nome do repositório",
    "description":"descrição do repositório"
  },
  ...
}
```

:rocket: Desenvolvido por: [Matheus Kaffka](https://www.linkedin.com/in/matheus-kaffka/)
