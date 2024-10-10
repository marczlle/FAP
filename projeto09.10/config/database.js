const { Sequelize } = require ('sequelize')

const sequelize = new Sequelize('sge', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
})

module.exports = sequelize
