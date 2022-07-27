const fizzbuzz = require('./fizzbuzz');

describe('fizzbuzz', () => {
  it ('checks whether a number is divisble by 5 and 3 and returns fizzbuzz', () => {
    expect(fizzbuzz(15)).toEqual('Fizzbuzz');
  });
it("checks whether a number is divisble by 5 Buzz", () => {
  expect(fizzbuzz(5)).toEqual("Buzz");
});
it("checks whether a number is divisble by 3 and returns Fizz", () => {
  expect(fizzbuzz(3)).toEqual("Fizz");
});
it("checks whether a number is divisble by 5 and 3 and returns the same number if it is not", () => {
  expect(fizzbuzz(7)).toEqual(7);
});

  
});