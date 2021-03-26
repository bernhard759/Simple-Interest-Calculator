// function to compute the interest
function compute() {

    // check if all data is there
    if (checkdata() == false) {
        return;
    }

    // variable for amount input
    var principal = document.getElementById("principal").value;
    console.log(principal);

    // variable for rate input
    var rate = document.getElementById("rate").value;
    console.log(rate);

    // variable for years input
    var years = document.getElementById("years").value;
    console.log(years);

    // result
    var result = principal * years * rate / 100;
    console.log(result);

    // convert number of years to the actual year in the future
    var futureyear = new Date().getFullYear() + parseInt(years);
    console.log(futureyear);

    // output
    var output = "If you deposit <mark>" + principal + "</mark><br /> at an interest rate of <mark>" +
        rate + "</mark>,<br />you will receive an amount of <mark>" + result + "</mark><br />in the year <mark>" + futureyear + "</mark>.";
    document.getElementById("result").innerHTML = output;
    console.log(document.getElementById("result").value);

};

// document event listener dom content loaded to populate the dropdown
document.addEventListener('DOMContentLoaded', (event) => {

    let select = document.getElementById("years");
    let options = Array.from({length: 10}, (_, i) => i + 1);
    console.log(options);
    for (var i = 0; i < options.length; i++) {
        var opt = options[i];
        console.log(opt);
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = String(opt);
        select.appendChild(el);
    }
});



// function to change the range
function ranger() {
    var val = document.getElementById("rate").value;
    document.getElementById("span1").innerHTML = val; // display this value to the html page
    console.log(val);
};


// validate the forms
function checkdata() {
    // create references to the input element
    var amount = document.getElementById("principal");
    var option = document.getElementById("years");

    // check if amount is empty or invalid
    if (parseInt(amount.value) <= 0) {
        alert("Please enter a positive number");
        amount.focus();
        return false;
    };

    // check if amount is empty or invalid
    if (amount.value == "") {
        alert("Please enter a number");
        amount.focus();
        return false;
    };

    // check if years select field is empty
    if (option.value == "") {
        alert("Please choose the number of years");
        option.focus();
        return false;
    };

};






