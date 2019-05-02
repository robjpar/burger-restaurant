const express = require('express');
const app = express();

// Server configuration
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

// Folder for static contents
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

// Support for Handlebars
const exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

// Routes
const routes = require('./controllers/burgers_controller.js');
app.use(routes);

// Start the server
const port = process.env.PORT || 8080;
app.listen(port, () =>
  console.log(`Server ${__filename} listening on port ${port}`));
