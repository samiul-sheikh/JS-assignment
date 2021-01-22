// solution to the problem no 1:
// 1000 meter = 1 kilometer;

function kilometerToMeter(kilometer) {
    var meter = kilometer * 1000;
    return meter;
}

var result = kilometerToMeter(5);
console.log(result);

// another way with declare a variable
var input = 10;
var km = kilometerToMeter(input);
console.log(km);



// solution to the problem no 2:

function budgetCalculator(watch, phone, laptop) {
    var watchPrice = watch * 50;
    var phonePrice = phone * 100;
    var laptopPrice = laptop * 500;
    var totalPrice = watchPrice + phonePrice + laptopPrice;
    return totalPrice;
}
var totalBudget = budgetCalculator(5, 5, 5)
console.log(totalBudget);