//importa el creador de rutas de express  
//ejemplo: /API/Usuarios
import { Router } from "express"; 

import * as usuarioCtr from "./usuario.controller.js";

const router = Router(); //uso el metodo router() del express para crear las rutas 


//la ruta tiene dos parametros la ruta encimisma y el metodo que la resuelve
router.get("/usuarios", usuarioCtr.obtenerUsuarios);

export default router;
