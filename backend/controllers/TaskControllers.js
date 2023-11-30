const TaskModel = require("../models/TaskModel");

module.exports.getTasks = async (req, res) => {
  try {
    const tasks = await TaskModel.find();
    res.send(tasks);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: error, msg: "Something went wrong" });
  }
};

module.exports.saveTask = async (req, res) => {
  const { task } = req.body;

  try {
    const data = await TaskModel.create({ task });
    res.status(201).send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: error, msg: "Something went wrong" });
  }
};

module.exports.updateTasks = async (req, res) => {
  const { id } = req.params;
  const { task } = req.body;

  try {
    const updatedTask = await TaskModel.findByIdAndUpdate(id, { task }, { new: true });
    res.send(updatedTask ? "Updated successfully" : "Task not found");
  } catch (error) {
    console.error(error);
    res.status(500).send("Something went wrong");
  }
};

module.exports.deleteTask = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedTask = await TaskModel.findByIdAndDelete(id);
    res.send(deletedTask ? "Deleted successfully" : "Task not found");
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: error, msg: "Something went wrong" });
  }
};
