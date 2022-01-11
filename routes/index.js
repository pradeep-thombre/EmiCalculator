// importing libraries and controllers
const express=require('express');
const router=express.Router();
const homeController= require('../controllers/homeController');

// this will to redirected to home controller acction
router.get('/',homeController.home);

// this urls will use other files for routs  
router.use('/users',require('./users'));
router.use('/emi',require('./emi'));


module.exports = router;