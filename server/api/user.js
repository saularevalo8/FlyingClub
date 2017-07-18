import { Router } from 'express';
import { upload } from "../lib/util";
import User from '../lib/user';

export default () => {
    let router = Router();

    //User
    router.get('/:id/image?', (req, res) => {
        User.getImage(req.params.id, req.query).then(image => {
            res.redirect(image);
        });
    });

    router.get('/all', (req, res) => {
        User.getAll().then(items => {
            res.json(items);
        })
    });

    router.post("/api/createuser", (req, res) => {
     User.addUpdate(req.body).then(data => {
        res.json(data);
     })
    });

    router.post('/:id/image', upload.single('test'), (req, res) => {
        User.addImage(req.params.id, req.file.path).then(result => {
                res.json(result);
            })
            .catch(err => {
                res.json(err);
            });
    });

    router.get('/:id', (req, res) => {
        User.getById(req.params.id).then(item => {
            res.json(item);
        })
    });

    return router;
}