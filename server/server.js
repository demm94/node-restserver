require('./config/config'); // configuraciones del servidor

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// exportamos y hacemos uso de las rutas de usuario
app.use(require('./routes/usuario'));

// Establecer conexión con BD
const runDbConnect = async() => {
    try {
        await mongoose.connect(process.env.URLDB, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
        console.log("DB ONLINE!!");
    } catch (e) {
        console.log("Error en conexión DB, ", e);
    }
};

runDbConnect();

app.listen(process.env.PORT, () => {
    console.log(`Escuchando puerto -> ${process.env.PORT}`)
});