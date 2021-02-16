const express = require('express');
const router = express.Router();


router.get('/', (req,resp)=>{
    return resp.send({nome: 'Bem vindo'})
})

module.exports = router;