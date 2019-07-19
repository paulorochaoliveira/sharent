const express = require("express");
const cors = require('cors')

const UserController = require("../controllers/user");

const router = express.Router();
router.use(cors());

router.post("/register", UserController.createUser);

router.post("/login", UserController.userLogin);

router.put("/update", UserController.updateUser);

router.get("/profile", UserController.getUser);

module.exports = router;
