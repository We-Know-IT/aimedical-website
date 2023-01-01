function isValidEmail(email: string) {
  if (!email) {
    return false;
  }
  const validEmailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (!validEmailRegex.test(email)) {
    return false;
  }
  return true;
}

function isValidMessage(message: string) {
  if (!message) {
    return false;
  }
  return true;
}

export { isValidEmail, isValidMessage };
