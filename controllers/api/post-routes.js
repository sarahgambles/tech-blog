const router = require('express').Router(); 

const { Post, Comment, User } = require('../../models');

const withAuth = require('../../utils/auth');

router.post('/', withAuth, function(req, res) {
    Post.create({
        ...req.body, userId: req.session.userId
    })
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        res.status(500).json(err)
    })
});

router.put('/:id', withAuth, function(req, res) {
    Post.update(req.body, {
        where: {
            id: req.params.id
        }
    })
    .then(data => {
        res.end()
    })
    .catch(err => {
        res.status(500).json(err);
    })
});

// follow module for the rest of this route

