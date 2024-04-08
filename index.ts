import app from "./src/app";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const database =
  process.env.MONGO_URI ||
  "mongodb+srv://Ale:Todoslosfuegoselfuego@mongodatabase.3uheaaw.mongodb.net/";
const port = process.env.PORT || 3000;

mongoose
  .connect(database, {})
  .then(() => console.log("Conexión exitosa a MongoDB"))
  .catch((err) => console.error("Error al conectar a MongoDB", err));

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Error de conexión:"));
db.once("open", () => {
  console.log("Conexión exitosa a la base de datos");
});

app.listen(3000, "0.0.0.0", () => {
  console.log("Serven listen on port", port);
});
