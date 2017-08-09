const express = require('express');
const bp = require('body-parser');
const path = require('path');

const app = express();
const PORT = 8000;

app.use(express.static(path.join(__dirname, './client/static')));
app.use(bp.urlencoded({extended: true}));

app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');

require('./server/config/mongoose')

const routes = require('./server/config/routes');
routes(app);


app.listen(PORT, function() {
    console.log(`Listening on port ${PORT}`);
});