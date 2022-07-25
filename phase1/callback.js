const printMessage = () => {
  console.log('Hello there');
}
// setTimeout(printMessage, 2000);

// setTimeout(() => {
//   console.log("Hello there");
// }, 2000);

// const printHello = () => {
//   console.log('Hello there');
// }

// setTimeout(printHello, 3000);
const printHello = () => {
  console.log("Hello!");
}

const executeAfteryDelay = (function delay) => {
  console.log(printHello 5000);
}
executeAfteryDelay(printHello 5000);