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
        VALUES (@username, @phoneNumber, @password, @confirmPassword);
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
