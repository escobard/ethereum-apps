const mongoose = require('mongoose'),
Schema = mongoose.Schema,
bcrypt = require('bcrypt-nodejs'),
errorHandler = require('../utils/utils'),

userSchema = new Schema({
	email: { type: String, unique: true, lowercase: true},
	password: String
});

userSchema.pre('save', function(next){
	const user = this;

	bcrypt.genSalt(10, function(err, salt){
		errorHandler(err);

		bcrypt.hash(user.password, salt, null, function(err, hash){
			errorHandler(err);
			user.password = hash;
			next();
		});
	})
});

userSchema.methods.comparePassword = function(candidatePassword, callback){
	bcrypt.compare(candidatePassword, this.password, function(err, isMatch){
		if (err) {return callback(err);}
		callback(null, isMatch);
	});
}

const ModelClass = mongoose.model('user', userSchema);

module.exports = ModelClass;