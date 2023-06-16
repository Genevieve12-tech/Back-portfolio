const express = require("express");
const App = express();
const mongoose = require("mongoose");
const { MONGO_DB_CONFIG } = require("./config/app.config");
const cors = require('cors');

// MONGODB CONNECTION
mongoose.connect(MONGO_DB_CONFIG.DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connection to MongoDB successful');
}).catch((error) => {
  console.log('Error connecting to MongoDB:', error);
});

// Enable CORS
App.use(cors());

// Middleware to parse our JSON data
App.use(express.json());

// Define a route to fetch the data
App.use("/api", require("./Router/app.route"));

// Start the server
App.listen(8000, () => {
  console.log("Server started on port 8000");
});
