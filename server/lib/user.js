import {User} from '../models';
import cloudinary from 'cloudinary';
import config from '../config/config.js';
import del from 'del';
import {cloudinaryUpload} from './util';

cloudinary.config(config.cloudinaryConfig);

exports.getById = (id) => {
    return User.findById(id);
};

exports.getAll = (searchParams, includeArr) => {
    return User.findAll();
};

exports.search = (userObj) => {
    return User.findAll({where: userObj})
};

exports.add = (userObj) => {
    return User.create(userObj);
};

exports.delete = (id) => {
    return User.destroy({where: {id: id}});
};

exports.addImage = (userId, image) => {
    return new Promise((resolve, reject) => {
        User.findById(userId).then((item) => {
            cloudinaryUpload(image, `users/${item.title}_image`).then(cloudinaryInfo => {
                item.update({image: cloudinaryInfo.public_id, imageVersion: cloudinaryInfo.version}).then(finalRes => {
                    resolve(cloudinaryInfo);
                }).catch(err => {
                    reject(err);
                })
            });
        }).catch(err => {
            reject(err);
        });
    })
};

exports.getImage = (userId, params) => {
    return new Promise((resolve, reject) => {
        User.findById(userId).then(res => {
            params.version = res.imageVersion;
            let image = cloudinary.url(res.image, params);
            resolve(image);
        }).catch(err => {
            reject(err);
        });
    });

};




