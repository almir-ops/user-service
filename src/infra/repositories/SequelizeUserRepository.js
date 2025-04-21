// src/infra/repositories/SequelizeUserRepository.js
const User = require('../../domain/entities/Users');

class SequelizeUserRepository {
  async create(userData) {
    const user = await User.create(userData);
    return user;
  }

  async findByEmail(email) {
    const user = await User.findOne({ where: { email } });
    return user;
  }

  // Você pode adicionar outras funções do CRUD conforme necessário
}

module.exports = new SequelizeUserRepository();
