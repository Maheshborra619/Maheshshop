import Product from "../model/productModel.js";
import asyncHandler from "express-async-handler";



//@desc fetch all products
//route get /api/products
//@access public
export const getProducts = asyncHandler(async (req, res) => {
    const getProducts = await Product.find({});
    res.json(getProducts);
  })


    //@desc fetch product by id
//route get /api/products/:id
//@access public
  // router.get("/:id",getProductById);
 export const getProductById =  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    
    if(product){
        res.send(product);
    }else{
        res.status(404);
        throw new Error("Product not found")
    }
   
  })

