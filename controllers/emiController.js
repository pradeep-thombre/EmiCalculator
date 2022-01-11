const Emi= require('../models/emi');
const mailer = require('../mailers/mailerController');

module.exports.delete=async function(req,res){
    try{
        let id=req.params.id;        
        let emi= await Emi.findByIdAndDelete(id)
        return res.redirect('back');
    }catch(err){
        req.flash('error','Some Error Occured');
    }
}

module.exports.create=async function(req,res){
    try{
        
        let emi =await Emi.create(req.body);
        // mailer.studentAdd(user);
        res.redirect('/emi/view/'+emi.id);
    }
    catch(err){
        console.log(err);
    }
}

module.exports.view=async function(req,res){
    try{
        let emi= await Emi.findById(req.params.id);
        return res.render('viewEmi',{
            Emi:emi
        });
    }catch(err){
        req.flash('error','Some Error Occured');
    }
}

module.exports.history=async function(req,res){
    try{
        let emi= await Emi.find({email:req.user.email});
        return res.render('viewHistory',{
            Emi:emi
        });
    }catch(err){
        req.flash('error','Some Error Occured');
    }
}

module.exports.email=async function(req,res){
    try{
        
        let emi= await Emi.findById(req.params.id);
        mailer.send(emi);
        res.redirect('back');
    }
    catch(err){
        console.log(err);
    }
}