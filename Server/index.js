// express
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;
// mongoose
const userRoutes = require('./Database/Users/UserRoutes.js');
const connection = require('./Database/Connections.js');
// 

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// routes
userRoutes.registerUserRoutes(app, connection);

  
app.listen(port, () => console.log(`Listening on port ${port}`));