// const names = ['Anna', 'Li', 'Charlie', 'Mary', 'Jo'];

// const isShorterThanTree = (name) => {
//   if (name.length < 3) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(isShorterThanTree(names));

// const namesShorterThanThreeLetters = names.filter(isShorterThanTree);

// const getUppercased = (name) => {
//   return name.toUpperCase();
// }

// const uppercasedNames = names.map(getUppercased);

// console.log(uppercasedNames);
// console.log(namesShorterThanThreeLetters);
// console.log(isShorterThanTree(names));

// const rawPhoneNumbers = ['1763687364','4763687363','7867867862','AAAA#####AAAA#87@768767382672','4763687363',
// '4763687363']

// const checkLength = (number) => {
  
//     if (number.length <= 10) {
//       return true;
//     } else {
//       return false;
//     }
// }

// console.log(checkLength('1234567899'));

// const filterLongNumbers = rawPhoneNumbers.filter(checkLength);

// console.log(filterLongNumbers);

// const names = ["Anna", "Laura", "Josh", "Min", "Karla"];



// const generateMessages = (nameList) => {
//   return nameList.map((name) => {
//     return 'Hi ' + name + ' 50% off our best candies for you today!';
//   });
// }

// console.log(generateMessages(names));



const namesAndDiscounts = [
  { name: "Anna", discount: 50 },
  { name: "Laura", discount: 40 },
  { name: "Josh", discount: 30 },
  { name: "Min", discount: 50 },
  { name: "Karla", discount: 60 },
];

const generateMessages = (nameList) => {
  return nameList.map((obj) => {
    return (
      "Hi " +
      obj.name +
      " " +
      obj.discount +
      "% off our best candies for you today!"
    );
  });
};

console.log(generateMessages(namesAndDiscounts));