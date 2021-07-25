const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: { type: String, required: true, unique: true },
    cost: { type: Number, required: true },
    categories: { type: String, required: true },
	cid: { type: Schema.Types.ObjectId, required: true, ref: 'categories' }
});

productSchema.plugin(uniqueValidator);

module.exports = mongoose.model('product', productSchema);
