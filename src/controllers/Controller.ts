import {IResponse} from '../types';

export default abstract class Controller {
    protected response(status: number, message: string, data?: any | null): IResponse {
        return {
            status,
            message,
            data: data || null
        };
    }
}