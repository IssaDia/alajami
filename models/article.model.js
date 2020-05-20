const mongoose = require('mongoose')
const Schema = mongoose.Schema
const marked = require('marked')
const slugify = require('slugify')
const createDomPurify = require('dompurify')
const { JSDOM } = require('jsdom')
const dompurify = createDomPurify(new JSDOM().window)



const articleSchema = new Schema({
    _id: Schema.Types.ObjectId,
    title: {type: String, required: true},
    markdown: {type: String, required: true},
    date: {type: Date,default: Date.now() },
    author: {type: String, required: true},
    slug: {type: String, required: true, unique: true}, 
    tags: {
        type: Schema.Types.ObjectId,
        ref: "Tag"
      },
      category: {
        type: Schema.Types.ObjectId,
        ref: "Category"
      },
    comments: {
      type: Schema.Types.ObjectId,
      ref: "Comment"
    },
    sanitizedHtml: {type: String, required: true}
  
},{
    timestamps: true,
})

articleSchema.pre('validate', function(next) {
  if (this.title) {
      this.slug = slugify(this.title, { lower: true, strict: true})
  }

  if (this.markdown) {
    this.sanitizedHtml = dompurify.sanitize(marked(this.markdown))
}


  next()
})

const Article = mongoose.model('Article', articleSchema)

module.exports = Article;