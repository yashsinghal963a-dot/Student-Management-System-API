const Student = require("../models/student");

// @desc    Get all student records
// @route   GET /api/students
// @access  Public
const getStudents = async (req, res) => {
    try {
        const students = await Student.find();
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Create a new student record
// @route   POST /api/students
// @access  Public
const createStudent = async (req, res) => {
    try {
        const { name, rollNumber, department } = req.body;

        if (!name || !rollNumber) {
            return res.status(400).json({ message: "Name and Roll Number are required." });
        }

        const newStudent = new Student({
            name,
            rollNumber,
            department
        });

        const savedStudent = await newStudent.save();
        res.status(201).json(savedStudent);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Update an existing student record
// @route   PUT /api/students/:id
// @access  Public
const updateStudent = async (req, res) => {
    try {
        const updatedStudent = await Student.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true } // returns the modified document rather than the original
        );

        if (!updatedStudent) {
            return res.status(404).json({ message: "Student record not found." });
        }

        res.status(200).json(updatedStudent);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Delete a student record
// @route   DELETE /api/students/:id
// @access  Public
const deleteStudent = async (req, res) => {
    try {
        const deletedStudent = await Student.findByIdAndDelete(req.params.id);

        if (!deletedStudent) {
            return res.status(404).json({ message: "Student record not found." });
        }

        res.status(200).json({ message: "Student record deleted successfully." });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getStudents,
    createStudent,
    updateStudent,
    deleteStudent
};