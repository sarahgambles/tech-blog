const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our User model
class Comment extends Model {}

// define table columns and configuration
Comment.init(
    {
        body: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize
    }
);

module.exports = Comment;