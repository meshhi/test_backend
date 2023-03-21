import { express } from 'express';

const personsRouter = express.router();

/* GET users listing. */
personsRouter.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

export default personsRouter;
