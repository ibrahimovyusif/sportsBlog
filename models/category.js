var mongoose = require('mongoose');

//category schema
var categorySchema = mongoose.Schema({
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
module.exports.getCategories = function(callback, limit){
	Category.find(callback).limit(limit).sort([['title', 'ascending']]);
}

// get single category
module.exports.addCategory = function(category, callback){
	Category.create(category, callback);
}

module.exports.getCategoryById = function(id, callback){
	Category.findById(id, callback);
}

// updatecategory
module.exports.updateCategory = function(query, update, options, callback){
	Category.findOneAndUpdate(query, update, options, callback);
}