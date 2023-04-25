const server = require("./app")

const PORT = process.env.PORT || 3001; // Preparamos el server para nuevos puertos

server.listen(PORT, () => {
    console.log("Server raised in port: " + PORT);
});
