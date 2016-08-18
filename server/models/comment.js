var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var CommentSchema = new Schema ({
	subject: String,
	content: String,
	likes: Number,
	_user: {type: Schema.ObjectId, ref: 'User'}
},
{
	timestamps: true
});

mongoose.model('Comment', CommentSchema);