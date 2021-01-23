const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

// set up server
const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5500;

console.log("Starting server");
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

// set up routes
app.use("/posts", require('./routes/postRoutes'));

// set up mongoose
console.log("Connecting to MongoDB");
mongoose.connect(
    process.env.MONGO_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    (err) => {
        if (err) return console.error(err);
        console.log("MongoDB connected");
    });