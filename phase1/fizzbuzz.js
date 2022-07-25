const getNumberSign = (num) => {
  if (num > 0) {
    return "positive";
  } else if (num < 0) {
    return "negative";
  } else {
    return "Zero";
  }
};

const fizzBuzz = (num) =>{
  if (num % 5 == 0 && num % 3 == 0){
    return "FizzBuzz";
  }
  else if (num % 5 == 0){
    return "Buzz";
  }
  else if (num % 3 == 0) {
    return "Fizz";
  } else {
    return num;
  }
}