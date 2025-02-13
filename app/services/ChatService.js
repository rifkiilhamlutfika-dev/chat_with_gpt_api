const OpenAI = require("openai");
const openai = new OpenAI({ apiKey: process.env.GPT_KEY });

const chatResponse = async (text = "") => {
  const content = {
    rule: "ilham masih makan siang",
    content: text,
  };
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "user",
          content: `information saja: ${content.rule} petanyaan/text nya : ${content.content}`,
        },
      ],
    });

    return completion;
  } catch (error) {
    return error;
  }
};

module.exports = { chatResponse };
