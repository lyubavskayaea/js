/* surface-difference.js */

export default function calculateDifference(firstRectangle, secondRectangle) {
    console.log("first rectangle", firstRectangle)
    console.log("second rectangle", secondRectangle)
    return firstRectangle[0]*firstRectangle[1] - secondRectangle[0]*secondRectangle[1]  
    // your code
  }