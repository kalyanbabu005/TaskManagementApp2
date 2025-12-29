const express = require('express');
const { Sequelize } = require('sequelize');
const cors = require('cors');
const taskRoutes = require('./routes/taskRoutes');
const { Task, initTask } = require('./models/Task');
const app = express();
app.use(cors());
app.use(express.json());

const sequelize = new Sequelize('taskdb', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql'
});

initTask(sequelize);

sequelize.authenticate()
  .then(() => console.log('MySQL connected'))
  .catch(err => console.log('DB Error:', err));

sequelize.sync().then(() => console.log('Tables synced'));

app.use('/api/tasks', taskRoutes);
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));