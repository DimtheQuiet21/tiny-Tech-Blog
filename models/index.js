const User = require('./User');
const BlogPost = require('./BlogPost');
const Comment = require('./Comment');
//const { DELETE } = require('sequelize/types/query-types');

User.hasMany(BlogPost, {
  foreignKey: 'poster_id',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
});

User.hasMany(Comment, {
  foreignKey: 'poster_id',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
});

BlogPost.belongsTo(User, {
  foreignKey: 'poster_id',
  onUpdate: 'CASCADE'
});

BlogPost.hasMany(Comment, {
  foreignKey: 'BlogPost_id',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
});

Comment.belongsTo(User, {
  foreignKey: 'poster_id',
  onUpdate: 'CASCADE'
});

Comment.belongsTo(BlogPost, {
  foreignKey: 'BlogPost_id',
  onUpdate: 'CASCADE'
});

module.exports = {BlogPost, User, Comment};
