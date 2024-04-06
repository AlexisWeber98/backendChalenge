const express =require ("express");
const morgan = require ("morgan");
import router from "./routes/index.routes";

const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use("/", router);

export default app;
