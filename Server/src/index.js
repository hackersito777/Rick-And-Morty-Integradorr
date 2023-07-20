const http = require("http");
const dotenv = require("dotenv");
const { getById } = require("./controllers/getCharById");
dotenv.config();
const { PORT, PASSWORD } = process.env;

http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*"); // Cors --> Le damos acceso a todos ("*")
    const id = req.url.split("/").at(-1); // '10'
    
    if (req.url.includes("onsearch")) {
      return getById(res, id);
    }

    if (req.url.includes("detail")) {
      return getById(res, id);
    }
  })
  .listen(PORT, () => {
    console.log("Running on http://localhost:3001");
  });
