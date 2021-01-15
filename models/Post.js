// post needs body and title

const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our User model
class Post extends Model {}

// define table columns and configuration
Post.init(
    {
        title: DataTypes.STRING,
        body: DataTypes.STRING
    },
    {
        sequelize
    }
)

module.exports = Post;