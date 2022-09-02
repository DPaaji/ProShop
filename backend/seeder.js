import {connectDB} from "./config/db.js";

import Products from "./model/productsModel.js";
import Users from "./model/usersModel.js";

import productsData from "./seeder-data/product.seeder.js";
import usersData from "./seeder-data/users.seeder.js";

const importData = async () => {
    connectDB();
    try {
        //delete
        
        await Products.deleteMany();
        await Users.deleteMany();

        //insert
        const updatedUsers = await Users.insertMany(usersData);
        const updatedProducts = productsData.map((product)=>({
            ...product, 
            createdBy: updatedUsers[0]._id,
        }));
        await Products.insertMany(updatedProducts);

        console.log("success");
        process.exit();
    } catch (err) {
        console.log(`Error: ${err.message}`);
        process.exit(1);
    }
};

const deleteData = async () => {
    connectDB();
    try {
        // delete data
        await Products.deleteMany();
        await Users.deleteMany();
        
        console.log("Product Data deleted successfully")
    } catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit(1);
    }
};

console.log(process.argv);
if(process.argv[2] === "-D"){
    deleteData();
}else{
    importData();
};
