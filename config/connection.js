const mongoose = require("mongoose");
require('dotenv').config();
const dbOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const connectToDatabase = () => {
  mongoose
    .connect(process.env.MONGO_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
    .then(() => {
      console.log("Database Connected");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = { connectToDatabase };