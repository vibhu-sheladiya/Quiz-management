const express=require('express');

const {authController}=require('../../controllers');
const { accessToken } = require("../../middleware/auth");

const router=express.Router();

// create user 
router.post("/create-user",
authController.register
);

// login user
router.post("/login-user",
  accessToken(),
  authController.login
  );


module.exports=router;
