const Post = require('../models/Post.js')
module.exports = {
    index: async (req, res) => {
        const posts = await Post.findAll();
        return res.render('post/index', {
            posts
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
    },

    edit : async (req, res)=>{
        const {id} = req.params;
        const posts = await Post.findByPk(id);
        return res.render('post/update',{
            posts
        })

    },
    update : async(req, res) => {
        const {id} = req.params;
        const {title, content} = req.body;
        await Post.update({
            title,
            content
        },{
            where : {id}
        })
        return res.redirect('/posts')
    },
    delete : async(req,res)=>{
        const {id} = req.params;
        await Post.destroy({
            where : {id}
        })
        return res.redirect('/posts')
    }
};