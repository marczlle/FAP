const express = require('express')
const router = express.Router();
const productRoutes = require('./routes/productRoutes')
const sequelize = require('./config/database');
const exp = require('constants');

const app = express()
app.use(bodyParser.json())
app.use('/api', productRoutes)

const startServer = async() => {
    try {
        await sequelize.sync()
        console.log('Banco de dados conectado. ')
        app.listen(3000, () =>{
            console.log('Servidor rodando na porta 3000')
        })
    } catch (error){
        console.log('Erro ao conectar ao banco de dados', error)
    }
}

startServer()