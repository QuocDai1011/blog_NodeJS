class NewsController {
  // GET /news
  index(reg, res) {
    res.render("news");
  }

  // [GET] /news/:slug
  show(reg, res) {
    res.send("<h1>NEWS DETAIL</h1>");
  }
}

module.exports = new NewsController();
