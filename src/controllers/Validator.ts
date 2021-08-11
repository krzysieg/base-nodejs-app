import express, {NextFunction} from 'express';
import Controller from './Controller';

export default class Validator extends Controller {
    validator = async (req: express.Request, res: express.Response, next: NextFunction): Promise<express.Response> => {
        if (false) {
            const response = this.response(404, 'Holy moly.');
            return res.status(response.status).json(response);
        }
        next();
    }
}