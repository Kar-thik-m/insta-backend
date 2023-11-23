import express  from "express";
import cors from "cors";
import dbconnect from "./db-utils/mongoose-connect.js";
import userRouter from "./route/user.js";
import IdataRouter from "./route/instadata.js";

const app = express();
const PORT =process.env.PORT ||2222;

await dbconnect();
app.use(cors());
app.use(express.json());

app.use('/api',IdataRouter);
app.use("/api",userRouter);

app.get('/',  (req, res)=> {
  res.send('welcome');
})

app.listen(PORT,()=>{console.log("run api app")});