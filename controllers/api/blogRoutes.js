const router = require('express').Router();
const { BlogPost, Comment, User} = require('../../models/index.js');

router.get('/:id', async (req, res) => {
    try { 
        const dbBlogPostData = await BlogPost.findOne({
        include:[
          { 
            model: User,
            //attributes: [username]
          },
          {
            model: Comment,
            include: [
              {
                model: User,
                //attributes: [username]
              }
            ],
            order: [
              ['createdAt', 'DESC']
            ]
          }
        ],
        where: {id:req.params.id}
      });
      const blog_post = dbBlogPostData.get({ plain: true })
      console.log(blog_post)
      res.render('blog-post', {
        blog_post,
        logged_in: req.session.logged_in,
      });
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  });

router.post('/:id', async (req,res) => {
  try {
    const comment_data = req.body;
    comment_data.poster_id = req.session.user_id;
    comment_data.BlogPost_id = parseInt(req.params.id);
    comment_data.likes = 0;
    console.log(comment_data);
    const posted_comment = await Comment.create(comment_data);
    console.log(posted_comment);
    res.status(201).json(posted_comment);
  } catch (err) {
    console.error(err);
    console.log(req.body)
    res.status(500).json({ error: 'Internal Server Error' });
  };
})
module.exports = router;