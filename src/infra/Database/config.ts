import mssql from "mssql/msnodesqlv8"

export const Database = ()=>{
    const sqlconfig ={
      user : "",
      password:"",
      server:"",
      database:""   
    }
        mssql.connect(sqlconfig).then(()=>{
            console.log("Database connected successfully")
        }).catch((error)=>{
            console.log(error.message)
        })
}