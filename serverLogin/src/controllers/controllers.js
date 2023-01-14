const connection = require('../model/model');
const md5 = require('md5');
const controller = {}

controller.createUser = (req, res) => {
    const { name, email, password } = req.body;
    const sql = "INSERT INTO users VALUES(?,?,?,?)";
    connection.query(sql, [null, name, email, md5(password)], (err, rows) => {
        if(err) {
            res.status(500).json({message:err});
        } else {
            res.status(200).json({message:"usuario creado"});
        }
    })
}

controller.login = (req, res) => {
    const { email, password } = req.body;
    const sql = `SELECT email, name FROM users WHERE email='${email}' and password='${md5(password)}'`;
    connection.query(sql, (err, rows) => {
        if(err) {
            res.status(500).json({message:"Error del servidor", err:err});
        } else {
            if(rows.length > 0) {
                res.status(200).json({message: "Bienvenido a la vrg", rows});
            } else {
                res.status(404).json({message:"error"});
            }
        }
    })
}

controller.getUsers = (req, res) => {
    const sql = "SELECT * FROM users";
    connection.query(sql, (err, rows) => {
        if(err) {
            res.status(500).json({message:"Error del servidor", err:err});
        } else {
            res.status(200).json({rows});
        }
    })
}

module.exports = controller;