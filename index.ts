import express from 'express';
import * as dotenv from "dotenv";
import cors from "cors" 


dotenv.config();
const port = 3000;

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use(cors({
    origin: 'localhost:3000',
    methods: ["GET", "POST"],
  }));

  app.use("/", )


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
