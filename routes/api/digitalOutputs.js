const express = require('express');
const router = express.Router();


// Server Info Model
const DOChannels = require('../../models/DOChannels');

// @route  GET api/digitalOuputs
// @desc   Get Digital Output channels 
// @access Public
router.get('/', (req, res) => {
    //Model
    DOChannels.find()
        .then(doChannel => res.json(doChannel));
});

// @route PUT api/digitalOutput/:id
// @desc Update Server Information given by the user.  
// @access Public
router.put('/:_id', (req, res) => {
    console.log("req: " + req);
    const updatedDOChannel = new DOChannels({
        name: req.body.name,
        status: req.body.status,
        aliasOFF: req.body.aliasOFF,
        aliasON: req.body.aliasON
    });

    DOChannels.findByIdAndUpdate(req.params._id, {
        name: updatedDOChannel.name,
        status: updatedDOChannel.status,
        aliasOFF: updatedDOChannel.aliasOFF,
        aliasON: updatedDOChannel.aliasON

    })
        .then(doChannel => res.json(doChannel))
        .catch(err => res.status(404).json('Server info not found.'));
});


module.exports = router;