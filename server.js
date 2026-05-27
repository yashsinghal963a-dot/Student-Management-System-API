// 1. Force public DNS resolvers to handle local network drops
const dns = require("dns");
dns.setServers(["8.8.8.8", "1.1.1.1"]); 

// 2. Initialize environment variables first
const dotenv = require("dotenv");
dotenv.config();

// 3. Import modules
const express = require("express");
const connectDB = require("./config/db");
const studentRoutes = require("./routes/studentRoutes");

const app = express();

// 4. Fire database link
connectDB();

// 5. Middleware parser
app.use(express.json());

// 6. API Routing endpoint Grouping
app.use("/api/students", studentRoutes);

app.get("/", (req, res) => {
    res.send("Student Management API Running");
});

// 7. Start listener port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});