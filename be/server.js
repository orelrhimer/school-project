// be/server.js
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware to parse JSON data and allow cross-origin requests
app.use(express.json());
app.use(cors());

// POST route to receive the form data
app.post('/api/contact', (req, res) => {
    // Extract the data sent from the frontend
    const { fullName, email, phone, subject, message } = req.body;

    // Print the data to the server console in the required format
    console.log("--- New Contact Form Submission ---");
    console.log(`שם מלא: ${fullName}`);
    console.log(`אימייל: ${email}`);
    console.log(`טלפון: ${phone}`);
    console.log(`נושא: ${subject}`);
    console.log(`תוכן: ${message}`);
    console.log("-----------------------------------");

    // Send a success message back to the client
    res.json({ success: true, message: "הנתונים התקבלו בהצלחה!" });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
