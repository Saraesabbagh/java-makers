const Candy = require("./candy");

class ShoppingBasket {
  constructor() {
    this.allCandies = [];
    this.discount = 0
  }

  applyDiscount(discount) {
    this.discount = discount;
  }

  addItem(candy) {
    this.allCandies = this.allCandies.concat(candy);
  }
  getTotalPrice() {
    let sum = 0;
    this.allCandies.map((candy) => {
      sum += candy.getPrice();
    });
    return sum  - this.discount;
  }
}

basket = new ShoppingBasket();
console.log(basket.addItem(new Candy("Skittle", 3.99)));
console.log(basket.addItem(new Candy("Skittle", 2.99)));
console.log(basket.getTotalPrice());

module.exports = ShoppingBasket;
