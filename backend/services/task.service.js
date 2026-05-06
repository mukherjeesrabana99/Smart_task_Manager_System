const { analyzeTaskWithRetry } = require("../llm/llm.anthropic");
const taskRepository = require("../repositories/task.repositories");



const createTask = async ({ title, description }) => {
  if (!title || !description) {
    throw new Error("Title and description are required");
  }

  console.log("analyzing")
  const fallbackAnalysis={
    difficultyScore:   0,
    category: "General",
    color:  "yellow",
  }
  const analysis = await analyzeTaskWithRetry(description) || fallbackAnalysis ;
  console.log("analysis done", analysis)

  const taskData = {
    title,
    description: description || title,
    difficultyScore: analysis?.difficultyScore || 0,
    category: analysis?.category || "General",
    color: analysis?.color || "yellow",
  };

  return await taskRepository.createTask(taskData);
};


const getAllTasks = async () => {
  return await taskRepository.getAllTasks();
};


const getTaskById = async (id) => {
  const task = await taskRepository.getTaskById(id);
  if (!task) throw new Error("Task not found");
  return task;
};


const updateTask = async (id, data) => {
  const existingTask = await taskRepository.getTaskById(id);
  if (!existingTask) throw new Error("Task not found");

  let updatedFields = { ...data };

  if (data.description) {
    const analysis = await analyzeTask(data.description);

    updatedFields.difficultyScore = analysis.difficultyScore;
    updatedFields.category = analysis.category;
    updatedFields.color = analysis.color;
  }

  return await taskRepository.updateTask(id, updatedFields);
};


const deleteTask = async (id) => {
  const deleted = await taskRepository.deleteTask(id);
  if (!deleted) throw new Error("Task not found");
  return deleted;
};

module.exports = {
  createTask,
  getAllTasks,
  getTaskById,
  updateTask,
  deleteTask,
};