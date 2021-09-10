const router = require("express").Router();
const { User, Blog } = require("../models");
// Import the custom middleware
const withAuth = require("../utils/auth");

// GET all blog posts for homepage
router.get("/", async (req, res) => {
  try {
    const dbBlogData = await Blog.findAll({
      attributes: ["id", "title", "description", "created_at"],
      include: [
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });

    const blogPosts = dbBlogData.map((blog) => blog.get({ plain: true }));

    res.render("homepage", {
      blogPosts,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
