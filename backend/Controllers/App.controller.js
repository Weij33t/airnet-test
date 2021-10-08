const db = require('../db')

const insertQueryBuilder = (table, columns, values) => {
  let query = 'INSERT INTO '
  query += table + ' '
  if (columns.length !== values.length) {
    throw new Error('Количество колонок не совпадает с количеством значений')
  }
  const count = (columns.length = values.length)

  query += '('

  for (let i = 0; i < count; i++) {
    query += `${columns[i]}` + (i === columns.length - 1 ? '' : ',')
  }
  query += ')'

  query += '('
  for (let i = 0; i < count; i++) {
    query += `${values[i]}` + (i === values.length - 1 ? '' : ',')
  }
}

const updatQueryBuilder = (table, columns, values, id) => {
  if (columns.length !== values.length)
    throw new Error('Количество колонок не совпадает с количеством значений')
  const pairs = columns.map((column, id) => `${column}='${values[id]}'  `)
  return `UPDATE ${table} SET ${pairs.toString()} WHERE id=${id}`
}

const controller = {
  async getApps(req, res) {
    try {
      const { user_id } = req.query
      const result = await db.any(
        'SELECT * FROM applications WHERE user_id=$1 ORDER BY id',
        [user_id]
      )
      res.send(result)
    } catch (error) {
      console.log(error)
    }
  },
  async create(req, res) {
    try {
      const { created_date, appeal_type, appeal_text, app_status, user_id } =
        req.body

      const result = await db.any(
        'INSERT INTO applications ("created_date", "appeal_type", "appeal_text", "app_status", "user_id") VALUES ($1, $2, $3, $4, $5)',
        [created_date, appeal_type, appeal_text, app_status, user_id]
      )
      res.send(result)
    } catch (error) {
      console.log(error)
    }
  },
  async edit(req, res) {
    try {
      const { fields, values, app_id } = req.body
      const updateString = updatQueryBuilder(
        'applications',
        fields,
        values,
        app_id
      )
      await db.any(updateString, [])
      res.send('ok')
    } catch (error) {
      console.log(error)
    }
  },
}

module.exports = controller
