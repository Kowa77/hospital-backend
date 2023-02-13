const mongoose = require('mongoose');
require('dotenv').config();

const dbConnection = async()=>{
    
    try{
        mongoose.set('strictQuery',false);
        await mongoose.connect(process.env.DB_CNN , {
            //userNewUrlParser: true, 
            //useCreateIndex: true,   
            useUnifiedTopology: true
        });

        console.log('Base de Datos Online');

    }catch(error){
        console.log(error);
        throw new error('Error a la hora de iniciar la BD, ver logs');
    
    }



}

module.exports = {
    dbConnection
}