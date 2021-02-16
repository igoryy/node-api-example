const express = require('express');
const app = express();

const indexRoute = require('./routes/index.js')
const usersRoute = require('./routes/users.js')

app.use('/', indexRoute);

app.use('/users', usersRoute);



app.listen(3000);

module.exports = app;