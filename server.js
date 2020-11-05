require('dotenv').config();
const express = require('express');
const app = express();

const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

app.use(cookieParser());

const verifyToken = (req, res, next) => {
    let token = req.cookies.jwt;
  
    console.log("Cookies: ", req.cookies.jwt);
  
    jwt.verify(token, process.env.JWT_SECRET, (err, decodedUser) => {
      if (err || !decodedUser) {
        return res.status(401).json({ error: "Unauthorized Request" });
      }
      req.user = decodedUser;

      console.log(decodedUser);
  
      next();
    });
  };

const methodOverride = require('method-override');

app.use(methodOverride('_method'));
app.use(express.static('public'));

app.use(express.urlencoded({extended: true}));

app.use("/users", verifyToken, require('./controllers/usersController.js'));
app.use("/auth", require('./controllers/authController.js'));

app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.listen(process.env.PORT, () => {
    console.log('get after it');
});