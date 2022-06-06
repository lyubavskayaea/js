// task. Your task is to create a function that does four basic mathematical operations.
// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.
// Examples(Operator, value1, value2) --> output
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7
const basicOperations = (operation, value1, value2) => {
    //if (operation === "+") {
    //    return value1 + value2;
    //} else if (operation === "-"){
    //    return value1 - value2;
    //} else if (operation === "*"){
    //    return value1 * value2;
    //} else {
    //    return value1 / value2; 
    //}

    const values = {
        '+': value1 + value2,
        '-': value1 - value2,
        '*': value1 * value2,
        '/': value1 / value2,
    }
    return values[operation] ?? "нет входного параметра"
};
console.log(basicOperations("+", 4, 7)); // 11
console.log(basicOperations("-", 15, 18)); // -3
console.log(basicOperations("*", 5, 5)); // 25
console.log(basicOperations("/", 49, 7)); // 7
console.log(basicOperations());