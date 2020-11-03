const express = require("express");
const router = express.Router();

const users = require("../models/users");
const groceryItems = require('../models/grocery_items');
const storeSections = require('../models/store_sections');

router.get('/profile/:index', (req, res) => {
    res.render('users/profile.ejs', {
        user: users[req.params.index],
        index: req.params.index,
        groceryItems: groceryItems,
        storeSections: storeSections,
    });
});

router.post('/profile/:index', (req, res) => {
    req.body.checked = false;
    groceryItems.push(req.body);
    console.log(groceryItems);
    res.redirect(`/users/profile/${req.params.index}`);
});

router.get('/profile/:index/edit', (req, res) => {
    res.render('users/edit.ejs', {
        user: users[req.params.index],
        index: req.params.index,
    });
});

router.put('/profile/:index/edit', (req, res) => {
    users[req.params.index] = req.body;
    res.redirect(`/users/profile/${req.params.index}/edit`);
});

router.delete('/items/:index/:itemId', (req, res) => {
    groceryItems.splice(req.params.itemId, 1);
    res.redirect(`/users/profile/${req.params.index}`)
});

module.exports = router;