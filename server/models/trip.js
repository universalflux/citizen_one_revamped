var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var TripSchema = new Schema({
	planet: String,
	description: String,
	departing: Date,
	arriving: Date,
	creator: {type: Schema.ObjectId, ref:'User'},
	users: [{type: Schema.ObjectId, ref:'User'}],
	comments: [{type: Schema.ObjectId, ref: 'Comment'}]
	
},
{
	timestamps: true
});

mongoose.model('Trip', TripSchema);