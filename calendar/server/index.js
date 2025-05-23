// npm i express body-parser mysql2 ejs dotenv slashes@2.0.0
const port = 7777;
const dotenv = require('dotenv');
const express = require('express');
var cookieParser = require('cookie-parser');


const app = express();
app.use(express.json());

app.use(cookieParser());
dotenv.config();
const bodyParser = require('body-parser');
const path = require('path');
app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

const coursesRouts = require('./routs/courses.rout');
app.use('/courses', coursesRouts);
const usersRouts = require('./routs/users.rout');
app.use('/users', usersRouts);
const loginRouts = require('./routs/login.rout');
app.use('/login', loginRouts);

app.get('/', (req, res) => {
  res.render('index', {});
});

app.listen(port, () => {
  console.log(`Now listening on http://localhost:${port}`);
});
