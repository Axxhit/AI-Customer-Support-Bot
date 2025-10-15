import OpenAI from "openai";

export const configureOpenAI = () => {
  if (!process.env.OPEN_AI_SECRET) {
    throw new Error("OpenAI API key is not configured in environment variables");
  }

  const config = new OpenAI({
    apiKey: process.env.OPEN_AI_SECRET,
    organization: process.env.OPENAI_ORGANIZATION_ID,
  });
  return config;
};

