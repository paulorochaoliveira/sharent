const express = require("express");

const ProductEvaluationController = require("../controllers/productevaluation");

const checkAuth = require("../middleware/check-auth");
// const extractFile = require("../middleware/file");

const router = express.Router();

router.post("", checkAuth, ProductEvaluationController.createProductEvaluation);

// router.put("/:id", checkAuth, ProductEvaluationController.updateProduct);

// router.get("", ProductEvaluationController.getProducts);

// router.get("/userProducts", ProductEvaluationController.getProductsUser);

// router.get("/:id", ProductEvaluationController.getProduct);

// router.delete("/:id", checkAuth, ProductEvaluationController.deleteProduct);

module.exports = router;