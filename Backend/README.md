## Instrucciones

Desde la carpeta base del BackEnd ejecutar las instrucciones:
```bash
npm install
npm install --save-dev sequelize-cli
npm i bcrypt
npm i jsonwebtoken dotenv
```

Recordar crear el archivo .env rellenando con los datos sobre la BD y Host correspondiente:
```bash
SECRET_TOKEN=qwertyuiopasdfghjklñzxcvbnm
PORT=8080

DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=database_user
DB_PASSWORD=database_pass
DB_DATABASE=database
DB_DIALECT=postgres
```

Recordar cambiar el username y passowrd en los siguientes archivos:
```bash
src/database.js
migrations/config.json
```

Ejecutamos las migraciones
```
npx sequelize db:migrate
```

Para iniciar el Backend:
```bash
npm start
```
