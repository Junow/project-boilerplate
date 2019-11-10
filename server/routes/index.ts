import {
  sayHi,
  findAll,
  signup,
  login,
} from '../controller/userController';

const router = require('express').Router();

router.get('/', sayHi);
router.post('/signup', signup);
router.get('/test', findAll);
router.post('/login', login);

export default router;
