const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

app.use(cors({
    origin: "http://localhost:5173"
}));

// Port and address
const PORT = process.env.PORT || 5000;
const HOST = "localhost";

// Test route
app.get("/api/test", (req, res) => {
    res.json({
        message: "Frontend and Backend Connected Successfully!"
    });
});

// Import routes
const entryRoutes = require("./routes/entryRoutes");
const authRoutes = require("./routes/authRoutes");

// Mount routes
app.use("/api/entries", entryRoutes);
app.use("/api/auth", authRoutes);

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI)
    .then(() => {

        console.log("MongoDB Connected Successfully");

        // Start server ONLY after MongoDB connects
        app.listen(PORT, HOST, () => {
            console.log(`Server running at http://${HOST}:${PORT}`);
        });

    })
    .catch((error) => {

        console.log("MongoDB Connection Failed");
        console.log(error);

    });