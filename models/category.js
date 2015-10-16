var mongoose = require('mongoose');

//category schema
var categorySchema = mongoose.schema({
	title: {
		type: String
	},
	description: {
		type: String
	},
	created_at: {
		type: Date,
		default: Date.now
	}
});

var Category = module.exports = mongoose.model('Category', categorySchema);

// get categories

// get single category
