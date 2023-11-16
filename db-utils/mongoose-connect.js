import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();


const username="sparrowkarthik007"//process.env.DB_USERNAME ||'';
const password="2eDu0Q9BotBP1QBF"//process.env.DB_PASSWORD ||'';
const clustername="cluster0.h4z8f6b.mongodb.net"//process.env.DB_CLUSTER||'';
const database="insta"//process.env.DB_DATABASE||'';


const cloudMongoUrl =`mongodb+srv://${username}:${password}@${clustername}/${database}?retryWrites=true&w=majority`

const dbconnect = async ()=>{
try{
await mongoose.connect(cloudMongoUrl,{
    useNewUrlParser: true,
});
console.log('connected');
}
catch(error){
    console.log(error);
    process.exit(1);
}
};
export default dbconnect;
