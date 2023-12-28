const router = require('express').Router();
const { BlogPost } = require('../../models/index.js');

router.get('/:id', async (req, res) => {
    try { 
        const dbBlogPostData = await BlogPost.findOne({
        where: {id:req.params.id}
      });
      const blog_post = dbBlogPostData.get({ plain: true })
      console.log(blog_post)
      res.render('blog-post', {
        blog_post,
        loggedIn: req.session.loggedIn,
      });
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  });

module.exports = router;