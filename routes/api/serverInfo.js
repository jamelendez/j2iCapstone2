const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

// Server Info Model
const MelioraServerInfo = require('../../models/ServerInfo');

// @route  GET api/serverInfo
// @desc   Get Meliora server's name and location defined by the user in the web app. 
// @access Public
router.get('/', auth, (req, res) => {
    //Model
    MelioraServerInfo.find()
        .then(serverInfo => res.json(serverInfo));
});

// @route PUT api/serverInfo/:id
// @desc Update Server Information given by the user.  
// @access Private
router.put('/:_id', auth, (req, res) => {
    console.log("req: " + req);
    const updatedServerInfo = new MelioraServerInfo({
        serverName: req.body.serverName,
        serverLocation: req.body.serverLocation
    });

    MelioraServerInfo.findByIdAndUpdate(req.params._id, {
        serverName: updatedServerInfo.serverName,
        serverLocation: updatedServerInfo.serverLocation
    })
        .then(serverInfo => res.json(serverInfo))
        .catch(err => res.status(404).json('Server info not found.'));
});


module.exports = router;