const pgp = require('pg-promise')()

const connectionString =
  'postgres://exwjkqmc:MdhpPT0_ryj_mXCGh8Ejd23a72DIpg4W@hattie.db.elephantsql.com/exwjkqmc'

const db = pgp(connectionString)

module.exports = db
