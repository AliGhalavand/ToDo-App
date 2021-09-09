const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const db = require("./db/items");

app. use(function(req, res, next) {
    res. header("Access-Control-Allow-Origin", "*");
    res. header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
    });

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.post("/items", async(req, res) => {
    const results = await db.createItem(req.body);
    res.status(201).json({id: results[0]});
});

app.get("/items", async(req, res) => {
    const items = await db.getAllItems();
    res.status(200).json(items);
});

app.patch("/items/:id", async(req, res) => {
    const results = await db.updateItem(req.params.id, req.body);
    res.status(200).json({ success: true });
});

app.delete("/items/:id", async(req, res) => {
    const results = await db.deleteItem(req.params.id);
    res.status(200).json({ success: true });
});

app.listen(1337, () => console.log("server is running on port 1337"));
