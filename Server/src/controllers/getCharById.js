const axios = require("axios");
// require("dotenv").config();
// const { API_URL } = process.env;
// console.log(process.env.API_URL);
const API_URL = "https://rickandmortyapi.com/api/character/";

function getById(res, id) {
  axios(API_URL + id)
    .then((response) => {
      const { data } = response;
      const character = {
        id: Number(id),
        name: data.name,
        gender: data.gender,
        species: data.species,
        origin: data.origin,
        image: data.image,
        status: data.status,
      };
      res.writeHead(200, { "Content-type": "application/json" });
      return res.end(JSON.stringify(character));
    })
    .catch((error) => {
      if (error.message.includes("404")) {
        res.writeHead(500, { "Content-type": "text/plain" });
        return res.end(error.message);
      }
    });
}

module.exports = {
  getById,
};

