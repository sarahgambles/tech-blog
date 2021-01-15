const router = require('express').Router(); 
const sequelize = require('../../config/connection');
const { Post, Comment, User } = require('../../models');

const withAuth = require('../../utils/auth');

// create user post
router.post('/', withAuth, (req, res) => {
    const body = req.body;
    console.log(req.session.userId);

    Post.create({ 
        ...body,
        userId: req.session.userId
    })
    .then(newPost => {
        res.json(newPost);
    })
    .catch(err => {
        res.status(500).json(err);
    });
});

router.put('/:id', withAuth, (req, res) => {
    Post.update(req.body, {
        where: {
            id: req.params.id
        }
    })
    .then(data => {
        if(data > 0) {
            res.status(200).end();
        } else {
            res.status(404).end();
        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.delete('/:id', withAuth, (req, res) => {
    console.log('id', req.params.id);
    Post.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbPostData => {
        if (dbPostData > 0) {
            res.status(200).end();
        } else {
            res.status(404).end();
        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;

// follow module for the rest of this route

