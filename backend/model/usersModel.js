import mongoose from "mongoose";

const userModel = mongoose.Schema ({
    name:{
        type:String, 
        require: true
    },
    email:{
        type:String, 
        require:true,
    },
    password:{
        type:String, 
        require:true
    },
    isAdmin:{
        type:Boolean, 
        default: false
    },
   
},{timestamps: {createdAt: true, updatedAt: false} });

const Users = mongoose.model("Users", userModel);
export default Users;