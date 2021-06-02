import express from "express";
import {
  authUser,
  getUserProfile,
  createUser,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser
} from "../controllers/userController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

const router = express.Router();

//@desc       User-Authenticate
//route  ----POST======== /api/users/login
//@access public
// router.get("/:id",getProductById);
router.post("/login", authUser);
router.route("/").post(createUser).get(protect,admin, getUsers);

router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);


  router.route('/:id').delete(protect,deleteUser).get(protect,admin,getUserById).put(protect,admin,updateUser);

export default router;
