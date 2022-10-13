"use strict";
const axios = require("axios");
const { Country, Season } = require("./db.js");

const chargeDBCountries = async () => {
    let paises = await axios.get("https://restcountries.com/v3/all");
    console.log("Iniciando servidor", paises.data[0]);
    let values = paises.data.map((element) => {
        let capital;
        if (!element.capital) {
            capital = "Capital no disponible";
        } else if (element.capital.length === 1) {
            capital = element.capital[0];
        } else if (element.capital.length > 1) {
            capital = element.capital.join(", ");
        }
        return {
            id: element.cca3,
            name: element.translations.spa.common,
            imgFlag: element.flags[1],
            continent: element.region,
            capital: capital,
            subRegion: element.subregion,
            area: element.area,
            population: element.population,
        };
    });

    for (let element of values) {
        let [countrySearch, created] = await Country.findOrCreate({
            where: { id: element.id },
            defaults: {
                id: element.id,
                name: element.name,
                imgFlag: element.imgFlag,
                continent: element.continent,
                capital: element.capital,
                subRegion: element.subRegion,
                area: element.area,
                population: element.population,
            },
        });
    }
};

module.exports = {
    startServer: async () => {
        try {
            await Season.create({
                name: "Otoño",
            });
            await Season.create({
                name: "Invierno",
            });
            await Season.create({
                name: "Primavera",
            });
            await Season.create({
                name: "Verano",
            });
            await chargeDBCountries();
        } catch (e) {
            console.log("server.js error: ", e);
        }
    },
};