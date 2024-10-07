const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'mydb',
    port: 3306,
    password: '123456',
    connectTimeout: 30000,
    
});

module.exports = connection;