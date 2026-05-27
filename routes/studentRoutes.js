const express = require("express");
const router = express.Router();
const { 
    createStudent, 
    getStudents, 
    updateStudent, 
    deleteStudent 
} = require("../controlers/studentController");

// Base Collection Routes
router.get("/", getStudents);
router.post("/", createStudent);

// Individual Document Routes (using ID parameters)
router.put("/:id", updateStudent);
router.delete("/:id", deleteStudent);

module.exports = router;