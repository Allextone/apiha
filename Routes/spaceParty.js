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
    let artist1 = spaceParty[0];
    let nameArtist1 = artist1.name;

    let artist2 = spaceParty[1];
    let nameArtist2 = artist2.name;

    let artist3 = spaceParty[2];
    let nameArtist3 = artist3.name;

    let artist4 = spaceParty[3];
    let nameArtist4 = artist4.name;

    res.send(`LineUп этой вечеринки: Организаторы вечеринки - ейкей "${nameArtist1}" и ейкей младший "${nameArtist2}". Так же буду присутствовать молодые и горячие "савці сівців": человек-вечеринОчка - "${nameArtist3}" и человек-фитоняшка - "${nameArtist4}"`);
});

router.get("/:id", function(req, res) {//по id перехожу к инфе о каждом братке
    let bratan = spaceParty.find(function(bratan) {
        return bratan.id === Number(req.params.id)
    });
    //if(req.params.id > 4) return res.sendStatus(404);//ошибка, если искаемого братка не будет в вечеринке
    if(bratan.name === "Maks") {
        res.send(`Киевский-местный - ${bratan.name}`);
    } else if(bratan.name === "Allex") {
        res.send(`"Удача" его второе имя - ${bratan.name}`);
    } else if(bratan.name === "Nil Armstrong") {
        res.send(`Человек-космонавт - ${bratan.name}`);
    } else if(bratan.name === "Toha") {
        res.send(`Генератор упомрачительных мыслей - ${bratan.name}`);
    }
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