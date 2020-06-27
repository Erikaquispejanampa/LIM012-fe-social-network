

export const validation = callback => firebase.auth().onAuthStateChanged((user) => {
  // eslint-disable-next-line no-underscore-dangle
  let _emailVerified = false;
  if (user) {
    if (user.emailVerified) {
      _emailVerified = true;
    }
  }
  return callback(_emailVerified);
});
