import { UserRepository } from "../../../infra/Repository/UserRepository"


export const Exist =(Userrepository:UserRepository)=> async(username:string,phoneno:string,password:string,confirmPassword:string)=>{
    const AddedUser = await Userrepository.createUser(username,phoneno,password,confirmPassword) as any
    if(AddedUser){
      return AddedUser
    }else{
        return null
    }
}