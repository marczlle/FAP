import express from 'express';
import { usuario } from './entities/usuario'
import { AppDataSource } from './database/data-source';

const app = express()

AppDataSource.initialize().then(async () => {
    console.log("Banco de dados conectado")
})
app.listen(3333, () => {
    console.log('Servidor rodando.')
})

app.get('/', async (req, res) => {
    const sql = 'SELECT * FROM usuarios';

    try {
        const result = await AppDataSource.query(sql); 
        res.send(result);
    } catch (err) {
        console.error("Erro ao realizar a consulta:", err);
        res.status(500).send("Erro interno do servidor");
    }
});

