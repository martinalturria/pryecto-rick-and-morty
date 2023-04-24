const axios = require("axios");
const { URL } = process.env;

const getCharById = async (req, res) => {
    const { id } = req.params;
    try {
        const { data } = await axios.get(`${URL}/${id}`);
        if (data.name) {
            const character = {
                id: data.id,
                status: data.status,
                name: data.name,
                origin: data.origin,
                species: data.species,
                image: data.image,
                gender: data.gender,
            };
            res.status(200).json(character);
        } else {
            res.status(404).json({ error: "Not found" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = getCharById;
