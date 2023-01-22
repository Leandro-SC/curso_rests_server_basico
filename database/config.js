const mongoose = require('mongoose');



const dbConnection = async()=>{

    try {
       await mongoose.connect(process.env.MONGO_DB_ATLAS);

       console.log('Base de datos online')


    } catch (error) {
        console.log(error);
        throw new Error('Error al conectar con DB');
    }


}


module.exports = {
    dbConnection
}












































