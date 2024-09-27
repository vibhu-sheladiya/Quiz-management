const express=require('express');
const userRoute= require('./user.route');
const quizRoute= require('./quiz');
const router=express.Router();

router.use('/user',userRoute);

// recipe routes
router.use('/quiz',quizRoute);

module.exports=router;