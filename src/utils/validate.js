export const validateEmail = (value) => {
  return value.includes("@");
};

export const validatePassword = (value) => {
  return value.length >= 8;
};
