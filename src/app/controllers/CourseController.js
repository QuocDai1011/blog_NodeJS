const Course = require("../models/Course");
const {
  mongooseToObject,
  multipleMongooseToObject,
} = require("../../uitl/mongoose");

class CourseController {
  // [GET] /course/:slug
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((course) => {
        res.render("courses/show", { course: mongooseToObject(course) });
      })
      .catch(next);
  }

  // [GET] /course/create
  create(req, res, next) {
    res.render("courses/create");
  }

  // [GET] /course/:id/edit
  edit(req, res, next) {
    Course.findById(req.params.id)
      .then((course) => {
        res.render("courses/edit", { course: mongooseToObject(course) });
      })
      .catch(next);
  }

  // [PUT] /course/:id
  update(req, res, next) {
    Course.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect("/me/stored/courses"))
      .catch(next);
  }

  // [DELETE] /course/:id
  delete(req, res, next) {
    Course.delete({ _id: req.params.id })
      .then(() => res.redirect("/me/stored/courses"))
      .catch(next);
  }

  // [POST] /course/store
  store(reg, res, next) {
    const formData = reg.body;
    formData.image = `https://img.youtube.com/vi/${reg.body.videoID}/sddefault.jpg`;
    const course = new Course(formData);
    course
      .save()
      .then(() => res.redirect("/"))
      .catch(() => {});
  }

  // [PATCH] course/:id/restore
  restore(req, res, next) {
    Course.restore({ _id: req.params.id })
      .then(() => res.redirect("/me/stored/courses"))
      .catch(next);
  }
}

module.exports = new CourseController();
