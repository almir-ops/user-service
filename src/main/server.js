require('dotenv').config();
const express = require('express');
const userRoutes = require('../interface/routes/userRoutes');
const sequelize = require('../infra/database/sequelize');
const User = require('../domain/entities/Users'); 

const app = express();

// Middleware
app.use(express.json());

// Rotas
app.use('/users', userRoutes);

// Sincroniza com o banco
sequelize.sync().then(() => {
  console.log('User DB ready!');
});

// Inicializa o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`User Service running on port ${PORT}`);
});
