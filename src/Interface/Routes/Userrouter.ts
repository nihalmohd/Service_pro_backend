import {Request,Response,Router} from "express"
import { Register } from "../controller/User/userRegister";

export const UserRouter = Router();

UserRouter.get("/",(req:Request,res:Response)=>{
    console.log("working");
    res.status(200).json({status:"done"})
})

UserRouter.post('/User',Register)