// const person = {
//   name: 'Maxine',
//   age: 32,
//   address: {
//     city:'London', 
//     postcode:'E1 123'},
//   hobbies: ['writing', 'tennis', ['cooking']]
// };

// console.log(person.name);
// console.log(person['name']);

// console.log(person.address.city);
// console.log(person.hobbies[1]);

// const bankAccount = {
//   accountNumber: 376717627,
//   accountSortCode: 999999,

//   getBalance: () => {
//     return 100;
//   }
// };

// bankAccount.getBalance();

const cohort1 = {
  name: 'May2022',
  id: 1234,
  students: ['Sara', 'Delphine', 'Arsenii']
};

const getCohort = (cohort) => {
  return `Cohort id = ${cohort.id}- Cohort name - ${cohort.name}- Number of students= ${cohort.students.length}`
};


console.log(getCohort(cohort1));