/*
* @Author: Ryan Choi
* @Date:   2018-08-23 22:20:10
* @Last Modified by:   Ryan Choi
* @Last Modified time: 2018-08-23 22:39:57
*/

// @route   GET api/users/test
// @desc    Tests users route
// @access  Public
const express = require('express');
const router = express.Router();

router.get('/test', (req, res) => res.json({msg: "Users Works"}));

module.exports = router;