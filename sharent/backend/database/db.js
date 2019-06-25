const Sequelize = require('sequelize')
const db = {}
const sequelize = new Sequelize('dbsharent', 'root', 'root', {
  host: '127.0.0.1',
  dialect: 'mysql',
  port: 8889,
  // port : 8889,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
