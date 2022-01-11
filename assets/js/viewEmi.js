

    $(document).ready( function () {
        $('#table').DataTable();
    } );


    let duration=document.getElementById('duration').value;
    let amount=parseInt(document.getElementById('amount').value);
    let rate=document.getElementById('rate').value/12/100;
    let bracket= Math.pow(1+rate,duration)
    let emi= (amount * rate * bracket)/(bracket-1);
    amount=emi*duration;
    percent=100/duration;
    remPercent=100;

    let months=['January','February','March','April','May','June','July','August','September','October','November','December'];
    let month =parseInt(new Date().getMonth());
    let year =parseInt(new Date().getFullYear());
    let count=1;

    for(duration;duration>0;duration--){
        month++;
        if(month==12){
            month=0;
            year++;
        }
        // this function gets a data and it inserts as child in table
        let tableRow = document.createElement('tr'); // create one table row element and setting its inner html as json response
        amount-=emi;
        remPercent-=percent;
        tableRow.innerHTML = (`
            <td>${count++}</td>
            <td>${months[month]}, ${year}</td>
            <td>Rs.${Math.round(emi)}</td>
            <td>Rs.${Math.max(Math.round(amount),0)}</td>
            <td>${remPercent.toFixed(2)}%</td>
        `);

        document.getElementById('table-body').appendChild(tableRow); // adding all details to existing table
        
    }