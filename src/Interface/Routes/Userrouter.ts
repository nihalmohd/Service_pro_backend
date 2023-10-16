import {Request,Response,Router} from "express"

export const UserRouter = Router();

UserRouter.get("/",(req:Request,res:Response)=>{
    console.log("working");
    res.status(200).json({status:"done"})
})