const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class BlogPost extends Model {}

BlogPost.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description:{
      type:DataTypes.TEXT,
      allowNull: false
    },
    poster_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
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
    modelName: 'BlogPost',
  }
);

module.exports = BlogPost;
