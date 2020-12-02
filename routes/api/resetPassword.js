const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');
const auth = require('../../middleware/auth')


// User  Model
const User = require('../../models/Users');

// @route   PUT api/resetPassword
// @desc    Reset password for user
// @access  Private
// $2a$10$YBMfxblZftx3bmq4kb/Tsel/mQu8e/hDTj/53gFTE8U2X4zRbejdW
router.put('/:_id', (req, res) => {
    var password = req.body.password;

    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, (err, hash) => {
            if (err) throw err;
            password = hash;
            User.findByIdAndUpdate(req.params._id, { password: password })
                .then(user => {
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
                                }
                            });
                        }
                    )
                })
                .catch(err => res.status(404).json('User not found.'));
        })
    })




});


module.exports = router;