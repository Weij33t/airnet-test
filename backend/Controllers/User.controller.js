const db = require('../db')

const controller = {
  async auth(req, res) {
    try {
      const { email, password } = req.body
      const candidate = await db.any(
        'SELECT id FROM users WHERE email=$1 AND password=$2',
        [email, password]
      )

      if (!candidate[0]) {
        res.status(404).send('Пользователь не найден')
      }

      res.send(candidate[0])
    } catch (error) {
      console.log(error)
    }
  },
}

module.exports = controller
