// Your solution goes here 
function isStrongPassword(password) {
  if (password.length < 8) {
    console.log('hey')
    return false;
  }

  if (password.indexOf('password') > -1) {
    console.log('hi')
    return false;
  }

  for (let i=0; i < password.length; i++) {
    if (password[i] === password[i].toUpperCase()) {
      return true;
    }
  }

  return false;
}