const Post = require('../models/Post.js')
module.exports = {
    index: async (req, res) => {
        const posts = await Post.findAll();
        return res.render('post/index', {
            PermissionStatus
        });
    },
    create: async (req, res) => {
        return res.render('post/create');
    },

    store: async (req, res) => {
        await Post.create({
            title: req.body.title,
            content: req.body.content,
        });

        return res.redirect('/posts');
    }
};