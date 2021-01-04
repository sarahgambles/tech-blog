// import all models
const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');
const connection = require('../config/connection');

User.hasMany(Post, {
    foreignKey: 'user_id'
});

Post.belongsTo(User, {
    foreignKey: "user_id",
    onDelete: "CASCADE"
});

Post.hasMany(Comment, {
    foreignKey: "post_id",
    onDelete: "CASCADE"
});

Comment.belongsTo(User, {
    foreignKey: "user_id",
    onDelete: "CASCADE"
});

Comment.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});


module.exports = { User, Comment, Post };

