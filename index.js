const express = require("express");
const bodyParser = require("body-parser");
const { WebhookClient } = require("dialogflow-fulfillment");

const app = express();
app.use(bodyParser.json());

app.post("/webhook", (req, res) => {
  const agent = new WebhookClient({ request: req, response: res });

  function contratarPlanos(agent) {
    const codigoUsuario = Math.random().toString(36).substring(2, 8).toUpperCase();
    agent.add(`Obrigado por contratar! Seu código de usuário é: ${codigoUsuario}`);
  }

  let intentMap = new Map();
  intentMap.set("contratar_plano", contratarPlanos);
  agent.handleRequest(intentMap);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
