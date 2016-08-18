var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UserSchema = new Schema ({
	name: String,
	username: String,
	password: String,
	age: Number,
	likes: Number,
	admin: Boolean,
	comments: [{type: Schema.ObjectId, ref: 'Comment'}],
	trips: [{type: Schema.ObjectId, ref: 'Trip'}]
},
{
	timestamps: true
});

mongoose.model('User', UserSchema);