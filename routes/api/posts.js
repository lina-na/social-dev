const express = require('express');

const router = express.Router();

//@route GET /api/posts/test
//@desc Test Post Route
//@access Public
router.get('/test',(req,res) => res.json({msg:'Router Works'}));

module.exports = router;