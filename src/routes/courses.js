const express = require("express");
const router = express.Router();

// const newsRouter = require('./')

const courseController = require("../app/controllers/CourseController");

router.get("/:slug", courseController.show);

module.exports = router;
