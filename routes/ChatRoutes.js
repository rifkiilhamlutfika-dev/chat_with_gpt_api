const express = require("express");
const router = express.Router();

const { getChat } = require("../app/controllers/chatControllers");

router.get("/", getChat);

module.exports = router;
