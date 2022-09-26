function addMessage(user, message) {
  return new Promise((resolve, reject) => {
    if (!user || !message) {
      return reject("datos incorrectos");
    }
    const fullMessage = {
      user: user,
      message: message,
      date: new Date(),
    };
    console.log(fullMessage);
    resolve(fullMessage);
  });
}

module.exports = {
  addMessage,
};
