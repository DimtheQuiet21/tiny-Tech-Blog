const router = require('express').Router();
const { BlogPost } = require('../models/index.js');
// TODO: Import the custom middleware
const getAuth = require('../utils/auth.js')
const getPast = require('../utils/pastdays.js')


/*
The first get call will call on page load and summon the past 20 most recent blog posts.
We have a middle ware function (to flex) and call that day information from Day JS and use it as a query parameter
*/
router.get('/', getAuth, async (req, res) => {
    try { 
        const dbBlogPostData = await BlogPost.findAll({
        where: {poster_id:req.session.user_id},    
        order: [Task, 'createdAt', 'DESC'],
        include: [
          {
            model: Tag,
            attributes: ['tag_name'],
          },
        ],
      });
      const blog_posts = dbBlogPostData.map((posts) =>
      posts.get({ plain: true })
    );
    res.render('dashboard', {
        blog_posts,
        loggedIn: req.session.loggedIn,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  module.exports = router;