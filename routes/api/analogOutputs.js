const express = require('express');
const router = express.Router();


// Server Info Model
const AOChannels = require('../../models/AOChannels');

// @route  GET api/analogOutputs
// @desc   Get Meliora server's analog outputs' information.
// @access Public
router.get('/', (req, res) => {
    //Model
    AOChannels.find()
        .then(ao => res.json(ao));
});

// @route PUT api/analogOutputs/:id
// @desc Update Analog Output channel.  
// @access Public
router.put('/:_id', (req, res) => {
    const updatedAOChannel = new AOChannels({
        name: req.body.name,
        status: req.body.status
    });

    DIChannels.findByIdAndUpdate(req.params._id, {
        name: updatedAOChannel.name,
        status: updatedAOChannel.status
    })
        .then(aiChannel => res.json(aiChannel))
        .catch(err => res.status(404).json('Analog Inputs not found.'));
});


module.exports = router;