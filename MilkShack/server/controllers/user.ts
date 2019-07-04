import responseHelper from '../helpers/responseHelper';
import * as HttpCodes from 'http-status-codes';

class userRouter{
    constructor(router:any) {
        router.get('/registration', this.registerUser);
        router.get('/login', this.loginUser);
    }

    registerUser = (req:any, res:any) => {
        responseHelper.responseSend(req,res,HttpCodes.OK,"Welcome to Infosys! Registration",{"name":"Ramesh"});
    }

    loginUser = (req:any, res:any) => {
        responseHelper.responseSend(req,res,HttpCodes.OK,HttpCodes.getStatusText(HttpCodes.OK),{"name":"Ramesh"});
    }
}

export default userRouter;