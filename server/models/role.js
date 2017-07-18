'use strict';
module.exports = function (sequelize, DataTypes) {
    let Role = sequelize.define('Role', {
        role:{
            type: DataTypes.ENUM,
            values: ["Club Officer", "Club Member"],
            defaultValue: "Club Member",
            allowNull: false
        },
    });
    return Role;
};