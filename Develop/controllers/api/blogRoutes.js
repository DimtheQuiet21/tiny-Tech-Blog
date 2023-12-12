const router = require('express').Router();
const { BlogPost } = require('../../models/index.js');

router.get('/:id', async (req, res ) => {
    try { 
        const dbBlogPostData = await BlogPost.findOne({
        where: {id:req.params.id}
      });
      const blog_posts = dbBlogPostData.map((posts) =>
      posts.get({ plain: true })
    );
    res.render('homepage', {
        blog_posts,
        loggedIn: req.session.loggedIn,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

module.exports = router;