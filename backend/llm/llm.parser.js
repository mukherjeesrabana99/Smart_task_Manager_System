const parseLLMResponse = (rawText) => {
    try {
      const json = JSON.parse(rawText);
  
      if (
        typeof json.difficultyScore !== "number" ||
        !["Coding", "Finance", "Personal"].includes(json.category) ||
        !["green", "yellow", "red"].includes(json.color)
      ) {
        throw new Error("Invalid LLM response format");
      }
  
      return json;
    } catch (err) {
      throw new Error("Failed to parse LLM response: " + err.message);
    }
  };
  
  module.exports = { parseLLMResponse };