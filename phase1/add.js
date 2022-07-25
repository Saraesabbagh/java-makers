const add = (a, b) => { 
return a + b
};

const multiply = (a, b) => {
  return a * b;
};

const sayHello = (name) => {
  return 'Hello' + name;
};

const getNumberSign =(num) => {
  if (num > 0){
    return 'positive'
  }
  else if (num < 0){
    return 'negative'
  }
  else {
    return 'Zero'
  }
}

const isValidLength = (phoneNumber) => {
  const validLength = (10)
  const notValidLength != (10)
  if (phoneNumber.length == validLength) {
   return 'true';
  } else if (phoneNumber.length == notValidLength) {
    return 'false';
  }
};