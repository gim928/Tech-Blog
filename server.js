const express = require("express");
// const routes = require("./controllers");
const sequelize = require("./config/connection");
const { User, Blog } = require("./models");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize
  .sync({ force: false })
  .then(() => {
    app.listen(PORT, () => console.log("Now listening"));
  })
  .catch((err) => {
    console.log(err);
  });