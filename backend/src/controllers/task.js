const Task = require('../models/Task');

exports.createTask = async (req, res) => {
  const { title, description, deadline, priority } = req.body;
  try {
    const task = new Task({ userId: req.userId, title, description, deadline, priority });
    await task.save();
    res.status(201).json(task);
  } catch (error) {
    res.status(400).json({ error: 'Error creating task' });
  }
};

exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ userId: req.userId });
    res.status(200).json(tasks);
  } catch (error) {
    res.status(400).json({ error: 'Error fetching tasks' });
  }
};

exports.updateTask = async (req, res) => {
  const { id } = req.params;
  const { title, description, deadline, priority, status } = req.body;
  try {
    const task = await Task.findOneAndUpdate({ _id: id, userId: req.userId }, { title, description, deadline, priority, status }, { new: true });
    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(400).json({ error: 'Error updating task' });
  }
};

exports.deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findOneAndDelete({ _id: id, userId: req.userId });
    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }
    res.status(200).json({ message: 'Task deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: 'Error deleting task' });
  }
};
