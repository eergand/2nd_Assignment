const setupDb = require("./setupDb");
const Company = require("./companies");
const Location = require("./locations");
const Menu = require("./menus");
const express = require("express");

const app = express();
app.use(express.json());

app.get("/locations", async ( req, res ) => {
    const locations = await Location.findAll();
    res.json(locations);
});

app.get("/locations/:id", async ( req, res ) => {
    const location = await Location.findByPk( req.params.id);
    if (!location) {
        return res.sendStatus(404);
    }
    res.json(location);
});

app.post("/locations", async ( req, res ) => {
    const { name, capacity, manager } = req.body;
    await Location.create({ name, capacity, manager });
    res.sendStatus(201); 
});

app.post("/locations/:id/companies", async ( req, res ) => {
    const location = await Location.findByPk( req.params.id);
    if (!location) {
        return res.sendStatus(404);
    }
    const { name, logoUrl } = req.body;
    await location.createCompany({ name, logoUrl });
    res.sendStatus(201);
});

//async function doStuff(){
    /*await*/ setupDb();
// once the express has been created we "removed" the content to create it on the API. But I want to keep it for later.
   /* const oneChoice = await Menu.create({ title: "One Choice" });
    const noToppin = await oneChoice.createCompany({ name: "Pizza Notoppin", logoUrl: "http://worstpizza.com" });
    const london = await noToppin.createLocation({ name: "London", capacity: 75, manager: "Thomas Jefferson" });

    const moreOnYourPlate = await Menu.create({ title: "More on your plate!" });
    const artichoke = await moreOnYourPlate.createCompany({ name: "The Artichoke", logoUrl: "http://amealforapoor.com" });
    const hull = await artichoke.createLocation({ name: "Hull", capacity: 452, manager: "Mr Scrooge" });

    const goldenMenu = await Menu.create({ title: "The Gold Menu" });
    const theBaron = await goldenMenu.createCompany({ name: "The Baron", logoUrl: "http://youcantaffordit.org" });
    const bath = await theBaron.createLocation({ name: "Bath", capacity: 25, manager: "Sir Biggbelly" });
};

doStuff();*/

module.exports = app;