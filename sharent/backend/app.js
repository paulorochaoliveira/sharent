const express = require('express');
const path = require("path");
const bodyParser = require("body-parser");

const productRoutes = require("./routes/products");
const userRoutes = require("./routes/users");
const messageRoutes = require("./routes/messages");
const productEvaluationRoutes = require("./routes/productevaluation");
const categoryRoutes = require("./routes/categoryRoutes");
const addressRoutes = require("./routes/addressRoutes");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/images", express.static(path.join("backend/images")));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

app.use("/api/product", productRoutes);
app.use("/api/user", userRoutes);
app.use("/api/message", messageRoutes);
app.use("/api/productEvaluation", productEvaluationRoutes);
app.use("/api/category", categoryRoutes);
app.use("/api/address", addressRoutes);

module.exports = app;
