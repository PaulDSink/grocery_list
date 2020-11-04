const express = require('express');
const router = express.Router();

const User = require('../models').User;
const Grocery_Item = require('../models').Grocery_Item;
const Store_Section = require('../models').Store_Section;

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
            res.redirect('/users/login/addAttempt');
        } else {
            res.redirect(`/users/profile/${user.id}`);
        }
    });
});

// router.get('/profile/:id', (req, res) => {
//     res.render('users/profile.ejs', {
//         user: users[req.params.index],
//         index: req.params.index,
//         groceryItems: groceryItems,
//         storeSections: storeSections,
//     });
// });

router.get('/profile/:id', (req, res) => {
    User.findByPk(req.params.id).then((user) => {
        Grocery_Item.findAll().then((grocery_item) => {
            Store_Section.findAll().then((store_section) => {
                res.render('users/profile.ejs', {
                    user: user,
                    grocery_item: grocery_item,
                    store_section: store_section,
                });
            });
        });
    });
});

// router.post('/profile/:id', (req, res) => {
//     req.body.checked = false;
//     groceryItems.push(req.body);
//     console.log(groceryItems);
//     res.redirect(`/users/profile/${req.params.index}`);
// });

router.post('/items/:id', (req, res) => {
    req.body.checked = false;
    Grocery_Item.create(req.body).then((newItem) => {
        res.redirect(`/users/profile/${req.params.id}`);
    });
});

// router.get('/profile/:index/edit', (req, res) => {
//     res.render('users/edit.ejs', {
//         user: users[req.params.index],
//         index: req.params.index,
//     });
// });

router.get('/profile/:id/edit', (req, res) => {
    User.findByPk(req.params.id).then((user) => {
        res.render('users/edit.ejs', {
            user: user,
        });
    });
});

// router.put('/profile/:index/edit', (req, res) => {
//     users[req.params.index] = req.body;
//     res.redirect(`/users/profile/${req.params.index}/edit`);
// });

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

// router.delete('/items/:index/:itemId', (req, res) => {
//     groceryItems.splice(req.params.itemId, 1);
//     res.redirect(`/users/profile/${req.params.index}`)
// });

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