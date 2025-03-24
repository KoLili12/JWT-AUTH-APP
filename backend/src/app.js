const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Маршруты
app.use('/api/auth', require('./routes/auth'));
app.use('/api/protected', require('./routes/protected'));

// Базовый маршрут
app.get('/', (req, res) => {
  res.json({ message: 'API работает' });
});

module.exports = app;