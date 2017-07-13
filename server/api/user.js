import {Router} from 'express';
import {upload} from "../lib/util";
import User from '../lib/user';

export default () => {
    let user = Router();

    //User
    user.get('/:id/image?', (req, res) => {
        User.getImage(req.params.id, req.query).then(image => {
            res.redirect(image);
        });
    });

    user.get('/all', (req, res) => {
        User.getAll().then(items => {
            res.json(items);
        })
    });

    user.post('/:id/image', upload.single('test'), (req, res) => {
        User.addImage(req.params.id, req.file.path).then(result => {
            res.json(result);
        })
            .catch(err => {
                res.json(err);
            });
    });

    user.get('/:id', (req, res) => {
        User.getById(req.params.id).then(item => {
            res.json(item);
        })
    });

    return user;
}
