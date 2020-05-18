const router = require('express').Router();
let Article = require('../models/article.model');

router.route('/').get((req, res) => {
  Article.find()
    .then(articles => res.json(articles))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/admin/add').post((req, res) => {
  const title = req.body.title;
  const text = req.body.text;
  const date = Date.parse(req.body.date);
  const author = req.body.author;
  const slug = req.body.slug;


  const newArticle = new Article({
    title,
    text,
    date,
    author,
    slug
  });

  newArticle.save()
  .then(() => res.json('Article added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Article.findById(req.params.id)
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
      article.title = req.body.username;
      article.text = req.body.description;
      article.author = Number(req.body.duration);
      article.slug = req.body.slug;
      article.date = Date.parse(req.body.date);

      article.save()
        .then(() => res.json('Exercise updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;