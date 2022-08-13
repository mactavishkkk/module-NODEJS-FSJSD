// Declarando arquivos
const express = require('express');
const routes = require('./routes')

// Associations
require('../config/associations');

// Criando nossa Variável de aplicação
const app = express();

// Falando para nossa aplicação o que ela irá usar
app.use(express.json());
app.use(routes);

// Falando em qual porta ela observará
app.listen(3000);