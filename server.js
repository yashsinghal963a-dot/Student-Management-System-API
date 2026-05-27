// 1. FORCE NODE TO USE PUBLIC DNS (Fixes the Windows querySrv bug)
const studentRoutes = require("./routes/studentRoutes");
const dns = require("dns");
dns.setServers(["8.8.8.8", "1.1.1.1"]); 

// 2. Load environment variables
const dotenv = require("dotenv");
dotenv.config();

// 3. Load other packages and modules
const express = require("express");
const connectDB = require("./config/db");

const app = express();

// 4. Connect to Database
connectDB();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Student Management API Running");
});
app.use("/api/students", studentRoutes);
// 5. Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
