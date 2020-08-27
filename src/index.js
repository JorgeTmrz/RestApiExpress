const express = require("express");
const app = express();  

// morgan´s a middleware that processes data before the server
const morgan = require("morgan");

// Settings
app.set("port", process.env.PORT || 3000);
app.set("json spaces", 2)

// Middlewares
app.use(morgan("dev"));

// for understanding simple forms
app.use(express.urlencoded({extended: false}));

// for understanding anD sending json
app.use(express.json());

// Starting the server
app.listen(app.get("port"), () => {
    console.log(`server on port ${app.get("port")}`);
});

//Routes
app.use(require("./routes/index"));
app.use("/api/movies",require("./routes/movies"))
app.use("/api/users",require("./routes/users"))