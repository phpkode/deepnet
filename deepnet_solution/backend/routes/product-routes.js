const express = require('express');
const { check } = require('express-validator');

const productController = require('../controllers/product-controllers');

const router = express.Router();

router.post(
  '/',
  [
    check('category')
      .not()
      .isEmpty(),
  ],
  productController.getProducts
);

module.exports = router;
