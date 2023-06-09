const express = require("express");
const { createTask, getTask, getTasks, deleteTask, updateTask } = require("../controllers/taskController");
const Task = require("../model/taskModel");
const router = express.Router();


router.post("/", createTask);
router.get("/", getTasks);
router.get("/:id", getTask);
router.delete("/:id", deleteTask);
router.put("/:id", updateTask)

module.exports = router;