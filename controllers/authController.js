const express = require('express');
const router = express.Router();

const User = require('../models').User;

router.get('/signup', (req, res) => {
    res.render('users/signup.ejs');
});

router.get('/login', (req, res) => {
    res.render('users/login.ejs', {
        addAttempt: false,
    });
});

router.get('/login/addAttempt', (req, res) => {
    res.render('users/login.ejs', {
        addAttempt: true,
    });
});

router.post('/signup', (req, res) => {
    User.create(req.body).then((newUser) => {
        res.redirect(`/users/profile/${newUser.id}`);
    });
});

router.post('/login', (req, res) => {
    User.findOne({
        where: {
            username: req.body.username,
            password: req.body.password
        },
    }).then((user) => {
        if(user == null) {
            res.redirect('/auth/login/addAttempt');
        } else {
            res.redirect(`/users/profile/${user.id}`);
        }
    });
});



module.exports = router;