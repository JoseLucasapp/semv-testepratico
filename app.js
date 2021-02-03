const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const ejs = require('ejs')

const app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('view engine', ejs);
app.use(express.static('./public/'));

require('./app/routes/get')(app)
require('./app/routes/post')(app)

app.listen(PORT);
