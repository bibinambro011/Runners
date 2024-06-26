const express = require("express");
const app = express();
const path = require("path");
const ejs = require("ejs");
const db = require("./config/connection");
const userRoute = require("./route/userRoute");
const adminroutes = require("./route/adminRoute");
const nocache = require("nocache");
const loger = require("morgan");
require('dotenv').config();
const Swal = require('sweetalert2');

const controller = require("./controller/userController");

const sessions = require("express-session");
const { v4: uuidv4 } = require("uuid");

const publicfolder = path.join(__dirname + "/assets");


app.use(nocache());
app.use(loger("dev"));

app.use(
  sessions({
    secret: uuidv4(),
    saveUninitialized: true,

    resave: false,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(publicfolder));
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

app.use("/admin", adminroutes);
app.use("/", userRoute);
app.get('*', (req, res) => {
  res.render("user/page-404")
});

db.connectToDatabase();
app.listen(process.env.PORT, () => {

  console.log(`listening to port ${process.env.PORT}`)
});
