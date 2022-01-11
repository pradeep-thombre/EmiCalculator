const nodemailer=require('../config/nodemailer');

// user add function gets called when new user has signed up 
exports.send=(emi)=>{
    let htmlString=nodemailer.renderTemplate({Emi:emi},'/emiMail.ejs');

    nodemailer.transporter.sendMail({
        from:'learningdemo068@gmail.com',
        to:emi.email,
        subject:"Hurray!!! Your Emi Loan Table!",
        html:htmlString
    },(err,info)=>{
        if(err){
            console.log('error in sending mail',err);
            return;
        }
        console.log('Message sent',info);
        return;
    });
}



