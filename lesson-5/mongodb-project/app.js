const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config()

const {DB_HOST} = process.env;

mongoose.set("strictQuery", true)

mongoose.connect(DB_HOST)
    .then(()=> console.log("Database connection success"))
    .catch(error => console.log(error.message))