/*
* @Author: Ryan Choi
* @Date:   2018-08-23 22:20:10
* @Last Modified by:   Ryan Choi
* @Last Modified time: 2018-08-25 05:48:41
*/

// @route   GET api/users/test
// @desc    Tests users route
// @access  Public
const express = require('express');
const router = express.Router();

// Load User model
const User = require('../../models/User');

router.get('/test', (req, res) => res.json({msg: "Users Works"}));

// @route   GET api/users/register
// @desc    Register user
// @access  Public
router.post('/register', (req, res) => {
    User.findOne({ email: req.body.email })
        .then(user => {
            if(user) {
                return res.status(400).json({email: 'Email already exists'});
            } else {
                const newUser = new User({
                    name: req.body.name,
                    email: req.body.email,
                    avatar: avatar,
                    password: req.body.password
                });
            }
        })
});

module.exports = router;