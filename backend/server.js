const express = require('express');
const { default: mongoose } = require('mongoose');
const dotenv = require("dotenv").config();
const connectDB = require('./config/connectDB');
const Task = require('./model/taskModel');
const cors = require("cors");
const taskRoutes = require("./routes/taskRoute");

const app = express();

//  Middleware

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors({
    origin: ["http://localhost:3000", "https://eyuel-task-manager.com"]
}));
app.use("/api/tasks", taskRoutes);


app.get("/", (req, res) => {
    res.send("Home")
});



const PORT = process.env.PORT || 7000;

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(PORT, () => console.log(`App listening on port ${PORT}!`))
    })
    .catch((error) => console.log(error))

