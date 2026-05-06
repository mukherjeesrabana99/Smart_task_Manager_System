const taskService = require("../services/task.service");

const createTask = async (req, res) => {
    console.log("creating", req.body.title)
  try {
    const { title, description } = req.body;

    const task = await taskService.createTask({ title, description });

    return res.status(201).json({
      success: true,
      data: task,
    });
  } catch (err) {
    return res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};


const getAllTasks = async (req, res) => {
  try {
    const tasks = await taskService.getAllTasks();

    return res.status(200).json({
      success: true,
      data: tasks,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};


const getTaskById = async (req, res) => {
  try {
    const { id } = req.params;

    const task = await taskService.getTaskById(id);

    return res.status(200).json({
      success: true,
      data: task,
    });
  } catch (err) {
    return res.status(404).json({
      success: false,
      message: err.message,
    });
  }
};


const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;

    const updatedTask = await taskService.updateTask(id, {
      title,
      description,
    });

    return res.status(200).json({
      success: true,
      data: updatedTask,
    });
  } catch (err) {
    return res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};


const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;

    await taskService.deleteTask(id);

    return res.status(200).json({
      success: true,
      message: "Task deleted successfully",
    });
  } catch (err) {
    return res.status(404).json({
      success: false,
      message: err.message,
    });
  }
};

module.exports = {
  createTask,
  getAllTasks,
  getTaskById,
  updateTask,
  deleteTask,
};