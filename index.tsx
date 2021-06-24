enum FizzBuzzType {
  Fizz = "Fizz",
  Buzz = "Buzz",
  FizzBuzz = "FizzBuzz"
}

//Check if "Fizz", "Buzz", "FizzBuzz", or Number should be displayed
const checkFizzBuzz = (number: number): FizzBuzzType | number => {
  const remainderThree = number % 3;
  const remainderFive = number % 5;
  
  if(remainderThree === 0 && remainderFive === 0){
    //Multiple of 3 and 5, print "FizzBuzz"
    return FizzBuzzType.FizzBuzz;
  }else if(remainderThree === 0){
    //Multiple of 3, print "Fizz"
    return FizzBuzzType.Fizz;
  }else if(remainderFive === 0){
    //Multiple of 5, print "Buzz"
    return FizzBuzzType.Buzz;
  }
  return number;
}

//Function to loop from a start to end number for the FizzBuzz values
const fizzBuzzNumbers = (start: number, end: number) => {
  for(let i: number = start; i <= end; i++){
    console.log(checkFizzBuzz(i));
  }
}

//FizzBuzz function called to display the values of 1 to 100
fizzBuzzNumbers(1, 100);