import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://Ale:Todoslosfuegoselfuego@mongodatabase.3uheaaw.mongodb.net/', {
}).then(() => console.log('Conexión exitosa a MongoDB'))
  .catch(err => console.error('Error al conectar a MongoDB', err));