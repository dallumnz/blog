const router = require('express').Router();
const Post = require('../models/postModel');

router.post("/", async (req, res) =>{
    // retrieve data from request
    const {title, createdAt, tags, html} = req.body;

    // construct post model
    const newPost = new Post({
        title,
        createdAt,
        tags,
        html
    });
    
    // save the post
    try{
        const savedPost = await newPost.save();
        res.json(savedPost);
    } catch (err) {
        console.error(err);
    }
});

router.get("/", async (req, res) => {
    // get all posts
    const posts = await Post.find();
    res.json(posts);
})

router.get("/:id", async (req, res) => {
    // get one by id
    const post = await Post.findById(req.params.id);
    res.json(post);
})
module.exports = router;