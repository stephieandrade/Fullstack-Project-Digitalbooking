const validateEmail = (input) => {
  const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return !(!input || regex.test(input) === false);
};

const validatePassword = (input) => {
  return input.length >= 6;
};

export { validateEmail, validatePassword };
