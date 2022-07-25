const aFunction = () => {
  return 123;
}

const anotherFunction = aFunction;

const returnValue = anotherFucntion();

const uppercaseMessage= (message) => {
  return message.toUpperCase();
}

const transform = (message, transformFunction) => {
  return transformFunction(message);
}

transform("goodbye", uppercaseMessage);

const toLowercaseMessage = (message) => {
  return message.toLowerCase();
};

const transform = (message, transformFunction) => {
  return transformFunction(message);
};

transform("HELLO", toLowercaseMessage);

const notifyByEmail = (email) => {
  return `Email sent to: <${email}>`;
};

const notifyByText = (phonenumber) => {
  return `Text sent to: <${phonenumber}>`;
};

const notify = (emailOrPhone, notifyFunction => {
  return notifyFunction(emailOrPhone);
};

console.log(notify("sara@email.com", notifyByEmail));
console.log(notify("12345678910", notifyByText));