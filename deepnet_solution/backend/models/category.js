const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const categorySchema = new Schema({
    c_id: { type: String, required: true, unique: true },
    tree: [ { type: String, required: true } ],
	parent: { type: String, required: true },
	products: [{ type: Schema.Types.ObjectId, ref: 'products' }]
});

categorySchema.plugin(uniqueValidator);

module.exports = mongoose.model('category', categorySchema);