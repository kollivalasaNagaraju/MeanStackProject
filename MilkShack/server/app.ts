
import * as express from 'express';
import setRoutes from './routes';

class App {

    public app: any;
    constructor() {
        this.initApp();
        this.middleWires();
        this.assignRoutes();
        this.startApplication();
    }

    initApp() {
        this.app = express();
        this.app.set('port', 3000);
    }

    middleWires() {

    }

    assignRoutes() {
       setRoutes(this.app);
    }

    startApplication() {
        this.app.listen(this.app.get("port"));
    }
}

export default new App().app;