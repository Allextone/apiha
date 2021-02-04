const express = require("express");
const bodyParser = require("body-parser");
//const MongoCLient = require("mongodb").MongoClient; //заебала, не устанавливается нормально, ебал я в рот mongod
const queriesRouter = require(`./Routes/spaceParty`);

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res) {
    res.send("Здарова, браток! Добро пожаловать на наш скромный движ. Хочешь узнать организатор данного мероприятия, переходи на http://localhost:3000/spaceParty.");
});

app.use("/spaceParty", queriesRouter);

app.listen(port, function() {
    console.log("Vecherinka v razgare...")
});