const app = require("./app");
const db = require("./config/db");

const { PORT } = process.env;

db.then(() =>
  app.listen(PORT, () => {
    console.log("Database connection successful");
  })
).catch((error) => {
  console.log(error.message);
  process.exit(1);
});
