//controllers
import indexRouter from './controllers/index';
import usersRouter from './controllers/user';
import * as express from 'express';

var apiPaths = {
    "/":indexRouter,
    "/users":usersRouter
}

function setRoutes(app:any) {
    let router = express.Router();
    for(let key in apiPaths){
     let routerCtl = apiPaths[key];
     new routerCtl(router);
     app.use(key,router);
    }
}
export default setRoutes;