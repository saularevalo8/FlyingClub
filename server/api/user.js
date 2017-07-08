import {Router} from 'express';
import {upload} from "../lib/util";
import Instructor from '../lib/instructor';
import db from '../models';

export default () => {
    let router = Router();

    router.get('/', (req, res) => {
        db.Instructor.findById(1).then( data => {
            res.json(data);
        })
    })

    

    return router;
}
