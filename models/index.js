// import all models
const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

Post.belongsTo(User, {
    foreignKey: "postId",
    onDelete: "CASCADE"
});

Post.hasMany(Comment, {
    foreignKey: "post_id",
    onDelete: "CASCADE"
});

Comment.belongsTo(User, {
    foreignKey: "userId",
    onDelete: "CASCADE"
});

module.exports = { User, Comment, Post };

