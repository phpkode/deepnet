const { validationResult } = require('express-validator');

const HttpError = require('../models/http-error');
const Category = require('../models/category');

const getCategory = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError('Invalid inputs passed, please check your data.', 422)
    );
  }
  let { head } = req.body;
  
  if(!head) head = 'root';
  
  let category;
  try {
    category = await Category.find({'parent': head});
  } catch (err) {
	  console.log(err);
    const error = new HttpError(
      'Fetching categories failed, please try again later.',
      500
    );
    return next(error);
  }
  res.json({categories: category.map(category => category.toObject({ getters: true }))});
};

exports.getCategory = getCategory;
