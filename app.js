const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const router = require('./routes/router');
const errorRouter = require('./routes/error');

app.set('view engine', 'pug');
app.set('views', 'views');
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(router);

app.use(errorRouter);

app.listen(3000, console.log('Server running on port 3000'));