// Github Repository:
// https://github.com/samiul-sheikh/JS-assignment


// solution to the problem no 1:
// Convet Kilometer into Meter using kilometerToMeter function
// 1000 meter = 1 kilometer;

function kilometerToMeter(kilometer) {
    var meter = kilometer * 1000;
    if (kilometer == null) {
        return "value not be empty!";
    }
    return meter;
}

var result = kilometerToMeter();
console.log(result);

// another way with declare a variable
var input = 10;
var km = kilometerToMeter(input);
console.log(km);



// solution to the problem no 2:
// takes 3 input parameter and return total budget using budgetCalculator function

function budgetCalculator(watch, phone, laptop) {
    var watchPrice = watch * 50;
    var phonePrice = phone * 100;
    var laptopPrice = laptop * 500;
    var totalPrice = watchPrice + phonePrice + laptopPrice;
    if (watch < 0 || phone < 0 || laptop < 0) {
        return 'quantity not be empty!';
    }
    return totalPrice;
}
var totalBudget = budgetCalculator(5, 5, 5);
// var totalBudget = budgetCalculator(-1, -2, -3);
console.log(totalBudget);



// solution to the problem no 3:
// takes one parameter and return the total cost according to parameter using hotelCost function

function hotelCost(day) {
    var cost = 0;
    if(day == null || day < 0) {
        return "please enter how many days you want to stay!"
    }

    if (day <= 10) {
        cost = day * 100;
    }
    else if (day <= 20) {
        var firstStayDays = 10 * 100;
        var remainingDays = day - 10;
        var secondStayDays = remainingDays * 80;
        cost = firstStayDays + secondStayDays;
    }
    else {
        var firstStayDays = 10 * 100;
        var secondStayDays = 10 * 80;
        var remainingDays = day - 20;
        var thirdStayDays = remainingDays * 50;
        cost = firstStayDays + secondStayDays + thirdStayDays;
    }
    return cost;
}

var totalCost = hotelCost(22);
// var totalCost = hotelCost();
console.log(totalCost);



// solution to the problem no 4:
// recives an array string as input and return the maximum length element using megaFriend function

function megaFriend(myFriend) {
    var largestName = "";
    if (myFriend.length <= 0) {
        return "Length not be empty!";
    }
    for (var i = 0; i < myFriend.length; i++) {
        if (largestName.length < myFriend[i].length) {
            largestName = myFriend[i];
        }
    }
    return largestName;
}
var friends = megaFriend(['Samiul', 'Chaity', 'nadim', 'ayon']);
// var friends = megaFriend([]);
console.log(friends);