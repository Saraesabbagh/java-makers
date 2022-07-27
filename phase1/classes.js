class User {
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
  user.getIntroduction(){
    return "Hi  my name is" + getName();
  }
}

module.exports = User;