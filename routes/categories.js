const router = require('express').Router();
let Category = require('../models/category.model');
let slugify = require('slugify')
const mongoose = require('mongoose');
const Article = require('../models/article.model');


router.route('/').get((req, res) => {
  Category.find()
    .populate('article')
    .exec()
    .then(data => res.json(data))

    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/category/:slug').get((req, res) => {

  let slug = req.params.slug

  Category.findOne({
      slug: slug
    })
    .exec()
    .catch(err => res.status(400).json('Error: ' + err))
    .then(category => {
      Article.find({
          category: category.id
        })
        .populate({
          path: 'category',
          select: 'title',
          model: 'Category'
        })
        .exec()
        .then(articles => {
          res.status(200).json(articles);

        });

    });
});

router.route('/admin/add').post((req, res) => {
  const title = req.body.title;
  const slug = slugify(req.body.title);
  const newCategory = new Category({
    _id: new mongoose.Types.ObjectId(),
    title,
    slug
  });

  newCategory.save()
    .then(() => res.status(201).json({
      message: 'Article added!',
      createdCategory: newCategory
    }))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;