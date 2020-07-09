
const router = require('express').Router();
let Category = require('../models/category.model');
let Article = require('../models/article.model');
let slugify = require('slugify')
const mongoose = require('mongoose')


router.route('/test/:slug').get((req, res) => {

    let slug = req.params.slug
    console.log(Category)
    Category.findOne({
        slug: slug
      })
      .populate('articles')
      .exec()
      .then(data => {
        res.status(200).json(data);
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });