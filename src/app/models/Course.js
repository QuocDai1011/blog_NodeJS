const mongoose = require("mongoose");
const slugify = require("slugify");
var mongooseDelete = require("mongoose-delete");
const Schema = mongoose.Schema;

const Course = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    image: { type: String },
    videoID: { type: String, required: true },
    slug: { type: String, unique: true },
  },
  {
    timestamps: true,
  },
);

Course.pre("save", async function (next) {
  if (this.isModified("name") || !this.slug) {
    let baseSlug = slugify(this.name, { lower: true, strict: true });
    let slug = baseSlug;
    let counter = 1;

    // Tìm slug trùng trong database
    const CourseModel = mongoose.model("Course", Course);
    while (await CourseModel.exists({ slug })) {
      slug = `${baseSlug}-${counter++}`;
    }

    this.slug = slug;
  }
  next();
});

Course.plugin(mongooseDelete, {
  deletedAt: true,
  overrideMethods: "all",
});

module.exports = mongoose.model("Course", Course);
