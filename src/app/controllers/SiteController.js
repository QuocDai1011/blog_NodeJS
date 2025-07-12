const Course = require("../models/Course");
const { multipleMongooseToObject } = require("../../uitl/mongoose");

class SiteController {
  // GET /
  async index(req, res, next) {
    Course.find({})
      .then((courses) => {
        res.render("home", { courses: multipleMongooseToObject(courses) });
      })
      .catch(next);
    // res.render("home");
  }

  // [GET] /search
  search(reg, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
