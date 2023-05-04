const { Favorite } = require("../DB_connection");

const postFav = async (req, res) => {
    try {
        const { name, origin, status, image, species, gender } = req.body;
        if (!name || !origin || !status || !image || !species || !gender)
            return res.status(401).send("Faltan Datos");

        const [fav, create] = await Favorite.findOrCreate({
            where: { name },
            defaults: { name, image, status, origin, species, gender },
        });

        const result = await Favorite.findAll();

        return create
            ? res.status(200).json(result)
            : res.status(400).send("Ha habido un error");
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

module.exports = { postFav };
