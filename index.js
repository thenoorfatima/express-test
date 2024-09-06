const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const router = require("./UserRoutes");

const app = express();
const port = 4000;

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json());
app.use("/api/v1", router);

app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname + "/index.html"));
});

app.listen(port, () => {
    console.log(`Server is running on port: http://localhost:${port}`);
});

/*
app.get("/api/v1/userdata", (req,res) => {
    res.json({
        name: "chun",
        email: "chun@gmail.com",
        password: "chun",
    });
});

app.post("/api/v1/login", (req,res) => {
    res.send(`<H1> DONE ${req.body.name} </H1>`);
    console.log(req.body);
});*/