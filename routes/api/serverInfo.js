const express = require('express');
const router = express.Router();

// Server Info Model
const MelioraServerInfo = require('../../models/ServerInfo');

// @route GET api/serverInfo
// @desc Get Meliora server's name and location defined by the user in the web app. 
// @access Public
router.get('/', (req, res) => {
    //Model
    MelioraServerInfo.find()
        .then(serverInfo => res.json(serverInfo));
});

// @route PUT api/serverInfo
// @desc Update Server Information given by the user.  
// @access Public
router.put('/', (req, res) => {
    const updatedServerInfo = new MelioraServerInfo({
        serverName: req.body.serverName,
        serverLocation: req.body.serverLocation
    });

    updatedServerInfo.save().then(serverInfo => res.json(serverInfo));
});

module.exports = router;