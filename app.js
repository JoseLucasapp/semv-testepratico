const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs')
const mongoose = require('mongoose');
const db = require('./config/db');

const app = express();
const PORT = process.env.PORT || 8080;

mongoose.Promise = global.Promise;
mongoose.connect(db.mongoURI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log('conectado')
}).catch((err)=>{
    console.log(err);
})

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('view engine', ejs);
app.use(express.static('./public/'));

require('./app/routes/get')(app)
require('./app/routes/post')(app)

app.listen(PORT);
