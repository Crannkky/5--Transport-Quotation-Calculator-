const express = require("express");
const path = require("path");
const mysql = require("mysql");
const dotenv = require("dotenv");

dotenv.config({
  path: "./.env",
});

const app = express();

const db = mysql.createConnection({
  host: process.env.DATABSE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  databse: process.env.DATABASE,
});

const publicDirectory = path.join(__dirname, "./public");
app.use(express.static(publicDirectory));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.set("view engine", "hbs");

db.connect((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Database connected...");
  }
});

// app.use("/", require("./routes/pages"));

// app.use("/auth", require("./routes/auth"));

app.use("/", require("./routes/pages"), require("./routes/auth"));

app.listen(5300, () => {
  console.log("Server started on PORT:5300");
});
