const serverless = require("serverless-http");
const express = require("express");
const mysql = require("mysql2/promise");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());

app.get("/", (req, res, next) => {
  return res.status(200).json({
    message: "Hello from root!",
  });
});

app.get("/hello", (req, res, next) => {
  return res.status(200).json({
    message: "Hello from path!",
  });
});

//Listagem de produtos
app.get('/listar-produtos', async (req, res, next) => {
  const connection = await mysql.createConnection({host:"s4p3z6cfce.execute-api.us-east-1.amazonaws.com", user: "admin", password:"#eco2024tec#bd", database:"productsdb"})
  const [rows, fields] = await connection.execute("select * from products");
  res.status(200).json({
    response: rows
  })
})
//Listagem de categoria

//Cadastro de  produtos

//Cadastro de categorias

app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

exports.handler = serverless(app);
