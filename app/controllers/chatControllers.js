const ChatService = require("../services/ChatService");
const { responseStandard } = require("../../service/resTemp");

const getChat = async (req, res, next) => {
  try {
    const { text } = req.query;
    const response = await ChatService.chatResponse(text);
    responseStandard(200, response, res, "");
  } catch (error) {
    console.error(error);
    responseStandard(500, {}, res, `Error ${error}`);
  }
};

module.exports = { getChat };
