/* form.js */

export function isPromoCodeValid(code) {
  console.log(code)
  //return isPromoCodeValid.length <= 10 && isPromoCodeValid.length >=5
  if (code.trim().length < 5) {
    return false
  } else if (code.trim().length > 10) {
    return false
  }
  return true
	// your code
}