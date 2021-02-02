const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static('./public/'));
app.set('view engine', ejs);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

consign({cwd: process.cwd()+"/app"})
    .include('/controllers')
    .then('/routes')
    .then('/models')
    .into(app);

app.listen(PORT);