const { DataTypes } = require('sequelize')
const sequelize = require('../config/database')

const Produto = sequelize.define('Produto', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = Produto