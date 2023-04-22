const axios = require("axios");
const { URL } = process.env;

const getCharById = (req, res) => {
    const { id } = req.params;

    axios
        .get(`${URL}/${id}`)
        .then(({ data }) => {
            if (data.name) {
                const { id, status, name, species, origin, image, gender } =
                    data;
                res.status(200).json({
                    id,
                    status,
                    name,
                    species,
                    origin,
                    image,
                    gender,
                });
            } else {
                res.status(500).json({ error: error.message });
            }
        })
        .catch((error) => {
            res.status(404).json({ error: "Not found" });
        });
};

module.exports = getCharById;
