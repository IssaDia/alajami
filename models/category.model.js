const mongoose = require('mongoose')
const Schema = mongoose.Schema
const slugify = require('slugify')
const uniqueValidator = require('mongoose-unique-validator')

const categorySchema = new Schema({
  _id: Schema.Types.ObjectId,
  title: {type: String, unique: [true, 'Un article avec ce nom existe déja'], required: [true, 'Merci de spécifier un titre']} , 
  articles: [{
    type: Schema.Types.ObjectId,
    ref: "Article", 
  }],
  slug: {
    type: String
  },

}, {
  timestamps: true,
});

categorySchema.plugin(uniqueValidator);


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