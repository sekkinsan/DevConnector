const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');

// load user model
const User = require('../../models/User');

// @route GET api/users/test
// @desc Tests users route
// @access public
router.get('/test', (req, res) => res.json({
  msg: "Users works properly"
}));

// @route GET api/users/register
// @desc register user
// @access public
router.post('/register', (req, res) => {
  User.findOne({ email: req.body.email })
    .then(user => {
      if(user) {
        return res.status(400).json({email: 'Email already exists in system'});
      } else {
        const avatar = gravatar.url(req.body.email, {
          s: '200', // size
          r: 'pg', //rating
          d: 'mm' //default avatar
        });

        const newUser = new User({
          name: req.body.name,
          email: req.body.email,
          avatar,
          password: req.body.password
        });
      }
    })
});

module.exports = router;