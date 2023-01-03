function isValidEmail(email: string) {
  if (!email) {
    return false;
  }

  /* Regex from https://emailregex.com/ under the title Javascript */
  const validEmailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
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
