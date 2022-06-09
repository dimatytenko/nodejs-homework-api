const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const { HttpCode } = require("./libs/constants");

const authRouter = require("./routes/api/auth");
const contactsRouter = require("./routes/api/contacts");

// require("dotenv").config();

const app = express();

const formatsLogger =
  app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/api/contacts", contactsRouter);
app.use("/api/auth", authRouter);

app.use((req, res) => {
  res
    .status(HttpCode.BAD_REQUEST)
    .json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  res
    .status(HttpCode.INTERNAL_SERVER_ERROR)
    .json({ message: err.message });
});

module.exports = app;
