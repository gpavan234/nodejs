import express from 'express';
import userController from './controllers/userController.js';

const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

// Route for homepage
app.get('/', userController.index);

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
