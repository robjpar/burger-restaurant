require('dotenv').config();
const mysql = require('mysql');

// Connection configuration
const connectionConfig = {
  host: process.env.HOST,
  port: process.env.PORT_DB,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: 'burger_db'
};

// Create a connection to JawsDB MySQL (Heroku) or local connection
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

// Testing...
if (require.main === module) {
  connection.end();
}
