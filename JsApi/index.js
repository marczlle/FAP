const express = require('express');
const conection = require('./mydb/conection')
const { personagens } = require('./models/elementos');
const connection = require('./mydb/conection');

const app = express();

app.use(express.json());

//vendo os personagens criados
app.get('/', (req, res) => {
    const sql = 'SELECT * FROM personagens'

    connection.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

//visualizando por id
app.get('/personagem/:id', (req, res) => {
    const { id } = req.params;
    const sql = `SELECT * FORM personagens WHERE id = ${id}`
    connection.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result)
    })
})

//adicionar personagem
app.post('/personagem', (req, res) => {
    const { name } = req.body;
    const sql = `INSERT INTO personagens (name) VALUES ('${name}')`
    connection.query(sql, (err, result) => {
        if (err) throw err;
        res.send('Character added to the database')
    })
})

//atualizando um personagem
app.put('/personagem/:id', (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    const sql = `UPDATE personagens SET name='${name}' WHERE id = ${id}`
});

//deletando um personagem
app.delete('/personagem/:id', (req, res) => {
    const { id } = req.params;
    const sql = `DELETE FROM personagens WHERE id = ${id}`;
    connection.query(sql, (err, result) => {
        if (err) throw err;
        res.send('Character deleted')
    })
})

app.listen(3000, () => {
    conection.connect((err) => {
        if (err) {
            console.error("Erro ao conectar ao banco de dados", err.stack);
            return;
        }
        console.log('Conectado ao banco de dados como ID', conection.threadId)
    });

    console.log("Server is running on 3000 port")
});

