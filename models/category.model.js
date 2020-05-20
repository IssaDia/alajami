const mongoose = require('mongoose')
const Schema = mongoose.Schema
let slugify = require('slugify')


const categorySchema = new Schema({
  _id: Schema.Types.ObjectId,
  title: {
    type: String,
    required: true
  },
  articles: {
    type: Schema.Types.ObjectId,
    ref: "Article"
  },
  slug: {
    type: String
  },

}, {
  timestamps: true,
});

categorySchema.pre('validate', function (next) {
  if (this.title) {
    this.slug = slugify(this.title, {
      lower: true,
      strict: true
    })
  }

  next()
})

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;