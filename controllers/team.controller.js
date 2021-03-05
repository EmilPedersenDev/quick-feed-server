const db = require("../models");
const Team = db.team;

module.exports = (app) => {
  app.get("/team", (req, res) => {
    res.json({ message: "Get the team" });
  });
};
