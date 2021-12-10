import {Response} from 'express';
import {IResponse} from './types';

export default abstract class HttpHandler {
    protected response(res: Response, status: number, message: string, data?: any | null): Response {
        const response: IResponse = {
            status,
            message,
            data: data || null
        };
        return res.status(response.status).json(response);
    }
}