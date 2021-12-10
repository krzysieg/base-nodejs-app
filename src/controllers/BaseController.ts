import {Request, Response} from 'express';
import Validator from '../validators/Validator';
import HttpHandler from '../HttpHandler';

export default class BaseController extends HttpHandler {
    private validator: Validator;

    constructor() {
        super();
        this.validator = new Validator();
    }

    getData = (): any => {
        return [
            this.validator.validator,
            async (req: Request, res: Response): Promise<Response> => {
                return this.response(res, 200, 'There you go.', []);
            }
        ];
    }
}