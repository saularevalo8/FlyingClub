'use strict';
module.exports = function (sequelize, DataTypes) {
    let AccountHistory = sequelize.define('AccountHistory', {
        HistoryNote: DataTypes.TEXT,
        By: DataTypes.STRING,
    });
    return AccountHistory;
};