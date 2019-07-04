class responseHelper {
    static responseSend = (req:any,res:any,statusCode:number,message:string,data:object=null) => {
        res.status(statusCode).json({
            "message":message,
            "data":data
        });
    };
}
export default responseHelper