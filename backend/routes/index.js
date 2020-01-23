const express = require('express');
const router = express.Router();
const {Field} = require('../models/field');

/* GET home page. */
router.get('/getField', async (req, res, next) => {
  const field = await Field.find({},{'__v': 0});
  res.json(field)
});

module.exports = router;
