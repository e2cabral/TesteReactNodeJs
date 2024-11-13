const express = require('express');
const bodyParser = require('body-parser');
const configureRoutes = require('./main/config/routes.config');
const app = express();
const router = express.Router();

configureRoutes(app, router)

app.use(bodyParser.json());



const port = 3000; /* process.env.PORT || */

app.listen(port, () => {
    console.log(`Server is running on port ${port} - v.0.11`);
});