import express from "express";
import {authUser,getUserProfile,createUser, updateUserProfile} from "../controllers/userController.js";
import protect from "../middleware/authMiddleware.js";
const router = express.Router();




  //@desc       User-Authenticate
//route  ----POST======== /api/users/login
//@access public
  // router.get("/:id",getProductById);
router.post("/login",authUser);
router.post("/",createUser);
router.route("/profile").get(protect, getUserProfile).put(protect, updateUserProfile);



export default router;