const express = require('express');
const router = express.Router();

const User = require('../models').User;
const Grocery_Item = require('../models').Grocery_Item;
const Store_Section = require('../models').Store_Section;

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