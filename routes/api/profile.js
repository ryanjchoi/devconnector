/*
* @Author: Ryan Choi
* @Date:   2018-08-23 22:20:26
* @Last Modified by:   Ryan Choi
* @Last Modified time: 2018-08-23 22:39:47
*/

// @route   GET api/profile/test
// @desc    Tests profile route
// @access  Public
const express = require('express');
const router = express.Router();

router.get('/test', (req, res) => res.json({msg: "Profile Works"}));

module.exports = router;