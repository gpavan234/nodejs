import User from '../models/users.js';

const index = (req, res) => {
  res.send('Welcome to the homepage');
};

export default { index };
