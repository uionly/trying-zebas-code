
const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
    require: true,
	img:
	{
		data: Buffer,
		contentType: String
	},
    timestamps: true
});

//Image is a model which has a schema imageSchema

module.exports = new mongoose.model('Image', imageSchema);
