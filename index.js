


import express from "express";
import cors from "cors";
import rutausuario from "./src/config/modules/usuario/usuario.routes.js";

const app = express();
const PORT = 4100;

// Middlewares
app.use(express.json()); // Para que el servidor entienda JSON en el body
app.use(cors());

app.use("/api", rutausuario);
app.listen(PORT, () => {
  console.log(`Server iniciado en : http://localhost:${PORT}`);
});

// import express, { json } from "express";  //importamos la libreria 
// import cors from "cors";
// //creamos una instancia de la libreria express en la constante app

// const app = express(); //metodo constructor de la libreria 
// const port = 4100; //puerto donde desplegaremos el server


//endpoints o recursos de la API REST
// app.use('/usuario', (req,res)=>{
//     res.send('Hola mundo express');
// })


//otro endponit 
// app.use('/usuario/todos',(req,res) =>{
//     res.json([
//         {
//         id:100,
//         nombre:"camilo",
//         apellido:"mejia",
//         estaActivo:false
//     },
//      {
//         id:100,
//         nombre:"camilo",
//         apellido:"mejia",
//         estaActivo:false
//     },
//      {
//         id:100,
//         nombre:"camilo",
//         apellido:"mejia",
//         estaActivo:false
//     }
// ])
// });

// app.use('/error' , (req,res) => {
//     res.status(500).send({
//         mensaje:"el recurso solicitado no existe",
//         })
// })


// app.listen(port,() =>{
//     console.log(`servidor iniciado en el puerto ${port}`)
// });
