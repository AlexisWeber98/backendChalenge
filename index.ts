import app from "./app";
require('/database.ts')

app.listen(3001, () => {
console.log("Serven listen on port 3001");

})