var express = require("express");
var router = express.Router();
var user = require('../model/userSchema');

router.post("/userget", async (req, res) => {
    try {
        data = await user.create(req.body);
        // console.log(data);
        
        res.status(201).json({
            status: 'success',
            data
        });
    }
    catch {
        console.log('error');
    }

})

module.exports = router;