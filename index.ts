import express from 'express';
import * as dotenv from "dotenv";
import cors from "cors";  
import { UserRouter } from './src/Interface/Routes/Userrouter';
import { Database } from './src/infra/Database/config';

dotenv.config();
const port = 3000;

const app = express();
app.use(express.json());

// app.get('/', (req, res) => {
  //   res.send('Hello World!');
  // });
  
  app.use(cors({
    origin: process.env.BASEURL, 
    methods: ["GET", "POST"],
  }));
  
  Database()

app.use("/", UserRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
