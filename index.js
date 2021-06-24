var FizzBuzzType;
(function (FizzBuzzType) {
    FizzBuzzType["Fizz"] = "Fizz";
    FizzBuzzType["Buzz"] = "Buzz";
    FizzBuzzType["FizzBuzz"] = "FizzBuzz";
})(FizzBuzzType || (FizzBuzzType = {}));
//Check if "Fizz", "Buzz", "FizzBuzz", or Number should be displayed
var checkFizzBuzz = function (number) {
    var remainderThree = number % 3;
    var remainderFive = number % 5;
    if (remainderThree === 0 && remainderFive === 0) {
        //Multiple of 3 and 5, print "FizzBuzz"
        return FizzBuzzType.FizzBuzz;
    }
    else if (remainderThree === 0) {
        //Multiple of 3, print "Fizz"
        return FizzBuzzType.Fizz;
    }
    else if (remainderFive === 0) {
        //Multiple of 5, print "Buzz"
        return FizzBuzzType.Buzz;
    }
    return number;
};
//Function to loop from a start to end number for the FizzBuzz values
var fizzBuzzNumbers = function (start, end) {
    for (var i = start; i <= end; i++) {
        console.log(checkFizzBuzz(i));
    }
};
//FizzBuzz function called to display the values of 1 to 100
fizzBuzzNumbers(1, 100);
