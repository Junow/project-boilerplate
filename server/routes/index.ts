import * as express from 'express';

const router = express.Router();

/* GET home page. */
router.get('/', (req: express.Request, res: express.Response, next: express.NextFunction) => {
  res.json('hi');
});


export default router;
