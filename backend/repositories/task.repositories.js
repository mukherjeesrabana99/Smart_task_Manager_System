const Task = require("../models/Task.js");


const createTask = async ({ title, description, difficultyScore, category, color }) => {
  try {
    const task = new Task({
      title,
      description,
      difficultyScore,       
      category,
      color      
    });

    return await task.save();
  } catch (err) {
    throw new Error(`Error creating task: ${err.message}`);
  }
};


const getAllTasks = async () => {
  try {
    return await Task.find().sort({ createdAt: -1 });
  } catch (err) {
    throw new Error(`Error fetching tasks: ${err.message}`);
  }
};


const getTaskById = async (id) => {
  try {
    return await Task.findById(id);
  } catch (err) {
    throw new Error(`Error fetching task: ${err.message}`);
  }
};


const updateTask = async (id, { title, description }) => {
  try {
    return await Task.findByIdAndUpdate(
      id,
      { title, description },
      { new: true, runValidators: true }
    );
  } catch (err) {
    throw new Error(`Error updating task: ${err.message}`);
  }
};

const deleteTask = async (id) => {
  try {
    return await Task.findByIdAndDelete(id);
  } catch (err) {
    throw new Error(`Error deleting task: ${err.message}`);
  }
};

module.exports = {
  createTask,
  getAllTasks,
  getTaskById,
  updateTask,
  deleteTask,
};