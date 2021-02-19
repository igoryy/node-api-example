const express = require('express');
const router = express.Router();
const moongose = require('mongoose')
const bodyParser = require('body-parser')


const url = 'mongodb+srv://user-igor:<>@clustertest.ga0jq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const options = { reconnectTries: Number.MAX_VALUE, reconnectInterval: 500, poolSize: 5, useNewUrlParser: true };

//

router.get('/', (req,resp)=>{
    return resp.send({nome: 'Bem vindo'})
})

module.exports = router;