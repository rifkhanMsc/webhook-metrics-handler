const commitDBService = require('../services/commitService');


const getAllUsers = async (req, res) => {
  try {
    const users = await commitDBService.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getUserById = async (req, res) => {
  const userId = req.params.id;

  try {
    const user = await commitDBService.getUserById(userId);

    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const createUser = async (req, res) => {
  const { userId, name, email } = req.body;

  try {
    const newUser = await commitDBService.createUser(userId, name, email);
    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Export the controller methods
module.exports = {
  getAllUsers,
  getUserById,
  createUser,
};