const { Router } = require('express');
const express = require('express');
const router = express(Router);
const Articles = require('../models/articles');

//Request get => all articles

router.get('/', (req, res) => {
    Articles.find()
        .then(article => res.json(article))
        .catch(err => res.status(400).json(`Error: ${err}`))
});

//Request Post => new article

router.post('/add', (req, res) => {
    const newArticle = new Articles({
        title: req.body.title,
        article: req.body.article,
        authorname: req.body.authorname
    });

    newArticle.save()
        .then(() => res.json(`New Article Posted`))
        .catch(err => res.status(400).json(`Error: ${err}`));
});

//Request get => Find Article By ID

router.get('/:id', (req, res) => {
    Articles.findById(req.params.id)
        .then(article => res.json(article))
        .catch(err => res.status(400).json(`Error: ${err}`))
});

//Request put => Find Article By ID and Update

router.put('/update/:id', (req, res) => {
    Articles.findById(req.params.id)
        .then(article => {
            article.title = req.body.title,
            article.article = req.body.article,
            article.authorname = req.body.authorname;

            article
                .save()
                .then(() => res.json(`The Article is updated`))
                .catch(err => res.status(400).json(`Error: ${err}`))
        })
        .catch(err => res.status(400).json(`Error: ${err}`));
});

//Request delete => Find Article by ID and delete

router.delete('/:id', (req, res) => {
    Articles.findByIdAndDelete(req.params.id)
        .then(() => res.json(`Article Deleted`))
        .catch(err => res.status(400).json(`Error: ${err}`))
});

module.exports = router;