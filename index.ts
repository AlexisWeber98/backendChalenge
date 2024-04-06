import app from "./app";
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config()
const  database = process.env.MONGO_URI || '' ;

mongoose.connect(database, {
}).then(() => console.log('Conexión exitosa a MongoDB'))
  .catch(err => console.error('Error al conectar a MongoDB', err));

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error de conexión:'));
db.once('open', () => {
  console.log('Conexión exitosa a la base de datos');
});


app.listen(3001, () => {

console.log("Serven listen on port 3001");

})