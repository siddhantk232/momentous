const { Schema } = require('mongoose');

const userSchema = Schema(
	{
		name: String,
		email: String,
		userName: String,
		posts: [
			{
				type: Schema.Types.ObjectId,
				ref: 'Post'
			}
		],
		followers: [
			{
				type: Schema.Types.ObjectId,
				ref: 'User'
			}
		],
		followerCount: Number
	},
	{ timestamps: true }
);

module.exports;
