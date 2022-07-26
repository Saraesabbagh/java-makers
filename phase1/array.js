const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNumbers= numbers.concat(5);//adds one element and returns a new array

// console.log(numbers[0]); // 1

// console.log(newNumbers)

// console.log(numbers.length)

// console.log(newNumbers.length)

// numbers.forEach((number) => {
//   console.log(number);
// })

// const names = ['Sara', 'Tiz', 'Sonya', 'Ramzey'];


// console.log(names.length);
// console.log(names[1]);

// const newNames = names.concat('Zander');
// console.log(newNames);
// let count = 0;
// numbers.forEach((number) => {
//   count += number;
//   console.log(count);
// })

// const addToBatch = [1,2,3];
// const newAddToBatch = addToBatch.concat(4);
//   console.log(newAddToBatch);

const addToBatch=(numArray, number) =>{
  if (numArray.length < 5){
    newNumArray = numArray.concat(number);
    console.log(newNumArray);
  } else{
    return console.log(numArray);
  };
  
};

addToBatch([1,2], 4);
addToBatch([1,2,3,4,5],7);
addToBatch([1,2,3,4,5,6,6,7,8,9],10)