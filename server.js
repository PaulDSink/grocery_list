const express = require('express');
const app = express();
const methodOverride = require('method-override');

app.use(methodOverride('_method'));
app.use(express.static('public'));

app.use(express.urlencoded({extended: true}));

const groceryItems = require('./models/grocery_items');
const storeSections = require('./models/store_sections');
const users = require('./models/users');


app.get('/', (req, res) => {
    res.render('show.ejs');
});

app.get('/signup', (req, res) => {
    res.render('signup.ejs');
});

app.get('/login', (req, res) => {
    res.render('login.ejs', {
        addAttempt: false,
    });
});

app.get('/login/addAttempt', (req, res) => {
    res.render('login.ejs', {
        addAttempt: true,
    });
});


app.post('/signup', (req, res) => {
    users.push(req.body);
    console.log(users);
    res.redirect('/')
});

app.post('/login', (req, res) => {
    users.forEach((user, index) => {
        if(req.body.username == user.username && req.body.password == user.password) {
            res.redirect(`/profile/${index}`);
        } else if (index >= users.length) {
            res.redirect('/login/addAttempt');
        }
    });
});

app.get('/profile/:index', (req, res) => {
    res.render('profile.ejs', {
        user: users[req.params.index],
        index: req.params.index,
        groceryItems: groceryItems,
    });
});

app.get('/profile/:index/edit', (req, res) => {
    res.render('edit.ejs', {
        user: users[req.params.index],
        index: req.params.index,
    });
});

app.delete('/items/:index/:itemId', (req, res) => {
    groceryItems.splice(req.params.itemId, 1);
    res.redirect(`/profile/${req.params.index}`)
});

app.listen(3000, () => {
    console.log('get after it');
});