var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');

var User = require('../src/models/user');

/* Create new user - SignUp url /users/signup */
router.post('/signup', function(req, res, next) {
	var user = new User({
		fullname: req.body.fullname,
		email: req.body.email,
		password: bcrypt.hashSync(req.body.password, 12)
	});
	user.save(function(err, result) {
		if(err) {
			return res.status(500).json({
				err: err,
				title: "Error creating User"
			});
		}
		res.status(200).json({
			obj: result,
			message: 'User Created'
		});
	});
});

module.exports = router;
