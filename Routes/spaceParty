const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();

//const app = express();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

let spaceParty = [ //братики в нашей вечеринке
    {
        id: 1,
        name: "Maks",
        pogonyalo: "Raketa"
    },
    {
        id: 2,
        name: "Allex",
        pogonyalo: "Ragozin"
    },
    {
        id: 3,
        name: "Nil Armstrong",
        pogonyalo: "Tony Stark"
    },
    {
        id: 4,
        name: "Toha",
        pogonyalo: "Ilon Mask"
    }
];


router.get("/", function(req, res) {
    res.send(spaceParty);
});

router.get("/:id", function(req, res) {//по id перехожу к инфе о каждом братке
    let bratan = spaceParty.find(function(bratan) {
        return bratan.id === Number(req.params.id)
    });
    //if(req.params.id > 4) return res.sendStatus(404);//ошибка, если искаемого братка не будет в вечеринке
    res.send(bratan);
});

router.post('/', function(req, res) {//добавляю братка
    let bratan = {
        id: req.body.id,
        name: req.body.name,
        pogonyalo: req.body.pogonyalo
    };
    spaceParty.push(bratan);//пушу братика в массив
    if(req.body.name = null) return res.sendStatus(500);//НЕ ДОДЕЛАЛ, типа если имя undefined - то выбивать ошибку.
    res.send(bratan);
});

router.put("/:id", function(req, res) {//обновляю братка
    let bratan = spaceParty.find(function(bratan) {
        return bratan.id === Number(req.params.id)
    });
    bratan.pogonyalo = req.body.pogonyalo;//как только придумаем новое погоняло кому-нибудь, сразу поменяем его в массиве
    if(req.body.pogonyalo === null) return res.sendStatus(500);
    res.sendStatus(200);
});

router.delete("/spaceParty/:id", function(req, res) {
    spaceParty = spaceParty.filter(function(bratan) {
        return bratan.id !== Number(req.params.id);
    })//вернёт массив братков без того, которого передали в url
    res.sendStatus(200);
})

module.exports = router;