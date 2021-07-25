const { validationResult } = require('express-validator');

const HttpError = require('../models/http-error');
const Product = require('../models/product');

const getProducts = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError('Invalid inputs passed, please check your data.', 422)
    );
  }
  const { category } = req.body;
  
  let products;
  try {
    products = await Product.find({'categories': category});
  } catch (err) {
    const error = new HttpError(
      'Fetching products failed, please try again later.',
      500
    );
    return next(error);
  }
  res.json({products: products.map(product => product.toObject({ getters: true }))});
};

exports.getProducts = getProducts;
