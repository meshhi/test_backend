import { express } from 'express';
import personsRouter from './persons';

const baseRouter = express.router();

baseRouter.use('/', personsRouter)

export default baseRouter;
