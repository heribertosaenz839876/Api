import "dotenv/config";
import express from "express";
import indexRoutes from "./rutas/index.rutas.js";
import usersRoutes from "./rutas/users.rutas.js";
import loginRoutes from "./rutas/login.rutas.js";

const app = express();
const port = 5000;


app.use(express.json());


//console.log(process.env.HOST);
app.use(usersRoutes);
app.use(indexRoutes);



app.listen(port,console.log("http://localhost:" + port));

