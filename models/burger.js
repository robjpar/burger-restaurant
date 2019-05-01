const orm = require('../config/orm.js');

const burgers = {
  selectAll: (cb) => {
    orm.selectAll('burgers', (results) => cb(results));
  },
  insertOne: (burger_name, cb) => {
    orm.insertOne('burgers', 'burger_name', burger_name, (results) =>
      cb(results));
  },
  updateOne: (deliveredBool, burger_id, cb) => {
    let boolNumber = 0; // false
    if (deliveredBool) boolNumber = 1; // true
    orm.updateOne('burgers', 'delivered', boolNumber, 'burger_id', burger_id,
      (results) => cb(results));
  },
  deleteOne: (burger_id, cb) => {
    orm.deleteOne('burgers', 'burger_id', burger_id, (results) => cb(results));
  }
};

module.exports = burgers;

// Testing...
if (require.main === module) {
  const printCb = (results) => {
    console.log(results);
  };

  burgers.selectAll(printCb);

  burgers.insertOne('Double Cheeseburger', printCb);

  burgers.updateOne(true, 13, printCb);

  burgers.deleteOne(15, printCb);
}
