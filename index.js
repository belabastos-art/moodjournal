import express from "express";
import { Low } from "lowdb";
import { JSONFile } from "lowdb/node";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static("public"));

app.get("/", function (req, res){
    res.send("./public/index.html");  
})

//console.log(__filename);
//console.log(__dirname);

app.listen(PORT, function () {
    console.log("Server is running on PORT",PORT);
    });