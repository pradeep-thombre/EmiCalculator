const mongoose=require('mongoose');
const { Schema } = require("mongoose");

// schema to store students details 
const emiSchema=new mongoose.Schema({
    
    amount:{
        type:Number,
        required:true,
    },
    rate:{
        type:Number,
        required:true,
    },
    duration:{
        type:Number,
        required:true,
    }
    
},{
    timestamps:true
});


const EMI = mongoose.model('EMI', emiSchema);
module.exports = EMI;