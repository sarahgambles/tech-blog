const router = require('express').Router();
const { Post } = require('../models');
const withAuth = require('../utils/auth');

// get login
router.get('/', withAuth, (req, res) => {
    console.log(req.session);
    console.log('====================');
    Post.findAll({
        where: {
            user_id: req.session.user_id
        }
    })
    .then(dbPostData => {
        const posts = dbPostData.map(post => post.get({ plain: true }));
        res.render('dashboard-admin', { 
            layout: 'dashboard',
            posts
        });
    })
    .catch(err => {
        console.log(err);
        res.redirect('login');
    });
});

// get new post
router.get('/new', withAuth, (req, res) => {
    res.render('new-post', {
        layourd: 'dashboard'
    });
});

// get edit by id
router.get('/edit/:id', withAuth, (req, res) => {
    Post.findByPk(req.params.id) 
    .then(dbPostData => {
        if (dbPostData) {
            const post = dbPostData.get({ plain: true });

            res.render('edit-post', {
                layout: 'dashboard',
                post
            });
        } else {
            res.status(404).end();
        }
    }) 
    .catch(err => {
        res.status(500).json(err);
    });
});

module.exports = router;