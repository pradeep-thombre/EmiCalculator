// import instance of express 
const express = require("express");
const router = express.Router();
const emiController=require('../controllers/emiController')
const csvController= require('../controllers/csvController');

// call function of task controller depending on requested url
router.get("/view/:id",emiController.view);
router.post("/create",emiController.create);
router.get("/history",emiController.history);
router.get("/delete/:id",emiController.delete);
router.get("/email/:id",emiController.email);
router.get("/download/:id",csvController.download);

// export router module
module.exports = router;