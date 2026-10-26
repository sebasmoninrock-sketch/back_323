//esto administra la conexion con la base de datos usamos la libreria mysql 2 para interactuar 
//con MYSQL esta libreria me perimite implementar,consultas,procedimientos almacenamos y trasacciones etc.
//una mejor opciones es usar un ORM : son librerias con clases independientes del motor de bases de datos,sequelize,prisma


import mysql from "mysql2/promise";  // importamos a la libreria 


//creamos una constante pool
const pool = mysql.createPool({ 
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "app_usuario",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  timezone: "Z",
  dateStrings: true,
  decimalNumbers: true,
});

export default pool;
