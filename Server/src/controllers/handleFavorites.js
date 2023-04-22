let myFavorites = [];

const postFav = (req, res) => {
    const character = req.body;

    myFavorites.push(character);

    res.status(200).json(myFavorites);
};

const deleteFav = (req, res) => {
    const { id } = req.params;

    const delFav = myFavorites.filter((char) => char.id !== +id);
    myFavorites = delFav;

    res.status(200).json({myFavorites})
};

module.exports = { postFav, deleteFav };
