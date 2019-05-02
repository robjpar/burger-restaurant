const express = require('express');
const router = express.Router();
const burger = require('../models/burger.js');

// Definition of the Controller (Routes)
router.get('/', (req, res) => {
  burger.selectAll(results => res.render('index', {
    allBurgers: results
  }));
});
router.get('/api/burgers', (req, res) => {
  burger.selectAll(results => res.json({
    allBurgers: results
  }));
});
router.post('/api/burgers', (req, res) => {
  burger.insertOne(req.body.burgerName, results => res.json({
    burger_id: results.insertId
  }));
});
router.put('/api/burgers/:id', (req, res) => {
  burger.updateOne(true, req.params.id, results => {
    if (results.affectedRows === 0) return res.status(404).end();
    return res.status(200).end();
  });
});
router.delete('/api/burgers/:id', (req, res) => {
  burger.deleteOne(req.params.id, results => {
    if (results.affectedRows === 0) return res.status(404).end();
    return res.status(200).end();
  });
});

module.exports = router;
