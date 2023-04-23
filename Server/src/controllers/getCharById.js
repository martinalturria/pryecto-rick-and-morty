const axios = require("axios");
const { URL } = process.env;

const getCharById = async (req, res) => {
    const { id } = req.params;
    try {        
        const {data} = await axios.get(`${URL}/${id}`);
        const character = {
            id: data.id,
            status: data.status,
            name: data.name,
            origin: data.origin,
            species: data.species,
            image: data.image,
            gender: data.gender

        }
        res.status(200).json(character);
    } catch (error) {
        res.status(404).json({ error: "Not found" });
    }
};

module.exports = getCharById;
