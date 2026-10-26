## paso a paso 
-verificar vercion de node : node-v
-inicializar el proyecto
-crea el package.json
-cambiamos esta linea :  "type": "module" , para poder implementar modules de ES6
-paquetes basicos = npm i nodemon cors express mysql2:
    -nodemon: solo para desarrollar!sirve para cambiar el code y que se actualice 
    -cors: setear la seguridad de interactuar con direcciones ip diferentes - http
    -express : libreria para crear un servidor rest (post,get,delete,put)
    -mysql2 : esto es una libreria que permite hacer consultas SQL desde NODEJS
-cambiamos la seccion script en package.json asi:
    -"dev": "nodemon index.js",
    -"start" : "node index.js",
con el fin de tener 2 scripts de ejecucion,uno de desarrollo y 
uno de produccion(despliegue)