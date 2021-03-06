process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const messageConfig = require('./messageConfig');
const app = express();

app.use(bodyParser.json());
app.use(cors())

app.post('/formulario', (req, res) => {
    messageConfig(req.body);
    res.status(200).send();
})

app.listen(3000, () => {
    console.log('Servidor corriendo')
});
