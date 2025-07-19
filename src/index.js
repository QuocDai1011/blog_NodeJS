const express = require("express");
const morgan = require("morgan");
const { engine } = require("express-handlebars");
const methodOverride = require("method-override");
const path = require("path");
const sass = require("sass");
const { log } = require("console");
const app = express();
const port = 3001;

const route = require("./routes");
const db = require("./config/db");

//connect db
db.connect();

// file static
app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded());
app.use(express.json());

app.use(methodOverride("_method"));

// file scss
// const result = sass.compile()

//HTTP logger
// app.use(morgan('combined'))

//Template engine
app.engine(
  "hbs",
  engine({
    defaultLayout: "main",
    extname: ".hbs",
    partialsDir: path.join(__dirname, "resources/views/partials"), // đúng
    helpers: {
      sum: (a, b) => a + b,
    },
  }),
);

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));

// routes init
route(app);
