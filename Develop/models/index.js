const User = require('./User');
const BlogPost = require('./BlogPost');
//const { DELETE } = require('sequelize/types/query-types');

User.hasMany(BlogPost, {
  foreignKey: 'poster_id',
  onDelete: 'CASCADE'
});

BlogPost.belongsTo(User, {
  foreignKey: 'poster_id',
});

module.exports = { BlogPost, User };
