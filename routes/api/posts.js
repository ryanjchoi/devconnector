/*
* @Author: Ryan Choi
* @Date:   2018-08-23 22:21:18
* @Last Modified by:   Ryan Choi
* @Last Modified time: 2018-08-23 22:39:26
*/

// @route   GET api/posts/test
// @desc    Tests post route
// @access  Public
const express = require('express');
const router = express.Router();

router.get('/test', (req, res) => res.json({msg: "Posts Works"}));

module.exports = router;