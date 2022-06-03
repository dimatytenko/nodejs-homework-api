const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const { HTTP_STATUS_CODE } = require("./libs/constants");

require("dotenv").config();

const contactsRouter = require("./routes/api/contacts");

const app = express();

const formatsLogger =
  app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/api/contacts", contactsRouter);

app.use((req, res) => {
  res
    .status(HTTP_STATUS_CODE.BAD_REQUEST)
    .json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  res
    .status(HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR)
    .json({ message: err.message });
});

module.exports = app;
