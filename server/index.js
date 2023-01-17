const express = require('express');
require('dotenv').config();
const router = require('./router.js');
// const controllers = require('./controllers.js');


const app = express();

app.use(express.json());

app.use(router);

const PORT = process.env.PORT || 3000;

app.listen(PORT);
console.log(`Server listening at http://localhost:${PORT}`);

module.exports = app;