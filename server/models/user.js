'use strict';
import {} from '../lib/util';
import cloudinary from 'cloudinary';
import config from '../config/config.js';

cloudinary.config(config.cloudinaryConfig);

module.exports = function(sequelize, DataTypes) {
    let User = sequelize.define('User', {
        firstName: { type: DataTypes.STRING,
        allowNull: false },
        lastName: { type: DataTypes.STRING,
        allowNull: false },
        address: { type: DataTypes.STRING,
        allowNull: false },
        phoneNum: { type: DataTypes.STRING,
        allowNull: false },
        email: { type: DataTypes.STRING,
        allowNull: false },
        memberStatus: {
            type: DataTypes.ENUM,
            values: ["Active", "Inactive", "Student", "Associate", "Waiting List", "Honorary", "A & P", "NonDues"],
            defaultValue: "Inactive",
            allowNull: false
        },
        medicalRecords: {
            type: DataTypes.ENUM,
            values: ["First", "Second", "Third", "Basic Med"],
            defaultValue: "Basic Med",
            allowNull: false
        },
        schedulingPrivileges: {
            type: DataTypes.ENUM,
            values: ["Current", "Suspended"],
            defaultValue: "Suspended",
            allowNull: false
        },
        acAssignment: {
            type: DataTypes.ENUM,
            values: ["N73614", "N21643", "N6375T", "N23676", "None"],
            defaultValue: "None",
            allowNull: false
        },
        pilotRatings: {
            type: DataTypes.ENUM,
            values: ["SEL", "MEL", "SES", "MES", "Complex", "IFR", "Multi","None"],
            defaultValue: "None",
            allowNull: false
        },
        certificationLevel: {
            type: DataTypes.ENUM,
            values: ["Student", "Sport", "Recreational", "Private", "Commercial", "ATP", "None"],
            defaultValue: "None",
            allowNull: false
        },


        username: { type: DataTypes.STRING, unique: true, allowNull: false},
        password: { type: DataTypes.STRING, unique: true, allowNull: false}

    });

    User.prototype.toJSON = function() {
        let values = this.get();
        values.images = {
            original: cloudinary.url(values.image, { version: values.imageVersion }),
            thumb: cloudinary.url(values.image, { version: values.imageVersion, width: 200 }),
            small: cloudinary.url(values.image, { version: values.imageVersion, width: 800 }),
            large: cloudinary.url(values.image, { version: values.imageVersion, width: 1500 })

        };
        return values;
    };

    return User;
};
