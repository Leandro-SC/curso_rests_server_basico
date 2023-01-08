const {response} = require('express');


//Función GET
const userGet = (req, res = response) => {
    
    const {q,nombre,apikey} = req.query;

    res.json({
        msg:'get API - Controller',
        q,
        nombre,
        apikey
    });
};

//Función POST
const userPost = (req, res) => {

    const {id,nombre, edad} = req.body;

    res.json({
        msg:'Post API - Controller',
        id,
        nombre,
        edad
    });
}

//Función PUT
const userPut = (req, res) => {
    
    const {id} = req.params.id;

    res.json({
        msg:'Put API - Controller',
        id
    });
};






module.exports = {
    userGet,
    userPut,
    userPost
}




































