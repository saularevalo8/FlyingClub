import scopes from './scopes';
export default (db) => {

    db.User.belongsTo(db.Role, {
        onDelete: "SET NULL",
        foreignKey: {
            allowNull: true
        }
    });

    db.Role.hasMany(db.User);

    db.AccountHistory.belongsTo(db.User, {
        onDelete: "SET NULL",
        foreignKey: {
            allowNull: true
        }
    });

    db.User.hasMany(db.AccountHistory);
    
    scopes(db);
}