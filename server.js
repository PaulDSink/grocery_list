require('dotenv').config();
const express = require('express');
const app = express();
const methodOverride = require('method-override');

app.use(methodOverride('_method'));
app.use(express.static('public'));

app.use(express.urlencoded({extended: true}));

app.use("/users", require('./controllers/usersController.js'));
app.use("/auth", require('./controllers/authController.js'));

app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.listen(process.env.PORT, () => {
    console.log('get after it');
});