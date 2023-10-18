import * as sql from "mssql";

export interface UserRepository {
  createUser: (username: string, phoneNumber: string, password: string, confirmPassword: string) => Promise<void>;
}

export const createUserRepository = async (connectionConfig: sql.config): Promise<UserRepository> => {
  const createUser = async (username: string, phoneNumber: string, password: string, confirmPassword: string): Promise<void> => {
    const request = new sql.Request();

    try {
      await request.query(`
        INSERT INTO YourTable (Name, PhoneNumber, PasswordHash, Confirmation)
        VALUES (${username as String,phoneNumber as String, password as String, confirmPassword as String});
      `, (err) => {
        if (err) {
          throw err; 
        }
      });
    } catch (err) {
      throw err; 
    }
  };

  return {
    createUser,
  };
};
