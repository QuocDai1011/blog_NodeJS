const express = require("express");
const router = express.Router();

// const newsRouter = require('./')

const meController = require("../app/controllers/MeController");

router.get("/stored/courses", meController.storedCourses);
router.get("/trash-can/courses", meController.trashCourses);

module.exports = router;
