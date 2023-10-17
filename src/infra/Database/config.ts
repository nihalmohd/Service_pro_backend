import mssql from "mssql/msnodesqlv8"

export const Database = () => {
    const sqlconfig = {
        server: process.env.SQLSERVER as string,
        database: process.env.DATABASENAME as string,
        user: process.env.USERNAME as string,
        password: process.env.PASSWORD as string,
        options: {
            trustedConnection: true
        }
    }
    mssql.connect(sqlconfig).then(() => {
        console.log("Database connected successfully")
    }).catch((error) => {
        console.log(error.message)
    })
}