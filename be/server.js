const express = require("express");
const path = require("path");
const app = express();
const port = 3000;


app.use(express.static(path.join(__dirname, '../frontend')));


app.use(express.json());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    next();
});

app.post("/contact", (req, res) => {
    console.log(req.body);
    res.send("received");
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "index.html"));
});

app.get("/contact", (req, res) => {
    console.log("GET request data:", req.query);
    res.send("hello world");
});
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);

});
