const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },
        description: {
            type: DataTypes.TEXT,
            allowNull:false
        },
        poster_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id',
            }
        },
        BlogPost_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'BlogPost',
                key: 'id',
            }
        },
        likes:{
            type: DataTypes.INTEGER,
            allowNull:true
        }
    },
    {   
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'Comment',
    }
)

module.exports = Comment;