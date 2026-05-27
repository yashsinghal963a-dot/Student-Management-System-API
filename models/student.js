const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    rollNumber: {
        type: String,
        required: true,
        unique: true
    },
    department: {
        type: String,
        default: "General"
    }
}, {
    timestamps: true 
});

module.exports = mongoose.model("Student", studentSchema);