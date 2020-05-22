const mongoose = require('mongoose')
const Schema = mongoose.Schema
const marked = require('marked')
const slugify = require('slugify')
const createDomPurify = require('dompurify')
const { JSDOM } = require('jsdom')
const dompurify = createDomPurify(new JSDOM().window)
const uniqueValidator = require('mongoose-unique-validator');




const articleSchema = new Schema({
    title: {type: String, unique: [true, 'Un article avec ce nom existe déja'], required: [true, 'Merci de spécifier un titre'] , 
    min: [3, 'Votre titre doit comporter un minimum de 3 caractéres'], max: [255, 'Votre titre doit comporter  un maximum de 255 caractéres'], trim: true},
    markdown: {type: String, required: [true, 'Merci de spécifier un texte'], min: [50, 'Votre texte doit comporter un minimum de 50 caractéres'], trim: true},
    date: {type: Date,default: Date.now(), trim: true },
    author: {type: String, required: [true, 'Merci de spécifier un auteur'], min: [10, 'Votre nom d\'auteur doit comporter un minimum de 10 caractéres'],
    max: [255, 'Votre nom d\'auteur doit comporter  un maximum de 255 caractéres'], trim: true},
    slug: {type: String, required: true, unique: [true, 'Un article avec ce nom existe déja'], trim: true}, 
    tags: {
        type: Schema.Types.ObjectId,
        ref: "Tag"
      },
      category: {
        type: Schema.Types.ObjectId,
        ref: "Category", unique: true
      },
    comments: {
      type: Schema.Types.ObjectId,
      ref: "Comment"
    },
    sanitizedHtml: {type: String, required: true}
  
},{
    timestamps: true,
})


articleSchema.plugin(uniqueValidator);


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