const Course = require("../models/Course");
const {
  mongooseToObject,
  multipleMongooseToObject,
} = require("../../uitl/mongoose");

class CourseController {
  // [GET] /course/:slug
  show(reg, res, next) {
    Course.findOne({ slug: reg.params.slug })
      .then((course) => {
        res.render("courses/show", { course: mongooseToObject(course) });
      })
      .catch(next);
  }
}

module.exports = new CourseController();
