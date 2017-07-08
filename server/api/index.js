import {Router} from 'express';
import Instructor from './instructor';
import User from './user'

export default (app) => {

    app.use('/api/instructor', Instructor());
    app.use('/api/user', User());
    app.use('/api',(req, res) => {
        res.json('it works');
    });

}
