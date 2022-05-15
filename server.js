const express = require("express");
const mongoose = require("mongoose");
const Task = require("./api/models/todoListModel");
const routes = require("./api/routes/todoListRoutes"); //importing route
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/Tododb");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
routes(app); //register the route

app.listen(PORT, () => {
    console.log(`Server is listenning 👂))) on port: ${PORT}`);
});
