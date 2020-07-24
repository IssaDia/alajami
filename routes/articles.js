const router = require('express').Router()
let Article = require('../models/article.model')
let Category = require('../models/category.model')
const mongoose = require('mongoose')


router.route('/').get((req, res) => {
  Article.find()
    .populate({
      path: 'category',
      select: 'title',
      model: 'Category'
    })
    .then(articles => res.json(articles))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/recents').get((req, res) => {
  Article.find().sort({
      createdAt: 'desc'
    })
    .populate({
      path: 'category',
      select: 'title',
      model: 'Category'
    })
    .then(articles => res.json(articles))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/admin/add').post((req, res) => {
  const title = req.body.title;
  const markdown = req.body.markdown;
  const author = req.body.author;
  const slug = req.body.slug;
  const category = req.body.category

  const newArticle = new Article({
    _id: new mongoose.Types.ObjectId(),
    title,
    markdown,
    author,
    slug,
    category
  });




  newArticle.save()
    .then(() => res.redirect(`/articles/${newArticle.slug}`))
    .then(() => res.status(201).json({
      message: 'Article added!',
      createdArticle: newArticle
    }))

    Category.findOneAndUpdate(
      { "_id": req.body.category },
      { "$push": { "articles" : newArticle._id } },
    )
    .catch(err => res.status(400).json('Error: ' + err));

});

router.route('/:slug').get((req, res) => {
  Article.findOne({
      slug: req.params.slug
    })
    .then(article => res.json(article))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/admin/:id').delete((req, res) => {
  Article.findByIdAndDelete(req.params.id)
    .then(() => res.json('Article deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/admin/update/:id').post((req, res) => {
  Article.findById(req.params.id)
    .then(article => {
      article.title = req.body.title;
      article.markdown = req.body.markdown;
      article.author = req.body.author;
      article.slug = req.body.slug;

      article.save()
        .then(() => res.json('Article updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;