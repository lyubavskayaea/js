/* form.js */

export function isPasswordValid(password) {
  console.log(password.trim().length);
  if (password.length >= 10) {
    return password.trim().length
  }
  return false
}



