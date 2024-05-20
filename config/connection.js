const mongoose = require("mongoose");

console.log("env =>", process.env.ACCOUNT_SID);

const dbOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const connectToDatabase = () => {
  mongoose
    .connect("mongodb+srv://bibinambro011:2qDagDFW2ZkPAtaR@cluster0.kfuoxau.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
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