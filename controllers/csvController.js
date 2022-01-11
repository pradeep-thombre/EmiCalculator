const Emi = require("../models/emi");

const fs = require('fs');

// action function to create csv files and responsing with that
module.exports.download = async function (req, res) {
  try {
    let emi= await Emi.findById(req.params.id);
    let duration=emi.duration;
    let amount=emi.amount;
    let rate=emi.rate/12/100;
    let bracket= Math.pow(1+rate,duration)
    monthlyEmi= (amount * rate * bracket)/(bracket-1);
    amount=monthlyEmi*duration;
    percent=100/duration;
    remPercent=100;

    let months=['January','February','March','April','May','June','July','August','September','October','November','December'];
    let month =parseInt(new Date().getMonth());
    let year =parseInt(new Date().getFullYear());
    let count=1;

    
      // creating the csv file data here only 
    let entry = "";
    let fileData = "Sr.No,Months,Monthly EMI,Remaining Amount,%Loan Remaining,";
    for(duration;duration>0;duration--){
      month++;
      if(month==12){
          month=0;
          year++;
      }
      amount-=monthlyEmi;
      remPercent-=percent;
      
      entry = count+","+months[month]+year +","+Math.round(monthlyEmi)+","+Math.max(Math.round(amount),0)+","+remPercent.toFixed(2)
      count++;
      fileData+="\n"+entry;
      
    }
    fileData+="\n"+"Principal Amount, Rs."+emi.amount;
    fileData+="\n"+"Rate of Intrest,"+emi.rate +"%";
    fileData+="\n"+"Duration,"+emi.duration +" Months";
    const file = fs.writeFile('assets/EMI-Data.csv',fileData,(err,data)=>{
      if(err){
          console.log(err);
          return res.redirect('back');
      }
      console.log(data);
      return res.download('assets/EMI-Data.csv');
    });
  } 
  catch (err) {
    console.log("Error******************",err);
  }
};