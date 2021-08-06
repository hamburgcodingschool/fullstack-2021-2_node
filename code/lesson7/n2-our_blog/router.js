const express = require("express");
const authorController = require("./controllers/authorController");

const router = express.Router();

// router.get("/", homepageController.renderHomepage);

router.get("/authors", authorController.renderAuthors);
router.get("/author", authorController.renderAuthor);
router.get("/new_author", authorController.createAuthor);
router.post("/new_author", authorController.createAuthor);

// router.get("/posts", postController.renderPosts);

module.exports = router;