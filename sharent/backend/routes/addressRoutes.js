const express = require("express");

const AddressController = require("../controllers/addressController");

const checkAuth = require("../middleware/check-auth");


const router = express.Router();

router.post("",  AddressController.createAddress);

// router.put("/:id", checkAuth, extractFile, ProductController.updateProduct);

// router.get("", AddressController.getAddres);

// router.get("/:id", AddressController.getAddress);

// router.delete("/:id", checkAuth, ProductController.deleteProduct);

module.exports = router;