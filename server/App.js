const express = require("express");
const path = require("path");
const cors = require("cors");
const morgan = require("morgan");
const { MongoClient } = require("mongodb");
const mongoose = require('mongoose');
const bodyParser = require("body-parser");

const baseDir = path.join(__dirname, ".."); // Esta es la carpeta base de tu proyecto

const app = express();

app.set("port", process.env.PORT || 5000);

// Middleware
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

// Conectar a la base de datos
const uri = "mongodb+srv://benjaminpavez:benja123@bd-proyecto.8xhdfnm.mongodb.net/?retryWrites=true&w=majority";
let client; // Declarar la variable client aquí para que sea accesible en otras partes del código

// Configuración para servir archivos estáticos
app.use(express.static(path.join(baseDir, "client", "public")));

// Funciones para conectar y desconectar de la base de datos
const connectToDatabase = async () => {
  mongoose.set('bufferCommands', false); // Deshabilitar buffering de comandos para evitar el timeout
  client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  
  try {
    await client.connect();
    console.log('Conexión a la base de datos establecida');
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
    throw error;
  }
};

const disconnectFromDatabase = async () => {
  try {
    await client.close();
    console.log('Desconexión de la base de datos exitosa');
  } catch (error) {
    console.error('Error al desconectar de la base de datos:', error);
    throw error;
  }
};

// Endpoint para imprimir el contenido de la base de datos
app.get("/print-db", async (req, res) => {
  try {
    await connectToDatabase(); // Conectar antes de realizar la consulta

    // Seleccionar la base de datos y la colección
    const database = client.db("Imagenologia");
    const collection = database.collection("patients");

    // Realizar una consulta a la base de datos
    const dataFromDB = await collection.find({}).toArray();

    // Imprimir los resultados en la consola
    console.log("Contenido de la base de datos:", dataFromDB);

    // Enviar una respuesta al cliente
    res.json({ success: true, data: dataFromDB });
  } catch (error) {
    console.error("Error al obtener datos de la base de datos:", error);
    res.status(500).json({ success: false, error: "Error interno del servidor" });
  } finally {
    await disconnectFromDatabase(); // Desconectar después de realizar la consulta
  }
});

app.get("/workers", async (req, res) => {
  try {
    // Conectar al servidor de MongoDB Atlas
    await connectToDatabase();

    // Seleccionar la base de datos y la colección
    const database = client.db("Imagenologia");
    const collection = database.collection("workers");

    // Realizar una consulta a la base de datos
    const dataFromDB = await collection.find({}).toArray();

    // Imprimir los resultados en la consola
    console.log("Contenido de la base de datos:", dataFromDB);

    // Enviar una respuesta al cliente
    res.json({ success: true, data: dataFromDB });
  } catch (error) {
    console.error("Error al obtener datos de la base de datos:", error);
    res.status(500).json({ success: false, error: "Error interno del servidor" });
  } finally {
    await disconnectFromDatabase(); // Desconectar después de realizar la consulta
  }
});

client = new MongoClient(uri, { 
	useNewUrlParser: true, 
	useUnifiedTopology: true,
	socketTimeoutMS: 30000, // tiempo de espera para operaciones de socket
	connectTimeoutMS: 30000, // tiempo de espera para la conexión inicial
});


const patientsSchema = new mongoose.Schema({
	name: String,
	lastname: String,
	age: String,
	email: String,
	citation: String,
	tipo: String,
	rut: String,
	obs: String,
	tel: String,
  });
  
  const patients = mongoose.model('patients', patientsSchema, 'patients');
  
  app.post('/guardar-informacion', async (req, res) => {
	try {
	  console.log("Datos recibidos:", req.body);
	  const nuevoRegistro = new patients(req.body);
	  await nuevoRegistro.save();
	  res.status(201).json({ mensaje: 'Información guardada con éxito AAAAAAAAAAA' });
	} catch (error) {
	  console.error('Error al guardar la información:', error);
	  res.status(500).json({ error: 'Error interno del servidor' });
	}
  });

app.listen(app.get("port"), () => {
  console.log(`Servidor está corriendo en el puerto: ${app.get("port")}`);
});
