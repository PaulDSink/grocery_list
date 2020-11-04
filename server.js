const express = require('express');
const app = express();
const methodOverride = require('method-override');

app.use(methodOverride('_method'));
app.use(express.static('public'));

app.use(express.urlencoded({extended: true}));

app.use("/users", require('./controllers/usersController.js'));

app.get('/', (req, res) => {
    res.render('show.ejs');
});

app.listen(3000, () => {
    console.log('get after it');
});