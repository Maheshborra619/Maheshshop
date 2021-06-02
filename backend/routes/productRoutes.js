import express from "express";
// import Product from "../model/productModel.js";
// import asyncHandler from "express-async-handler";
import {getProducts,getProductById} from "../controllers/productController.js";

const router = express.Router();


//@desc fetch all products
//route get /api/products
//@access public
router.route("/").get(getProducts);

  //@desc fetch product by id
//route get /api/products/:id
//@access public
  // router.get("/:id",getProductById);

router.route("/:id").get(getProductById);
  


  


export default router;