/* index.js */
import {wait} from "./helpers.js";

const init = () => {
  console.log("Program started");
  wait(3000) .then(()=>{console.log("Waited 3 second")});
  
}

// Sample usage (do not modify)
init();