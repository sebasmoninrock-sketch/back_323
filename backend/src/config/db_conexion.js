import mysql from "mysql2/promise"; // importamos la libreria
import "dotenv/config"

// creamos una constante POOL
const pool = mysql.createPool({
  host: process.env.MYSQL_ADDON_HOST || "localhost",
  port: Number(process.env.MYSQL_ADDON_PORT) || 3306,
  user: process.env.MYSQL_ADDON_USER || "root",
  password: process.env.MYSQL_ADDON_PASSWORD || "",
  database: process.env.MYSQL_ADDON_DB || "app_usuario",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  timezone: "Z",
  dateStrings: true,
  decimalNumbers: true,
});

export default pool;

// //administra la conexion base de datos
// //usamos la libreria mysql2 para interactuar con MYSQL
// //esta libreria me permite implementar consulta, transacciones , procedimientos, almacenados etc.
// //una mejor opcion es usar ORM

// import mysql from "mysql2/promise"; //importamos la libreria

// //creamos una constante POOL
// const pool = mysql.createPool({
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   password: "",
//   database: "app_usuario",
//   waitForConnections: true,
//   connectionLimit: 10,
//   queueLimit: 0,
//   timezone: "Z",
//   dateStrings: true,
//   decimalNumbers: true,
// });

// export default pool;
