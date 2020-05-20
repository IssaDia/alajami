const router = require('express').Router();
let Category = require('../models/category.model');
let slugify = require('slugify')
const mongoose = require('mongoose')


router.route('/').get((req, res) => {
  Category.find()
    .select('title')
    .then(categories => res.json(categories))
    .catch(err => res.status(400).json('Error: ' + err));
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
      message : 'Article added!',
      createdCategory : newCategory}))
    .catch(err => res.status(400).json('Error: ' + err));
  });

  module.exports = router;