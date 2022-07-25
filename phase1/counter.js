

// const increment = () => {
//   let counter = 0;
//   while(counter < 5)
//   {
//     counter +=1;
//     console.log(counter); 
//   } 
// }
let count = 0;

const increment = () => {
  if (count < 10)
  {
    count ++;
  }
  console.log(`${count}`);
}

setInterval(increment, 2000);

// const setInterval = (function delay) => {
//   console.log(increment, 2000);
// }

setInterval(increment, 2000);

// const printHello = () => {
//   console.log("Hello!");
// }

// const executeAfteryDelay = (function delay) => {
//   console.log(printHello 5000);
// }
// executeAfteryDelay(printHello 5000);