const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');
const auth = require('../../middleware/auth')


// User  Model
const User = require('../../models/Users');

// @route   POST api/auth/validate
// @desc    Validate user password
// @access  Private
router.post('/:_id', (req, res) => {
    const { password } = req.body;
    console.log(password)
    User.findById(req.params._id)
        .then(user => {

            //Validate Password
            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if (!isMatch) return res.status(400).json({ msg: 'Invalid old password' })
                    else {
                        jwt.sign(
                            { id: user.id },
                            config.get('jwtSecret'),
                            { expiresIn: 3600 },
                            (err, token) => {
                                if (err) throw err;
                                res.json({
                                    token: token,
                                    user: {
                                        id: user.id,
                                        username: user.username,
                                        firstPwChange: user.firstPwChange,
                                        valid: true
                                    }
                                });
                            }
                        )
                    }

                })
        })
})

module.exports = router;