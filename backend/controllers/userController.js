import User from "../model/userModel.js";
import asyncHandler from "express-async-handler";
import generateToken from "../Utils/generateToken.js"


  //@desc       User-Authenticate
//route  ----POST======== /api/users/login
//@access public
  // router.get("/:id",getProductById);
export const authUser = asyncHandler(async (req, res) => {
    const {email,password} = req.body;

    const user = await User.findOne({email});

    if(user && await user.matchPassword(password)){
  res.json({
         _id:user._id,
         name:user.name,
         email:user.email,
         isAdmin:user.isAdmin,
         token:generateToken(user._id)
     })
    } else{
        res.status(404);
        throw new Error("Invalid email and password");
    }
  })


    //@desc      Register new User
//route  ----POST ======== /api/users
//@access Public
  // router.get("/:id",getProductById);

  export const createUser = asyncHandler(async (req, res) => {
    const {name, email,password} = req.body;

    const userExists = await User.findOne({email});

    if(userExists){
      res.status(400);
      throw new Error("User already created");
    }else{
    
        const user = await User.create({name,email,password});

        if(user){
          res.status(201);
          res.json({
            _id:user._id,
            name:user.name,
            email:user.email,
            isAdmin:user.isAdmin,
            token:generateToken(user._id)
          });
        }
      }
    
})

    //@desc       Get User Profile
//route  ----GET======== /api/users/profile
//@access private
  // router.get("/:id",getProductById);

  export const getUserProfile = asyncHandler(async (req, res) => {
       const user  = await User.findById(req.user.id);


       if(user){
        res.json({
          _id:user._id,
          name:user.name,
          email:user.email,
          isAdmin:user.isAdmin
      })
       }else{
         res.status(404);
         throw new Error("User not found");
       }
  })


      //@desc       update User Profile
//route  ----PUT======== /api/users/profile
//@access Private/admin

  export const updateUserProfile = asyncHandler(async (req, res) => {
    const user  = await User.findByIdAndUpdate(req.user.id);


    if(user){
      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;
      if(req.body.password){
        user.password = req.body.password
      }

      const updatedUser  = await user.save();
           
      res.json({
        _id:updatedUser._id,
        name:updatedUser.name,
        email:updatedUser.email,
        isAdmin:updatedUser.isAdmin,
        token:generateToken(updatedUser._id)
      });
    }else{
      res.status(404);
      throw new Error("User not found");
    }
})


    //@desc       Get all User -admin only
//route  ----GET======== /api/users
//@access private/ADdmin
  // router.get("/api/users",getUsers);

  export const getUsers = asyncHandler(async (req, res) => {
    const users  = await User.find();

  res.json(users)
  
})



    //@desc      delete user
//route  ----deLete======== /api/users/:ID
//@access private/admin
  // router.delete("/api/users/:id",deleteUser);

  export const deleteUser = asyncHandler(async (req, res) => {
    const user  = await User.findById(req.params.id);

  if(user){
     await user.remove();
     res.json({message:"user removed"})
  }else{
    res.status(404);
    throw new Error("user doesnot exist")
  }
  
})



    //@desc       Get  User by id
//route  ----GET======== /api/users/:id
//@access private/ADdmin
  // router.get("/api/users/:id",getUserById);

  export const getUserById = asyncHandler(async (req, res) => {
    const user  = await User.findById(req.params.id).select('-password');
if(user){
  res.json(user)
}else{
  res.status(404);
  throw new Error("user doesnot exist")
} 
})



      //@desc       update User 
//route  ----PUT======== /api/users/:id
//@access Private/admin

export const updateUser = asyncHandler(async (req, res) => {
  const user  = await User.findByIdAndUpdate(req.params.id);


  if(user){
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
   user.isAdmin = req.body.isAdmin 

    const updatedUser  = await user.save();
         
    res.json({
      _id:updatedUser._id,
      name:updatedUser.name,
      email:updatedUser.email,
      isAdmin:updatedUser.isAdmin
    });
  }else{
    res.status(404);
    throw new Error("User not found");
  }
})

