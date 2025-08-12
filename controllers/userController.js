import User from '../models/users.js';

const index = (req, res) => {
  const users = User.getAllUsers();
  res.render('index', { users });
};

export default {
  index,
};
