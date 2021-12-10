import 'reflect-metadata';
import * as express from 'express';
import * as compression from 'compression';
import {createConnection} from 'typeorm';
import BaseController from './controllers/BaseController';

export default class App {
    private app: express.Express;

    constructor() {
        this.init();
    }

    private async init(): Promise<void> {
        await this.initDbConnection();
        this.initApp();
        this.initRoutes();
        this.runServer();
    }

    private async initDbConnection() {
        try {
            await createConnection();
            console.log('Successfully connected to db.');
        } catch (e) {
            console.error('Failed to connect to db.', e);
        }
    }

    private initApp() {
        this.app = express();
        this.app.use(compression());
    }

    private initRoutes(): void {
        const router: express.Router = express.Router();
        const controller = new BaseController();

        router.get('/', controller.getData());

        this.app.use('', router);
    }

    private runServer(): void {
        this.app.listen(5000, () => {
            console.log('App listening on port 5000!');
        });
    }
}