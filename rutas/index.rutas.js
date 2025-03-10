import { Router } from "express";
import { marco, ping, raiz } from "../controladores/index.controladores.js";


const router = Router();

router.get("/",raiz);
router.get("/marco",marco);
router.get("/ping",ping);

export default router;