const express = require('express');
const path = require('path')
const cors = require('cors');

const app = express();

const todoRouter = require('./router/todo.router')

app.use(cors({
  origin: 'http://localhost:8080'
}));
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('/todos', todoRouter);
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
}); 

module.exports = app;
