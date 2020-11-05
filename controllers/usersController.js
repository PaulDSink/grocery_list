const express = require('express');
const router = express.Router();

const User = require('../models').User;
const Grocery_Item = require('../models').Grocery_Item;
const Store_Section = require('../models').Store_Section;

// router.get('/signup', (req, res) => {
//     res.render('users/signup.ejs');
// });

// router.get('/login', (req, res) => {
//     res.render('users/login.ejs', {
//         addAttempt: false,
//     });
// });

// router.get('/login/addAttempt', (req, res) => {
//     res.render('users/login.ejs', {
//         addAttempt: true,
//     });
// });

// router.post('/signup', (req, res) => {
//     User.create(req.body).then((newUser) => {
//         res.redirect(`/users/profile/${newUser.id}`);
//     });
// });

// router.post('/login', (req, res) => {
//     User.findOne({
//         where: {
//             username: req.body.username,
//             password: req.body.password
//         },
//     }).then((user) => {
//         if(user == null) {
//             res.redirect('/users/login/addAttempt');
//         } else {
//             res.redirect(`/users/profile/${user.id}`);
//         }
//     });
// });

router.get('/profile/:id', (req, res) => {
    if(req.user.id == req.params.id) {
    User.findByPk(req.params.id, {
        include: [
            {
                model: Grocery_Item,
                attributes: ['id', 'name'],
                include: [
                    {
                        model: Store_Section,
                        attributes: ['id', 'name'],
                    }
                ]
            }
        ]
    }).then((userProfile) => {
        Store_Section.findAll().then((Store_Section) => {
            res.render('users/profile.ejs', {
                user: userProfile,
                Store_Section: Store_Section,
            });
        });
    });
    } else {
        res.redirect('/');
    }
});


router.post('/items/:id', (req, res) => {
    req.body.checked = false;
    req.body.userId = req.params.id;
    Grocery_Item.create(req.body).then((newItem) => {
        res.redirect(`/users/profile/${req.params.id}`);
    });
});


router.get('/profile/:id/edit', (req, res) => {
    User.findByPk(req.params.id).then((user) => {
        res.render('users/edit.ejs', {
            user: user,
        });
    });
});


router.put('/profile/:id/edit', (req, res) => {
    User.update(req.body, {
        where: {
            id: req.params.id,
        },
        returning: true
    }).then((user) => {
        res.redirect(`/users/profile/${req.params.id}/edit`);
    });
});

router.delete('/profile/:id/edit', (req, res) => {
    User.destroy({
        where: {
            id: req.params.id,
        }
    }).then(() => {
        res.redirect('/');
    });
});


router.delete('/items/:id/:itemId', (req, res) => {
    Grocery_Item.destroy({
        where: {
            id: req.params.itemId,
        }
    }).then(() => {
        res.redirect(`/users/profile/${req.params.id}`);
    });
});

module.exports = router;