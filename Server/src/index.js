const http = require("http");
const dataBD = require("./utils/data");

http.createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    const { url } = req;

    if (url.includes("/rickandmorty/character")) {
        const id = url.split("/").pop();
        const character = dataBD.find((character) => {
            return character.id == id;
        });
        if (character) {
            res.writeHead(200, { "Content-Type": "application/json" });
            return res.end(JSON.stringify(character));
        } else {
            res.writeHead(404, { "Content-Type": "application/json" });
            return res.end(JSON.stringify({ error: "Character not Found" }));
        }
    }
}).listen(3001, "localhost");
