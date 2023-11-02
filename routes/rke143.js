const express = require('express');
const router = express.Router();

const rke143Data = require('../data/nodejs.json');


router.post('/143', (req, res) => {
    if(req.body.name !== 'rke' || req.body.code !== "143") {
        res.status(200).json({nodejsData}); 
    } else {
        res.status(200).json({nodejsData});
    }
});


module.exports = router;