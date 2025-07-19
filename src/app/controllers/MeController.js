const Course = require("../models/Course");
const { multipleMongooseToObject } = require("../../uitl/mongoose");

class MeController {
  // [GET] /stored/courses
  storedCourses(reg, res, next) {
    Course.find({})
      .then((courses) => {
        res.render("me/stored-courses", {
          courses: multipleMongooseToObject(courses),
        });
      })
      .catch(next);
  }

  // [GET] /trash/courses
  trashCourses(reg, res, next) {
    Course.findDeleted({})
      .then((courses) => {
        res.render("me/trash-courses", {
          courses: multipleMongooseToObject(courses),
        });
      })
      .catch(next);
  }
}

module.exports = new MeController();
