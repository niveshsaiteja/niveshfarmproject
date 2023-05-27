const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "10mb" }));

const PORT = process.env.PORT || 8080;

// Mongoose connection
console.log(process.env.MONGODB_URL);
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to Database"))
  .catch((err) => console.log(err));

// Schema
const userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
  confirmPassword: String,
  image: String,
});

// Model
const userModel = mongoose.model("user", userSchema);

// API - Root endpoint
app.get("/", (req, res) => {
  res.send("Server is running");
});

// API - User Signup
app.post("/signup", async (req, res) => {
  console.log(req.body);
  const { email } = req.body;

  try {
    const result = await userModel.findOne({ email: email });
    if (result) {
      res.send({ message: "Email id is already registered", alert: false });
    } else {
      const data = await userModel.create(req.body);
      res.send({ message: "Successfully signed up", alert: true });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Error signing up", alert: false });
  }
});

// API - User Login
app.post("/login", async (req, res) => {
  console.log(req.body);
  const { email } = req.body;

  try {
    const result = await userModel.findOne({ email: email });
    if (result) {
      const dataSend = {
        _id: result._id,
        firstName: result.firstName,
        lastName: result.lastName,
        email: result.email,
        image: result.image,
      };
      console.log(dataSend);
      res.send({ message: "Login successful", alert: true, data: dataSend });
    } else {
      res.send({ message: "Login failed", alert: false });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Error logging in", alert: false });
  }
});

// Product Section

const schemaProduct = mongoose.Schema({
  name: String,
  category: String,
  image: String,
  price: String,
  description: String,
});

const productModel = mongoose.model("product", schemaProduct);

// API - Upload Product
app.post("/uploadProduct", async (req, res) => {
  console.log(req.body);

  try {
    const data = await productModel.create(req.body);
    res.send({ message: "Upload successful" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Error uploading product" });
  }
});

// API - Get Products
app.get("/product", async (req, res) => {
  try {
    const data = await productModel.find({});
    res.send(data);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Error fetching products" });
  }
});

// Start the server
app.listen(PORT, () => console.log("Server is running at port: " + PORT));
