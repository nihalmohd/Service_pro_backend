export function createTableQuery(): string {
    const tableName = "YourTable";
    const columns = [
      { name: "ID", type: "INT", constraints: "PRIMARY KEY" },
      { name: "Name", type: "NVARCHAR(255)" },
      { name: "PhoneNumber", type: "NVARCHAR(20)" },
      { name: "PasswordHash", type: "NVARCHAR(64)" },
      { name: "Confirmation", type: "NVARCHAR(64)" },
    ];
  
    const columnDefinitions = columns
      .map((col) => `${col.name} ${col.type} ${col.constraints || ""}`)
      .join(",\n");
  
    const query = `CREATE TABLE ${tableName} (\n${columnDefinitions}\n);`;
    return query;
  }
  
  // Call the function to get the SQL query
 export const createTableSQL = createTableQuery();
 console.log(createTableSQL);
  
  