let principalAmount = 5000;
let numberOfYears = 3;

let rate;
if (numberOfYears > 3 && numberOfYears <= 5) {
    rate = 3;
} 
else if (numberOfYears > 5 && numberOfYears <= 8) {
    rate = 5;
}
else if (numberOfYears > 8 && numberOfYears <= 12) {
    rate = 12;
}
else {
    rate = 15;
}

let interest = (principalAmount * rate * numberOfYears) / 100;

document.getElementById("rate").innerHTML = "Rate OF Interest =>  "+ rate + "%" + "<br>"
document.getElementById("total").innerHTML = "Total Interest  =>  "+ interest + "<br>"
