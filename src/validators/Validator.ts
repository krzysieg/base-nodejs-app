import {NextFunction, Request, Response} from 'express';
import HttpHandler from '../HttpHandler';

export default class Validator extends HttpHandler {
    validator = async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
        if (Math.random() > 0.5) {
            return this.response(res, 404, 'Holy moly.');
        }
        next();
    }
}