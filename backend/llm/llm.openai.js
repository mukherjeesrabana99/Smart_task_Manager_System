const OpenAI = require("openai");
const { buildTaskAnalysisPrompt } = require("./llm.prompt");
const { parseLLMResponse } = require("./llm.parser");

require('dotenv').config()

const client = new OpenAI({
  apiKey: process.env.OPEN_AI_API_KEY,
});



const analyzeTask = async (description) => {
  try {
    const prompt = buildTaskAnalysisPrompt(description);

    const response = await client.chat.completions.create({
      model: "gpt-4.1-mini",
      messages: [
        { role: "system", content: "You are a precise JSON generator." },
        { role: "user", content: prompt },
      ],
      temperature: 0.2,
    });

    const rawText = response.choices[0].message.content;

    return parseLLMResponse(rawText);
  } catch (err) {
    throw new Error("LLM analysis failed: " + err.message);
  }
};

module.exports = { analyzeTask };