const app = require("../src/app");
const session = require("supertest");
const agent = session(app);

describe("Test de RUTAS", () => {
    describe("GET /rickandmorty/character/:id", () => {
        it("Responde con status: 200", async () => {
            await agent.get("/rickandmorty/character/1").expect(200);
        });
        it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async () => {
            const response = await agent.get("/rickandmorty/character/1");
            expect(response.body).toHaveProperty("id");
            expect(response.body).toHaveProperty("name");
            expect(response.body).toHaveProperty("species");
            expect(response.body).toHaveProperty("gender");
            expect(response.body).toHaveProperty("status");
            expect(response.body).toHaveProperty("origin");
            expect(response.body).toHaveProperty("image");
        });
        it("Si hay un error responde con status: 500", async () => {
            await agent.get("/rickandmorty/character/1235").expect(500);
        });
    });
    describe("GET /rickandmorty/login", () => {
        it("Informacion Correcta", async () => {
            const response = await agent.get(
                "/rickandmorty/login/?email=martinalturria@hotmail.com&password=Martin87"
            );
            expect(response.body).toEqual({ access: true });
        });
        it("Informacion Incorrecta", async () => {
            const response = await agent.get(
                "/rickandmorty/login/?email=martinaltuia@hotmail.com&password=Martin87"
            );
            console.log(response.body);
            expect(response.body).toEqual({ access: false });
        });
    });
    describe("GET /rickandmorty/fav", () => {
        it("Devuelve un arreglo con la informacion enviada", async () => {
            const response = await agent.post("/rickandmorty/fav").send({
                id: 1,
                name: "Nombre A",
            });
            expect(response.body).toContainEqual({ id: 1, name: "Nombre A" });
        });
        it("Devuelve un arreglo con la informacion enviada", async () => {
            const response = await agent.post("/rickandmorty/fav").send({
                id: 2,
                name: "Nombre B",
            });
            expect(response.body).toContainEqual({ id: 1, name: "Nombre A" });
            expect(response.body).toContainEqual({ id: 2, name: "Nombre B" });
        });
    });
    describe("DELETE /rickandmorty/fav/:id", () => {
        it("Si no se elimino el personaje se devuelve el mismo Array", async () => {
            const response = await agent.delete("/rickandmorty/fav/123");
            expect(response.body).toContainEqual({ id: 1, name: "Nombre A" });
            expect(response.body).toContainEqual({ id: 2, name: "Nombre B" });
        });
        it("Elimina correctamente el personaje indicado por ID", async () => {
            const response = await agent.delete("/rickandmorty/fav/1");
            expect(response.body).not.toContainEqual({ id: 1, name: "Nombre A" });
        });
    });
});
