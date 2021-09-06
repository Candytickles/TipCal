//Calculate Tip
function calculateTip() {
    console.log("asas");
    var billAmt = document.getElementById("billamt").value;
    var tipamt = document.getElementById("tipamt").value;
    var numOfPeople = document.getElementById("peopleamt").value;
    //validate input
    if (billAmt <= 0) {
      alert("Bill Amount should be more than one");
      return;
    }
    if (numOfPeople <= 0) {
      alert("Number of people should be more than one");
      return;
    }
    if (tipamt < 0) {
      alert("Tip should be more than or equal to zero");
      return;
    }
    if (tipamt > 100) {
      alert("Tip should be less than 100");
      return;
    }
    //Calculate tip
    var total = (billAmt * tipamt) / 100;
    //round to two decimal places
    total = Math.round(total * 100) / 100;
    //next line allows us to always have two digits after decimal point
    //Display the tip
    var eachTip = (total / numOfPeople).toFixed(2);
    var eachTotal = parseFloat(billAmt / numOfPeople) + parseFloat(eachTip);
    //round to two decimal places
    eachTotal = Math.round(eachTotal * 100) / 100;
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = eachTip;
    document.getElementById("total").innerHTML = eachTotal.toFixed(2);
  }
  //To call function onChange
  document.getElementById("billamt").onchange = function () {
    calculateTip();
  };
  document.getElementById("tipamt").onchange = function () {
    calculateTip();
  };
  document.getElementById("peopleamt").onchange = function () {
    calculateTip();
  };