const express = require("express");

const MessageController = require("../controllers/message");

const checkAuth = require("../middleware/check-auth");
const extractFile = require("../middleware/file");

const router = express.Router();

router.post("", checkAuth, extractFile, MessageController.createMessage);

router.get("", MessageController.getMessages);

router.get("/users", MessageController.getUsers);

router.get("/:id", MessageController.getMessage);

module.exports = router;