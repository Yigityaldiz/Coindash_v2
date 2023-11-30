const TaskModel = require("../models/TaskModel");

module.exports.getTasks = async (req, res) => {
  try {
    const tasks = await TaskModel.find();
    res.json(tasks);
  } catch (error) {
    console.error('Error fetching tasks:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports.saveTask = async (req, res) => {
  const { bitcoinData } = req.body;

  try {
    const task = await TaskModel.create({ bitcoinData });
    res.status(201).json(task);
  } catch (error) {
    console.error('Error saving task:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports.updateTasks = async (req, res) => {
  const { id } = req.params;
  const { bitcoinData } = req.body;

  try {
    const updatedTask = await TaskModel.findByIdAndUpdate(id, { bitcoinData }, { new: true });
    res.json(updatedTask ? 'Updated successfully' : 'Task not found');
  } catch (error) {
    console.error('Error updating task:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports.deleteTask = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedTask = await TaskModel.findByIdAndDelete(id);
    res.json(deletedTask ? 'Deleted successfully' : 'Task not found');
  } catch (error) {
    console.error('Error deleting task:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
