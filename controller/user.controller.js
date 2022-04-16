const db = require('../db');

class UserController {
    async createUser(req, res) {
        const { username } = req.body;
        const newPerson = await db.query('INSERT INTO users (username, hash, email) values ($1, $2, $3) RETURNING *', [username, "111", "test@test.ru"])
        console.log(username);
        res.json(newPerson.rows);
    }

    async getUsers(req, res) {
        const users = await db.query('SELECT * FROM users');
        res.json(users.rows)
    }

    async getOneUser(req, res) {
        const id = req.params.id
        const users = await db.query('SELECT * FROM users WHERE id = $1', [id]);
        res.json(user.rows[0])//чтобы точно получить только 1 строку
    }

    async updateUser(req, res) {
        const { id, username, hash, email } = req.body;
        const user = await db.query('UPDATE users SET username = $2, hash = $3, email=$4 WHERE id = $1 RETURNING *', [id, username, hash, email]);
        res.json(user.rows);
    }

    async deleteUser(req, res) {
        const id = req.params.id
        const users = await db.query('DELETE  FROM users WHERE id = $1', [id]);
        res.json(user.rows[0])
    }

}


module.exports = new UserController();