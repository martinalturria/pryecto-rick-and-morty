const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define(
        "User",
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            email: {
                type: DataTypes.STRING(40),
                allowNull: false,
                isEmail: true,
            },
            password: {
                type: DataTypes.STRING(15),
                allowNull: false,
            },
        },
        { timestamps: false }
    );
};
