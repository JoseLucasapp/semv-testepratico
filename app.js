const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

consign()
    .include('app/controllers')
    .then('app/routes')
    .then('app/models')
    .into(app);

app.listen(PORT);