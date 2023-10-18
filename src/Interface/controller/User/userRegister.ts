import { Request, Response } from "express";
import { Exist } from "../../../app/Usecase/User/Userlogin";


export const Register = (req:Request,res:Response)=>{
    const {Username,Phoneno,password,confirmPassword} = req.body
    try {
        const User = Exist(Username)(Username,Phoneno,password,confirmPassword) as any
        if(!User){
          res.status(401).json({message:"something went wrong"})
        }
        res.status(200).json({message:"Usercreated suceessfully",User})
    } catch (error) {
        res.status(500).json({message:"Internal server Error"})
    }
}