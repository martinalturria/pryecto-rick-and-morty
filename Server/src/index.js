const server = require("./app");
const { conn } = require("./DB_connection");

const PORT = process.env.PORT || 3001; // Preparamos el server para nuevos puertos

conn.sync({ alter: true })
    .then(() => {
        server.listen(PORT, () => {
            console.log("Server raised in port: " + PORT);
        });
    })
    .catch((error) => console.log(error));
