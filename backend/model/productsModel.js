import mongoose from "mongoose";

const productsModel = new mongoose.Schema ({
    
        name:{type:String, require:true},
        image:{type:String, require:true},
        description:{type:String, require:true},
        brand:{type:String, require:true},
        category:{type:String, require:true},
        price:{type:Number, require:true},
        countingStock:{type:String, require:true},
        rating:{type:String, require:true},
        numReviews:{type:Number, require:true},
        createdBy:{
                type:mongoose.Schema.Types.ObjectId,
                ref:"Users",
                require:true,
        }
    
},{timestamps: {createdAt: true, updatedAt: false}}
);

const Products = mongoose.model("Products", productsModel);
export default Products;