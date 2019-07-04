import responseHelper from '../helpers/responseHelper';
import * as HttpCodes from 'http-status-codes';

class indexRouter{
    constructor(router:any) {
        router.get('/health', this.serverStatus);
        router.get('/', this.serverStatus);
    }
    serverStatus = (req:any, res:any) => {
        responseHelper.responseSend(req,res,HttpCodes.OK,"Server is Running!",{"name":"Ramesh"});
    }
}

export default indexRouter;