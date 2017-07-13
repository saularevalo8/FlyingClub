import {Router} from 'express';
import User from './user'

export default (app) => {

    app.use('/api/user', User());
    app.use('/api',(req, res) => {
        res.json('it works');
    });

}
