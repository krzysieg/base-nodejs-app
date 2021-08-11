import * as express from 'express';
import Controller from './Controller';
import Validator from './Validator';

export default class BaseController extends Controller {
    private validator: Validator;

    constructor() {
        super();
        this.validator = new Validator();
    }

    getData = (): any => {
        return [
            this.validator.validator,
            async (req: express.Request, res: express.Response): Promise<express.Response> => {
                const response = this.response(200, 'There you go.', []);
                return res.status(response.status).json(response);
            }
        ];
    }
}