const Anthropic = require("@anthropic-ai/sdk");

const { buildTaskAnalysisPrompt } = require("./llm.prompt");
const { parseLLMResponse } = require("./llm.parser");

require('dotenv').config()

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});



const fallback = {
  difficultyScore: 5,
  category: "Personal",
  color: "yellow",
};

const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

const analyzeTaskWithRetry = async (description, retries = 3) => {
  const prompt = buildTaskAnalysisPrompt(description);

  for (let i = 0; i < retries; i++) {
    try {
      const response = await anthropic.messages.create({
        model: "claude-3-haiku-20240307", 
        max_tokens: 200,
        temperature: 0.2,
        system: "You are a strict JSON generator. Always return valid JSON.",
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
      });

      const rawText = response.content?.[0]?.text;

      if (!rawText) {
        throw new Error("Empty response from Anthropic");
      }

      return parseLLMResponse(rawText);

    } catch (err) {
      if (i === retries - 1) break;

      
      await sleep(500 * (i + 1));
    }
  }

  return fallback;
};

module.exports = { analyzeTaskWithRetry };