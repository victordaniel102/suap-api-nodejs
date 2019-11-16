
# SUAP API Nodejs
Baseado em [suap-api-php](https://github.com/ivmelo/suap-api-php), este repositorio tem como objetivo ser um wrapper em nodejs da [API SUAP v2](https://suap.ifrn.edu.br/api/), facilitando seu uso apartir da diminuição do entry point original.

## Instalação
**npm**

`npm install @suap/node-api`

**yarn**

`yarn add @suap/node-api`

## 📣 Exemplo
Devido a quantidade de funções utilizadas ao mesmo tempo, isto pode levar alguns segundos
```js
var suap = require("@suap/node-api");

(async function()
{
  var token = await suap.auth(
    "20191011110041", 
    "SENHA123@");

  var data = await suap.getData();
  var years = await suap.getYears();
  var notes = await suap.getNotes(2019, 1);
  var classes = await suap.getClasses(2019, 1);
  
  console.log(data, years, notes, classes);
})();
```

## 📄 Documentação

| Funções | Parâmetros| Descrição |
| -------- | ----------- | ----------- |
| auth | matricula, senha | Autenticação do usuário para utilização da API |
| getData| | Retorna os dados pessoais |
| getYears| | Retorna os períodos letivos |
| getNotes| ano, etapa | Retorna as notas de um ano e etapa |
| getClasses | ano, etapa | Retorna as turmas de um ano e etapa |
| setToken| token | Modifica o valor do token |

## ☕️ Contribuidores
| | | 
| :--------: | :-----------: |
| ![enter image description here](https://avatars0.githubusercontent.com/u/36797037?s=80&v=4)|![enter image description here](https://avatars0.githubusercontent.com/u/35354040?s=80&v=4)
|[Cripboy](https://github.com/CripBoy) |[Daniel](https://github.com/victordaniel102)