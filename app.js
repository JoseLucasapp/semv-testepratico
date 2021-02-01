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

consign()
    .include('app/controllers')
    .then('app/routes')
    .then('app/models')
    .into(app);

app.listen(PORT);