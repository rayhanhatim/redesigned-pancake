const express = require("express");

const app = express();

app.get("/traffic", async (req, res) => {

    try {

        const lat = req.query.lat;
        const lon = req.query.lon;

        const response = await fetch(
            `https://opendata.adsb.fi/api/v3/lat/${lat}/lon/${lon}/dist/150`
        );

        const data = await response.text();

        res.setHeader("Access-Control-Allow-Origin", "*");

        res.send(data);

    } catch (e) {

        res.status(500).send("error");
    }
});

app.listen(3000);
