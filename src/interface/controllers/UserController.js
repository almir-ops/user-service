// src/interface/controllers/UserController.js
const registerUser = require('../../usecases/registerUser');

module.exports = function UserController() {
  return {
    register: async (req, res) => {
      try {
        const user = await registerUser(req.body);  // Chamando o usecase
        res.status(201).json({ message: 'User registered', user });
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
    }
  };
};
