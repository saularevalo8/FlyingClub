'use strict';
import {} from '../lib/util';
import cloudinary from 'cloudinary';
import config from '../config/config.js';

cloudinary.config(config.cloudinaryConfig);

module.exports = function(sequelize, DataTypes) {
    let User = sequelize.define('User', {
        FirstName: { type: DataTypes.STRING,
        allowNull: false },
        LastName: { type: DataTypes.STRING,
        allowNull: false },
        Address: { type: DataTypes.STRING,
        allowNull: false },
        PhoneNum: { type: DataTypes.STRING,
        allowNull: false },
        email: { type: DataTypes.STRING,
        allowNull: false },
        MemberStatus: {
            type: DataTypes.ENUM,
            values: ["Active", "Inactive", "Student", "Associate", "Waiting List", "Honorary", "A & P", "NonDues"],
            defaultValue: "Inactive",
            allowNull: false
        },
        MedicalRecords: {
            type: DataTypes.ENUM,
            values: ["First", "Second", "Third", "Basic Med"],
            defaultValue: "Basic Med",
            allowNull: false
        },
        SchedulingPrivileges: {
            type: DataTypes.ENUM,
            values: ["Current", "Suspended"],
            defaultValue: "Suspended",
            allowNull: false
        },
        ACAssignment: {
            type: DataTypes.ENUM,
            values: ["N73614", "N21643", "N6375T", "N23676", "None"],
            defaultValue: "None",
            allowNull: false
        },
        PilotRatings: {
            type: DataTypes.ENUM,
            values: ["SEL", "MEL", "SES", "MES", "Complex", "IFR", "Multi","None"],
            defaultValue: "None",
            allowNull: false
        },
        CertificationLevel: {
            type: DataTypes.ENUM,
            values: ["Student", "Sport", "Recreational", "Private", "Commercial", "ATP", "None"],
            defaultValue: "None",
            allowNull: false
        },


        Username: { type: DataTypes.STRING, unique: true, allowNull: false},
        Password: { type: DataTypes.STRING, unique: true, allowNull: false}

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
