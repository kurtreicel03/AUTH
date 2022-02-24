const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "/config.env") });
const app = require("./app");

app.listen(process.env.PORT, () => {
  console.log(`App is listening to port ${process.env.PORT}`);
});
