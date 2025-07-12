const newsRouter = require("./news");
const siteRouter = require("./site");
const coursesRouter = require("./courses");

const port = 3001;

function route(app) {
  app.use("/news", newsRouter);

  app.use("/", siteRouter);

  app.use("/courses", coursesRouter);

  app.get("/api/users", (req, res) => {
    res.json([
      { id: 1, name: "Nguyễn Văn A" },
      { id: 2, name: "Trần Thị B" },
      { id: 3, name: "Trần Thị c" },
      { id: 4, name: "Trần Thị d" },
      { id: 5, name: "Trần Thị d" },
      { id: 6, name: "Trần Thị d" },
      { id: 7, name: "Trần Thị d" },
      { id: 8, name: "Trần Thị e" },
      { id: 9, name: "Trần Thị Trung" },
    ]);
  });

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
}

module.exports = route;
