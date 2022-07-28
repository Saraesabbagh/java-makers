const Candy = require('./candy')

describe("Candy", () =>  {
  describe('getName', () => {
  it ("takes a new candy and returns its name", () => {
    candy = new Candy('Mars',  4.99);
    expect(candy.getName()).toBe("Mars");
    })
  })
  describe('getPrice', ()  =>{
    it ('returns the price of the candy', () =>{
      candy = new Candy('Mars', 4.99);
      expect(candy.getPrice()).toEqual(4.99);
    })
  })
})