const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const configureRoutes = require('./main/config/routes.config');
const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyParser.json());
configureRoutes(app, router)

const port = 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port} - v.0.11`);
});