import { Sequelize } from 'sequelize';
import dotenv from "dotenv";

// Inicializar las configuraciones del archivo .env
dotenv.config();

// Inicializar Sequelize para conectarse a la BD
const sequelize = new Sequelize({
  dialect: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "proyecto",
  logging: true,
});

// Bloquear el programa hasta establecer la conexión con la DB
(async () => await sequelize.authenticate())();

export default sequelize;
