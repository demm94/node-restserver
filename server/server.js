require('./config/config');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/usuario', function(req, res) {
    // Se trabajará con JSON
    res.json('GET USUARIO');
});

app.post('/usuario', function(req, res) {

    let body = req.body;

    if (body.nombre === undefined) {
        res.status(400).json({
            ok: false,
            mensaje: 'El nombre es necesario'
        });
    } else {
        // Se trabajará con JSON
        res.json({
            persona: body
        });
    }
});

app.put('/usuario/:id', function(req, res) {
    let id = req.params.id;
    // Se trabajará con JSON
    res.json({
        id
    });
});

app.delete('/usuario', function(req, res) {
    // Se trabajará con JSON
    res.json('DELETE USUARIO');
});
app.listen(process.env.PORT, () => {
    console.log(`Escuchando puerto -> ${process.env.PORT}`)
});