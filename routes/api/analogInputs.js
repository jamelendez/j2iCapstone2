const express = require('express');
const router = express.Router();


// Server Info Model
const AIChannels = require('../../models/AIChannels');

// @route  GET api/analogInputs
// @desc   Get Meliora server's analog inputs' information.
// @access Public
router.get('/', (req, res) => {
    //Model
    AIChannels.find()
        .then(ai => res.json(ai));
});

// @route PUT api/analogInputs/:id
// @desc Update analog input channel.   
// @access Public
router.put('/:_id', (req, res) => {
    const updatedAIChannel = new AIChannels({
        name: req.body.name,
        status: req.body.status
    });

    DIChannels.findByIdAndUpdate(req.params._id, {
        name: updatedAIChannel.name,
        status: updatedAIChannel.status
    })
        .then(aiChannel => res.json(aiChannel))
        .catch(err => res.status(404).json('Analog Inputs not found.'));
});


module.exports = router;