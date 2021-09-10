const User = require("./User");
const Blog = require("./Blog");

User.hasOne(Blog, {
  foreignKey: "user_id",
});

module.exports = {
  User,
  Blog,
};
