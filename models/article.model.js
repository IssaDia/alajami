const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    title: {type: String, required: true},
    text: {type: String, required: true},
    date: {type: Date,required: true },
    author: {type: String, required: true},
    slug: {type: String, required: true},
    tags: {
        type: Schema.Types.ObjectId,
        ref: "Tag"
      },
      comments: {
        type: Schema.Types.ObjectId,
        ref: "Tag"
      },


},{
    timestamps: true,
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;