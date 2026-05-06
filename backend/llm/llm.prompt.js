const buildTaskAnalysisPrompt = (description) => {
    return `
  You are an assistant that classifies tasks.
  
  Given a task description, return:
  1. difficultyScore (integer from 1 to 10)
  2. category (one of: Coding, Finance, Personal)
  3. color (based on difficultyScore):
     - 1-3: green
     - 4-7: yellow
     - 8-10: red
  
  Respond ONLY in JSON format like:
  {
    "difficultyScore": number,
    "category": "Coding | Finance | Personal",
    "color": "green | yellow | red"
  }
  
  Task Description:
  "${description}"
  `;
  };
  
  module.exports = { buildTaskAnalysisPrompt };