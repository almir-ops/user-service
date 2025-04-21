// src/usecases/registerUser.js

const SequelizeUserRepository = require('../infra/repositories/SequelizeUserRepository'); 

async function registerUser(userData) {
  // Verificar se o email já está em uso
  const existingUser = await SequelizeUserRepository.findByEmail(userData.email);
  if (existingUser) {
    throw new Error('Email ja está em uso');
  }

  // Criar o usuário no banco de dados
  const user = await SequelizeUserRepository.create(userData);

  // Retorna o usuário criado, mas sem a senha
  const { password, ...userWithoutPassword } = user.dataValues;
  return userWithoutPassword;
}

module.exports = registerUser;
