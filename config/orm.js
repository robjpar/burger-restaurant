const connection = require('./connection.js');

const orm = {
  selectAll: (table, columnFirst, columnSecond, cb) => {
    connection.query(
      // Sorting by `columnFirst` if not null, otherwise by 
      // `columnSecond`
      'SELECT * FROM ?? ORDER BY COALESCE(??, ??) DESC',
      [table, columnFirst, columnSecond],
      (err, results) => {
        if (err) return console.log(`!!! Could not query: ${err}`);
        cb(results);
      }
    );
  },
  insertOne: (table, column, name, cb) => {
    connection.query(
      'INSERT INTO ?? (??) VALUES (?)',
      [table, column, name],
      (err, results) => {
        if (err) return console.log(`!!! Could not query: ${err}`);
        cb(results);
      }
    );
  },
  updateOne: (table, setColumn, setValue, whereColumn, whereValue, cb) => {
    connection.query(
      'UPDATE ?? SET ?? = ? WHERE ?? = ?',
      [table, setColumn, setValue, whereColumn, whereValue],
      (err, results) => {
        if (err) return console.log(`!!! Could not query: ${err}`);
        cb(results);
      }
    );
  },
  deleteOne: (table, whereColumn, whereValue, cb) => {
    connection.query(
      'DELETE FROM ?? WHERE ?? = ?',
      [table, whereColumn, whereValue],
      (err, results) => {
        if (err) return console.log(`!!! Could not query: ${err}`);
        cb(results);
      }
    );
  }
};

module.exports = orm;

// Testing...
if (require.main === module) {
  const printCb = (results) => {
    console.log(results);
  };

  orm.selectAll('table_not_exist', printCb);

  orm.selectAll('burgers', printCb);

  orm.insertOne('burgers', 'burger_name', 'Double Cheeseburger', printCb);

  const bool = {
    TRUE: 1,
    FALSE: 0
  };
  orm.updateOne('burgers', 'delivered', bool.TRUE, 'burger_id', 8, printCb);

  orm.deleteOne('burgers', 'burger_id', 10, printCb);

  orm.selectAll('burgers', printCb);

  connection.end();
}
