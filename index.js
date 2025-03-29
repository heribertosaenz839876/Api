import express from "express";
import cors from "cors";
import "dotenv/config";
import indexRoutes from "./rutas/index.rutas.js";
import usersRoutes from "./rutas/users.rutas.js";
import loginRoutes from "./rutas/login.rutas.js";

const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());
// Montar las rutas
app.use(usersRoutes);
app.use(indexRoutes);
app.use(loginRoutes);

app.listen(port, () => {
  console.log("http://localhost:" + port);
});
