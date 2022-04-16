const db = require('../db');

class PostController {

    async createPost(req, res) {
        const { message, userId } = req.body;
        const newPost = await db.query('INSERT INTO posts (message, user_id) VALUES ($1, $2) RETURNING *', [message, userId]);
        res.json(newPost.rows);
    }

    async getPostsByUser(req, res) {
        const id = req.query.id
        const posts = await db.query('SELECT * FROM posts WHERE user_id = $1', [id]);
        res.json(posts.rows);
    }
}

module.exports = new PostController();