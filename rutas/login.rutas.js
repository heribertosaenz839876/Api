import { Router } from "express";
import { login } from "../controladores/login.controladores.js";


const router = Router();


router.post("/login",login);

export default router;