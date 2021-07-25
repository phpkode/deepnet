const express = require('express');
const { check } = require('express-validator');

const categoryControllers = require('../controllers/category-controllers');

const router = express.Router();

router.post('/', categoryControllers.getCategory);

module.exports = router;
