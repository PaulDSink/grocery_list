const express = require('express');
const app = express();

const grocery_items = require('./models/grocery_items');
const sections = require('./models/store_sections');

app.get('/', (req, res) => {
    res.render('show.ejs');
});

app.get('/signup', (req, res) => {
    res.render('signup.ejs');
});

app.get('/login', (req, res) => {
    res.render('login.ejs');
});


app.listen(3000, () => {
    console.log('get after it');
});