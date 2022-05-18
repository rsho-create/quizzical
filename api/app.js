const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const usersRoutes = require("./routes/users");
const logRoutes = require("./middleware/log-routes");

//middleware
app.use(logRoutes);

app.get("/", (req, res) => res.send("Welcome to Quizzical!"));
app.use("/users", usersRoutes);

module.exports = app;
