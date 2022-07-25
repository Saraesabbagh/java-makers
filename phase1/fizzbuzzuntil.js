const fizzbussUntil(i)

const fizzBuzz = (0...i) =>{
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
  i += 1
}

i = 0;
for(let i=0; i <=10; i++) {
  if (i % 3 == 0 && i % 5== 0){
    console.log(`FizzBuzz`)
  }else if (i % 3 == 0) {
    console.log(`Fizz`)
  } else if (i % 5 == 0) {
    console.log(`Buzz`)
  } else {
    console.log(i)
  }
}
