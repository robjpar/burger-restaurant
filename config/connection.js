require('dotenv').config();
const mysql = require('mysql');

const connectionConfig = {
  host: process.env.HOST,
  port: process.env.PORT,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: 'burger_db'
};

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection(connectionConfig);
}

connection.connect((err) => {
  if (err) return console.log(`!!! Could not connect: ${err}`);
  console.log(`>>> Connected to ${connection.config.database}`);
});

module.exports = connection;
