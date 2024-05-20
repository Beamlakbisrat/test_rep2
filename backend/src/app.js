const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
require('dotenv').config();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const userRoutes = require('./routes/user');
const taskRoutes = require('./routes/task');

app.use('/api/users', userRoutes);
app.use('/api/tasks', taskRoutes);

module.exports = app;
