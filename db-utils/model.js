import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    id: {
        type: 'string',
        require: true,
    },
    name: {
        type: 'string',
        require: true,
    },
   
   email:{
        type:'string',
        require: true,
    },
    password:{
        
        type:'string',
        require: true,
    },
   about:{
    type:"string",
    require:true,
   },
   hobbie:{
    type:"string",
    require:true,
   },
   
});
const itemSchema = new mongoose.Schema({
    id: {
        type: 'string',
        require: true,
    },
    imageurl:{
        type:'string',
        require:true,
    },
    location:{
        type:"string",
        require:true,
    },
    content:{
        type:"string",
        require:true,
    }
});



const user = mongoose.model('userdata', userSchema);
const data=mongoose.model('instadata',itemSchema);

export { user,data };