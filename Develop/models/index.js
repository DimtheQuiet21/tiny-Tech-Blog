const User = require('./User');
const BlogPost = require('./BlogPost');
const Tag = require('./Tag');
//const { DELETE } = require('sequelize/types/query-types');

User.hasMany(BlogPost, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

BlogPost.belongsTo(User, {
  foreignKey: 'poster_id',
});

Tag.hasMany(BlogPost, {
    foreignKey: 'blog_id'  
});
  
BlogPost.hasMany(Tag, {
  foreignKey: 'tag_id'
});

module.exports = { BlogPost, Tag, User };
