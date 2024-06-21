const express = require("express");
const app = express();
const postgress = require("postgres");

const db = postgress.createPool({
    host: "localhost",
    user: "root",
    password: "password",
    database: "esconotec",
})

app.get('/',( req, res) => {
    db.query(
        "INSERT INTO usuarios (email, password) VALUES ('hiagofilippe@gmail.com', '12345678')")
}) 


app.listen(3001, () => {
    console.log("rodando na porta 3001");
})