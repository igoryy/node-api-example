const express = require('express');
const router = express.Router();
const Users = require('../model/mode');

//

router.get('/', (req,resp)=>{
    Users.find({}, (err,data) =>{
        if(err) return resp.send({error : 'Erro na consulta'})
        return resp.send(data);
    });
})


router.post('/create', (req,resp)=>{
   const body = {email, password} = req.body;
   
   if(!email || !password) return resp.send({error: 'Dados insuficientes '});

   Users.findOne({email}, (err,data) =>{
       if(err) return resp.send({error: 'Erro ao criar usuario'});
       if(data) return resp.send({error: 'Usuario ja existente'})
   
   
        Users.create(req.body, (err,data) =>{
            if(err) return resp.send({error: 'Erro ao criar usuario'});
            
            return resp.send(data);
        });
    });

});

module.exports = router;