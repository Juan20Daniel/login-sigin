const mysql = require('mysql');

const myConnection = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'',
    database: 'login'
});
myConnection.connect(function(err) {
    if(err) {
        console.log(err);
    } else {
        console.log("DATABASE CONNECTED");
    }
})

module.exports = myConnection;