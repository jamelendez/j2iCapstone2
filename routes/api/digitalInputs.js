const express = require('express');
const router = express.Router();


// Server Info Model
const DIChannels = require('../../models/DIChannels');

// @route  GET api/serverInfo
// @desc   Get Meliora server's name and location defined by the user in the web app. 
// @access Public
router.get('/', (req, res) => {
    //Model
    DIChannels.find()
        .then(di => res.json(di));
});

// @route PUT api/serverInfo/:id
// @desc Update Server Information given by the user.  
// @access Public
router.put('/:_id', (req, res) => {
    const updatedDIChannel = new DIChannels({
        name: req.body.name,
        status: req.body.status,
        aliasOFF: req.body.aliasOFF,
        aliasON: req.body.aliasON
    });

    DIChannels.findByIdAndUpdate('5fbb1e33e0991cf0e4f1f5c3', {
        name: updatedDIChannel.name,
        status: updatedDIChannel.status,
        aliasOFF: updatedDIChannel.aliasOFF,
        aliasON: updatedDIChannel.aliasON

    })
        .then(diChannel => res.json(diChannel))
        .catch(err => res.status(404).json('Server info not found.'));
});


module.exports = router;