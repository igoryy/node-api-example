const express = require('express');
const app = express();

const moongose = require('mongoose')
const bodyParser = require('body-parser')


const url = 'mongodb+srv://user-igor:icaro100@clustertest.ga0jq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const options = { reconnectTries: Number.MAX_VALUE, reconnectInterval: 500, poolSize: 5, useNewUrlParser: true };

moongose.connect(url, options);
moongose.set('useCreateIndex', true);

moongose.connection.on('connected', ()=>{
    console.log('Aplicacao conectada');
});

moongose.connection.on('error', (e)=>{
    console.log('Erro ao conectar no banco de dados' + e);
});

moongose.connection.on('disconnected', ()=>{
    console.log('Aplicação descontectada com o banco de dados ' );
});


//Body parser

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());


const indexRoute = require('./routes/index.js')
const usersRoute = require('./routes/users.js')

app.use('/', indexRoute);

app.use('/users', usersRoute);



app.listen(3000);

module.exports = app;