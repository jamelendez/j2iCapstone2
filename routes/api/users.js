const express = require('express');
const router = express.Router();

// Item Model
const User = require('../../models/Users');

// @route   GET api/users
// @desc    Get All Users
// @access  Public
router.get('/', (req, res) => {
    User.find()
    .sort({ username: 1 })
    .then(users => res.json(users))
}); 

// @route   POST api/users
// @desc    Create a user
// @access  Public
router.post('/', (req, res) => {
    const newUser = new User({
        username: req.body.username,
        password: req.body.password
    });
    newUser.save().then(user => res.json(user)) //save to database
    
});

// @route   DELETE api/users/:id
// @desc    Delete a user
// @access  Public
router.delete('/:id', (req, res) => {
    User.findById(req.params.id)
        .then(user => user.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;