// models/user.js
const users = [
  { id: 1, name: 'Pavan' },
  { id: 2, name: 'Alice' },
    { id: 3, name: 'Bob', age: 30 }
];

const getAllUsers = () => users;

export default {
  getAllUsers,
};
