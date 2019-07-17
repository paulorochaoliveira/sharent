const express = require("express");

const CategoryController = require("../controllers/categoryController");

const checkAuth = require("../middleware/check-auth");


const router = express.Router();

router.post("",  CategoryController.createCategory);

// router.put("/:id", checkAuth, extractFile, ProductController.updateProduct);

router.get("", CategoryController.getCategories);

// router.get("/:id", CategoryController.getCategory);

// router.delete("/:id", checkAuth, ProductController.deleteProduct);

module.exports = router;