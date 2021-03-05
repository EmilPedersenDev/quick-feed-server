const db = require("../models");

const connectDB = () => {
  db.mongoose
    .connect(db.url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected To database");
    })
    .catch((err) => {
      console.log("Cannot connect to db");
      process.exit();
    });
};

module.exports = connectDB;
