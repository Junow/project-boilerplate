import * as express from 'express';
import { Request, Response } from 'express';
import { IUser } from '../interfaces/user';

const router = express.Router();
const User = require('../models/user');

router.get('/', (req: Request, res: Response) => {
  res.json('hihi');
});

router.get('/test', (req:Request, res: Response) => {
  User.findAll()
    .then((users:Array<IUser>) => {
      if (!users.length) return res.status(404).send({ err: 'User not found' });
      res.send(`find successfully: ${users}`);
    })
    .catch((err:Object) => res.status(500).send(err));
});

export default router;
